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

const Data = () => {
  return (
    <div id="full"><Card title={'12 Real-World Data Science Examples: Power Of Data Science'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp'}/>
   <Card title={'Can A Commerce Student Do Data Science?'} url={'https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png'}/>
   <Card title={'Roles and Responsibilities of a Data Scientist'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png'}/>
   <Card title={'<strong>How Long Would It Take to Learn Data Science?</strong>'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png'}/>
    </div>
  )
}

export default Data