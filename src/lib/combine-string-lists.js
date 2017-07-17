import R from 'ramda'
const { join, union, split } = R

export default (a='', b='') =>
  join(' ', union(split(' ', a), split(' ', b)))
