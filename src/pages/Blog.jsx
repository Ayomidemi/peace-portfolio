import React from 'react'
import blog from '../data/blog'
import Title from '../components/Title'

const Blog = () => {
  return (
    <div>
      <div className="b-title">
                <Title title={'Blogs'} span={'Blogs'} />
            </div>
            <div className="BlogsPage">
                {
                    blog.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
    </div>
  )
}

export default Blog