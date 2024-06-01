const Card=({url,title})=>{
  return(
      <>
      <div class="card">
<img src={url} class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title">{title}</h5>
</div>
</div>
      </>
  )
}

const Career = () => {
  return (
    <div id="full"><Card title={'A Guide To Learning Blockchain Technology From Scratch'} url={'https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1.jpeg'}/>
   <Card title={'Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp'}/>
   <Card title={'Best Books to Learn Blockchain'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Blockchain.webp'}/>
   <Card title={'Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp'}/>
    </div>
   
  )
}

export default Career