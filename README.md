# apollo-datasource-ctzn

🥫 Apollo [data source](https://www.apollographql.com/docs/apollo-server/features/data-sources) for [CTZN](https://github.com/pfrazee/ctzn).


## Install

```bash
npm i apollo-datasource-ctzn
```

## Usage

The simplest way to get going is by using the DataSource directly.

```js
import { CTZNDataSource } from 'apollo-datasource-ctzn';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ctzn: new CTZNDataSource(),
  }),
});
```

An alternative is subclassing `CTZNDataSource`.

```js
import { CTZNDataSource } from 'apollo-datasource-ctzn';

class Followers extends CTZNataSource {
  constructor() {
    super();
    this.baseURL = '...';
  }

  getAvatar(userId) {
    return this.getAvatar(userId);
  }
}
```

## Example
```js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const CTZNDataSource = require('apollo-datasource-ctzn');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ctzn: new CTZNDataSource(),
  }),
});

server.listen().then(() => {
  console.log(`
    Server is running!
  `);
});
```
