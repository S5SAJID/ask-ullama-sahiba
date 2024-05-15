/** Props type for Post */
export type PostCardType = {
    title: string,
    date: string,
    author: string,
    upload_utc: string | number,
    question: string,
    tags: string[],
    url: string
}