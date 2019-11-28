import request from '@/utils/http'

export function getLatestNews() {
  return request({
    url: '/news/latest',
    method: 'get'
  })
}

export function getNewsById(query) {
  return request({
    url: `/news/${query}`,
    method: 'get'
  })
}

export function getNewsByDate(query) {
  return request({
    url: `/news/before/${query}`,
    method: 'get'
  })
}

export function getStoryExtra(query) {
  return request({
    url: `/story-extra/${query}`,
    method: 'get'
  })
}

export function getShortComments(query) {
  return request({
    url: `/story/${query}/short-comments`,
    method: 'get'
  })
}

export function getLongComments(query) {
  return request({
    url: `/story/${query}/long-comments`,
    method: 'get'
  })
}

export function getSections(query) {
  return request({
    url: '/sections',
    method: 'get'
  })
}

export function getSectionsByID(query) {
  return request({
    url: `/section/${query}`,
    method: 'get'
  })
}

// http://news-at.zhihu.com/api/4/news/latest
// http://news-at.zhihu.com/api/4/news/9717097
// http://news-at.zhihu.com/api/4/story/9717097/short-comments
// http://news-at.zhihu.com/api/4/story/9717097/long-comments
// http://news-at.zhihu.com/api/4/story-extra/9717097 获取对应新闻的额外信息，如评论数量，所获的赞的数量
// http://news-at.zhihu.com/api/4/news/hot // 热门消息
// http://news-at.zhihu.com/api/4/sections // 栏目总览
// http://news-at.zhihu.com/api/4/section/1 // 栏目具体消息查看
