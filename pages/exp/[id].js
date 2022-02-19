import Head from 'next/head'
import Layout from '../../components/layout'
// import { getALLPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'



export async function getServerSideProps(context) {
    // console.log(context)
    const postData={title:context.query.id, date:"2021-10-22",contentHtml:"<p>this is test</p>"}
    let num=0;
    for(let i=0;i<500000000;++i){num+=i;}
    console.log('test')
    return {
        props:{
            postData
        }
    }
}
// export function getStaticPaths() {
//     const paths = getALLPostIds()
//     return {
//         paths,
//         fallback:false
//     }
// }

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