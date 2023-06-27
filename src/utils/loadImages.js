export const getImageURL = image => {
    //参数一：相对路径；参数二：当前路径url
    return new URL(`../assets/${image}`, import.meta.url).href
}