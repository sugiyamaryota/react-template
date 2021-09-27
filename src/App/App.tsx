import React from 'react';
import Router from './Router';
import fetchGraphQL from './fetchGraphQL';
const { useState, useEffect } = React;

const App = (props) => {
    const [name, setName] = useState(null);

    useEffect(() => {
        let isMounted = true;
        fetchGraphQL(`
          query RepositoryNameQuery {
            # feel free to change owner/name here
            repository(owner: "sugiyamaryota" name: "node-js-study") {
              name
            }
          }
        `).then(response => {
          // Avoid updating state if the component unmounted before the fetch completes
          if (!isMounted) {
            return;
          }
          const data = response.data;
          setName(data.repository.name);
        }).catch(error => {
          console.error(error);
        });
        return () => {
          isMounted = false;
        };
      }, [fetchGraphQL]);

    return (
        <>
            <Router />
            <p> {name != null ? `Repository: ${name}` : "Loading"}</p>
        </>
    )
}


export default App
