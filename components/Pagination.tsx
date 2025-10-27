interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-border rounded-md bg-card text-card-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Précédent
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border border-border rounded-md ${currentPage === page ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"} disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground transition-colors`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-border rounded-md bg-card text-card-foreground disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent hover:text-accent-foreground transition-colors"
      >
        Suivant
      </button>
    </div>
  );
}
