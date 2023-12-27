import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Mnemonic Bindings',
    description: (
      <>
        VSpaceCode provides key bindings that are organized by mnemonic
        key like <code>f</code> for file and <code>p</code> for project
        and similar to spacemacs.
      </>
    ),
  },
  {
    title: 'Batteries Included',
    description: (
      <>
        VSpaceCode aims to provide the best out-of-the-box experience and
        bundles all the extensions needed out-of the box.
      </>
    ),
  },
  {
    title: 'Customizable',
    description: (
      <>
        The key binding and its menu are fully customizable. VSpaceCode aims
        to provide an escape hatch whenever possible to allow customization.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--4">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={clsx('row', styles.buttons)}>
                <Link
                  className={clsx(
                    'button button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/')}
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col col--8">
              <img src="img/demo.gif" alt="VSpaceCode Demo" className={styles.heroDemo} />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
