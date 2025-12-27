import React,{useState,useEffect} from 'react'

import appwriteService from '../appwrite/config'
import  {Container,PostCard}  from '../components'

function AllPosts() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{},[])
  appwriteService.getPosts([]).then((posts)=>{
    if(posts){
      setPosts(posts.documents)
    }
  })
  return (
    <div className='w-full py-8 sm:py-8'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {posts.map((post)=>(
            <div key={post.$id} className='p-2 sm:p-2'>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts