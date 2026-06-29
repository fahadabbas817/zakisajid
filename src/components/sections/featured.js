import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsGrid = styled.ul`
  ${({ theme }) => theme.mixins.resetList};

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.boxShadow};
  }

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 0 0;
        text-align: left;
      }
      @media (max-width: 480px) {
        padding: 30px 0 0;
      }
    }
    .project-tech-list {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 10px 5px 0;
        }
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;

      @media (max-width: 768px) {
        justify-content: flex-start;
        margin-left: -10px;
        margin-right: 0;
      }
    }
    .project-image {
      grid-column: 1 / 9;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .project-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;
    z-index: 10;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      grid-column: 1 / -1;
      grid-row: 2;
      padding: 30px 0 0;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 20px 0 0;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    font-weight: 600;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    a {
      display: inline-block;
      background-color: var(--light-navy);
      padding: 10px 20px;
      border-radius: var(--border-radius);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      ${({ theme }) => theme.mixins.boxShadow};
      
      &:hover {
        color: var(--green);
      }
    }

    @media (max-width: 768px) {
      color: var(--white);

      a {
        position: static;
        padding: 0;
        background-color: transparent;
        border: none;
        box-shadow: none;
        backdrop-filter: none;

        &:before {
          content: '';
          display: block;
          position: absolute;
          z-index: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      }
    }
  }

  .project-description {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: var(--fz-lg);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;
      border: none;
      backdrop-filter: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }

    strong {
      color: var(--white);
      font-weight: normal;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 10px 10px 0;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
      background-color: var(--light-navy);
      padding: 5px 15px;
      border-radius: 20px;
      border: 1px solid var(--green);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: var(--lightest-slate);
      }
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;

      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    grid-column: 5 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      grid-row: 1;
      height: auto;
      opacity: 1;
      margin-bottom: 20px;
    }

    a {
      display: block;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      
      &:hover,
      &:focus {
        outline: 0;
        @media (min-width: 769px) {
          .img1, .img2 {
            filter: none;
          }
          .img1 {
            transform: translate(0, 0) rotate(0deg);
            z-index: 3;
          }
          .img2 {
            transform: translate(15px, 15px) rotate(3deg);
            z-index: 1;
          }
        }
      }

      @media (max-width: 768px) {
        &.mobile-flip {
          .img1 {
            transform: translate(0, 0) rotate(0deg);
            z-index: 3;
          }
          .img2 {
            transform: translate(10px, 10px) rotate(2deg);
            z-index: 1;
          }
        }
      }
    }
    
    .images-container {
      position: relative;
      width: 100%;
      height: 100%;
      aspect-ratio: 16 / 9;
    }

    .img1, .img2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: all 0.4s ease-in-out;
      box-shadow: 0 10px 30px -15px var(--navy-shadow);
      border: 1px solid var(--green);
    }

    .img1 {
      z-index: 1;
      transform: translate(15px, 15px) rotate(3deg);
      filter: grayscale(80%) contrast(1) brightness(60%);
    }
    
    .img2 {
      z-index: 2;
      transform: translate(0, 0) rotate(0deg);
      filter: grayscale(20%) contrast(1) brightness(90%);
    }

    @media (max-width: 768px) {
      .img1, .img2 {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      .img1 {
        transform: translate(10px, 10px) rotate(2deg);
      }
      .img2 {
        transform: translate(0, 0) rotate(0deg);
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/featured/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              cover {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              cover2 {
                childImageSharp {
                  gatsbyImageData(width: 700, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const featuredProjects = data.featured.edges.filter(({ node }) => node);
  const revealTitle = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  return (
    <section id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Featured Projects
      </h2>

      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node;
            const { external, title, tech, github, cover, cover2 } = frontmatter;
            const image = getImage(cover);
            const image2 = getImage(cover2);

            return (
              <StyledProject key={i} ref={el => (revealProjects.current[i] = el)}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external || '#'}>{title}</a>
                    </h3>

                    <div
                      className="project-description"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />

                    {tech.length && (
                      <ul className="project-tech-list">
                        {tech.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
                      {github && (
                        <a href={github} aria-label="GitHub Link">
                          <Icon name="GitHub" />
                        </a>
                      )}
                      {external && (
                        <a href={external} aria-label="External Link" className="external">
                          <Icon name="External" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'} onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      e.currentTarget.classList.toggle('mobile-flip');
                    }
                  }}>
                    <div className="images-container">
                      {image && <GatsbyImage image={image} alt={title} className="img img1" />}
                      {image2 && <GatsbyImage image={image2} alt={title} className="img img2" />}
                    </div>
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
