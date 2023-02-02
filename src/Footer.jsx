export default function Footer() {
  const today = new Date();

  return (
    <footer className="container">
      <div className="row mx-auto justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h5 className="text-muted">
            Team Member Allocator App - {today.getFullYear()}
          </h5>
        </div>
      </div>
    </footer>
  );
}
