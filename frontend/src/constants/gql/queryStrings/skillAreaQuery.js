export const SKILL_AREA_QUERY = `query {
    frontEnd {
      id
      name
      skills(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
    
    backEnd {
      id
      name
      skills(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
}`