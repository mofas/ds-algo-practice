/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.count = 0;
  this.sub = {};
  this.tweets = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweets[userId] = this.tweets[userId] || [];
  this.sub[userId] = this.sub[userId] || new Set([userId]);
  this.tweets[userId].push({ id: tweetId, count: this.count++ });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  // console.log(this.sub);
  // console.log('tweets', this.tweets);
  // console.log(subs);
  let allNewsFeed = [];
  (this.sub[userId] || []).forEach(followedId => {
    allNewsFeed = allNewsFeed.concat(this.tweets[followedId] || []);
  });
  return allNewsFeed
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
    .map(d => d.id);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  this.sub[followerId] = this.sub[followerId] || new Set([followerId]);
  this.sub[followerId].add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (followerId === followeeId) return;
  this.sub[followerId] = this.sub[followerId] || new Set([followerId]);
  this.sub[followerId].delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter = new Twitter();

twitter.postTweet(1, 5);
console.log(twitter.getNewsFeed(1));
// [5]

twitter.follow(1, 2);
twitter.postTweet(2, 6);
console.log(twitter.getNewsFeed(1));
// [6, 5]

twitter.unfollow(1, 2);
console.log(twitter.getNewsFeed(1));
// [ 5]

console.log('=======');

twitter = new Twitter();
twitter.postTweet(1, 1);
console.log(twitter.getNewsFeed(1));
// [1]

twitter.follow(2, 1);
console.log(twitter.getNewsFeed(2));
// [1]

twitter.unfollow(2, 1);
console.log(twitter.getNewsFeed(2));
// []

console.log('======');

twitter = new Twitter();
console.log(twitter.getNewsFeed(1));
// []

console.log('======');

twitter = new Twitter();
twitter.postTweet(1, 5);
twitter.unfollow(1, 1);
console.log(twitter.getNewsFeed(1));
// [5]
