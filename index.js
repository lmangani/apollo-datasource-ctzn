const { RESTDataSource } = require('apollo-datasource-rest');

class GiveFoodDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ctznry.com/';
  }

  async getFollowers(userId) {
    return this.get(`.view/ctzn.network/followers-view/${userId}`);
  }
  
  async getFollowed(userId) {
    return this.get(`.table/${userId}/ctzn.network/follow`);
  }
  
  async getCommunities(userId) {
    return this.get(`.table/${userId}/ctzn.network/community-membership`);
  }
  
  async getBlob(userId, blobId) {
    return this.get(`.view/ctzn.network/blob-view/${userId}/${blobId}`);
  }

  // .view/ctzn.network/avatar-view/qxip
  // .view/ctzn.network/posts-view/alphatesters%40ctzn.one?limit=15&reverse=true
  // .view/ctzn.network/blob-view/pfrazee@ctzn.one/profile-banner
  
  
  

  async getByAddress(address) {
    return this.get(`foodbanks/search`, {
      address,
    });
  }
}

module.exports = { GiveFoodDataSource };
