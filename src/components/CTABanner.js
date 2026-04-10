import Link from 'next/link';

function CTABanner({
  title,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
}) {
  const renderPrimaryLink = () => {
    if (!primaryLink) return null;

    // Check if it's an external link
    if (primaryLink.startsWith('http://') || primaryLink.startsWith('https://')) {
      return (
        <a
          href={primaryLink}
          className="btn btn-primary btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryText}
        </a>
      );
    }

    // Internal link
    return (
      <Link href={primaryLink} className="btn btn-primary btn-lg">
        {primaryText}
      </Link>
    );
  };

  const renderSecondaryLink = () => {
    if (!secondaryLink) return null;

    // Check if it's an external link
    if (secondaryLink.startsWith('http://') || secondaryLink.startsWith('https://')) {
      return (
        <a
          href={secondaryLink}
          className="btn btn-outline-light btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {secondaryText}
        </a>
      );
    }

    // Internal link
    return (
      <Link href={secondaryLink} className="btn btn-outline-light btn-lg">
        {secondaryText}
      </Link>
    );
  };

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content">
          {title && <h2 className="cta-title">{title}</h2>}
          {subtitle && <p className="cta-subtitle">{subtitle}</p>}

          <div className="cta-buttons">
            {renderPrimaryLink()}
            {renderSecondaryLink()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
