const userAgent = {
  desktop: 'bilimini Desktop like Mozilla/233 (Chrome and Safari)',
  mobile: 'bilimini Mobile like (iPhone or Android) whatever AppleWebKit/124.50 Mobile/BI233',
};
const videoUrlPrefix = 'http://www.bilibili.com/video/av';
const bangumiUrl = (aid, pid) => `http://bangumi.bilibili.com/anime/${aid}/play#${pid}`;

export default { userAgent, videoUrlPrefix, bangumiUrl };
