import Head from 'next/head'
import Layout from '../../components/layout'
import { getALLPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({params}){
    const postData = await getPostData(params.id)
    return {
        props:{
            postData
        }
    }
}
export function getStaticPaths() {
    const paths = getALLPostIds()
    return {
        paths,
        fallback:false
    }
}

export default function Post({ postData }){
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <br/>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date}/>
                </div>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}