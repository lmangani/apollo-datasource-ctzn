# apollo-datasource-ctzn

🥫 Apollo [data source](https://www.apollographql.com/docs/apollo-server/features/data-sources) for [CTZN](https://www.ctznry.com).


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

  getFollowersById(slug) {
    return this.getBySlug(slug);
  }
}
```

## API

### `getAll`

#### Example

```js
const resolvers = {
  Query: {
    organisations: (_source, _args, { dataSoures: { givefood } }) =>
      givefood.getAll(),
  },
};
```

### `getBySlug(slug)`

Get a food bank by `slug`, and all their needs and outlets.

#### Args

- `slug`: A slug for an individual food bank. E.g. `cramlington`

#### Example

```js
const resolvers = {
  Query: {
    foodbank: (_source, { slug }, { dataSoures: { givefood } }) =>
      givefood.getBySlug(slug),
  },
};
```

### `getByLatLng(lat, lng)`

Get food banks near the provided `lat`/`lng`. Returns needs, along with distance in miles.

#### Args

- `lat` **(required)**: Latitude. E.g. `53.42`
- `lng` **(required)**: Longitude. E.g. `-2.55`

#### Example

```js
const resolvers = {
  Query: {
    search: (_source, { lat, lng }, { dataSoures: { givefood } }) =>
      givefood.getByLatLng(slug),
  },
};
```

### `getByAddress(address)`

**It's recommended you don't use this**. Use `getByLatLng` where possible.

Use with caution, and **expect slower response times**.

#### Args

- `address` **(required)**: The address, e.g. `66 The Headrow Leeds LS1 8EQ`

#### Example

```js
const resolvers = {
  Query: {
    search: (_source, { address }, { dataSoures: { givefood } }) =>
      givefood.getByAddress(address),
  },
};
```
