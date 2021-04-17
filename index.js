const { RESTDataSource } = require('apollo-datasource-rest');

class GiveFoodDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ctzn.one/';
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

  async getAvatar(userId) {
    userId = userId.split('@')[0];
    return this.get(`.view/ctzn.network/avatar-view/${userId}`);
  }

  async getPosts(userId, limit, reverse) {
    if (!reverse) reverse = true;
    if (!limit) limit = 10;
    return this.get(`..view/ctzn.network/posts-view/${userId}?limit=${limit}&reverse=${reverse}`);
  }

  async getProfileBanner(userId) {
    return this.get(`.view/ctzn.network/blob-view/${userId}/profile-banner`);
  }
  // .view/ctzn.network/profile-view/alphatesters%40ctzn.one
  async getProfile(userId) {
    return this.get(`.view/ctzn.network/profile-view/${userId}`);
  }

  async getThread(hyperId, postId) {
    return this.get(`..view/ctzn.network/thread-view/${hyperId}/ctzn.network/post/${postId}`);
  }
  
  async getByAddress(address) {
    return this.get(`foodbanks/search`, {
      address,
    });
  }
}

module.exports = { GiveFoodDataSource };
