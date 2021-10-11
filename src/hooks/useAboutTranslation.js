import { useStaticQuery, graphql } from 'gatsby';
import { useLocale } from './useLocale';

const query = graphql`
  query useAboutTranslations {
    allFile(filter: {relativeDirectory: {eq: "translations"}}) {
      edges {
        node {
          name
          childrenTranslationsJson {
            about {
              pageTitle,
              mission,
              missionDescription,
              history,
              historyDescription,
              coreValues,
              coreValueListItems,
              join,
              joinDescription,
              give,
              giveDescription,
              partner,
              partnerDescription,
              buttons {
                learnMoreButton,
                donateNowButton
              },
              links {
                join,
                donate
              }
            }
          }
        }
      }
    }
  }
`;

// This hook simplifies query response for current language.
const useAboutTranslation = () => {
  const { locale } = useLocale();
  const { allFile } = useStaticQuery(query);

  // Extract all lists from GraphQL query response
  const queryList = allFile.edges.map(item => {
    const currentFileTitle = Object.keys(item.node).filter(
      item => item !== 'name',
    )[0];

    return {
      name: item.node.name,
      ...item.node[currentFileTitle][0],
    };
  });

  // Return translation for the current locale
  return queryList.filter(lang => lang.name === locale)[0];
};

export default useAboutTranslation;