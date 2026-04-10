function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <div className="page-header-content">
          {title && <h1>{title}</h1>}
          {subtitle && <p className="lead">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

export default PageHeader;
