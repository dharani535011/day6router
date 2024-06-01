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
const cyber = () => {
  return (
    <>
       <div id="full"><Card title={'Cybersecurity Vs Ethical Hacking: Top 10 Differences'} url={'https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png'}/>
   <Card title={'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp'}/>
   <Card title={'What Is Hacking? Types of Hacking & More'} url={'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp'}/>
   <Card title={'8 Different Types of Cybersecurity and Threats Involved'} url={'https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png'}/>
   <Card title={'What is Cybersecurity? Importance and its uses & the growing challenge...'} url={'https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif'}/>
    </div>
    </>
    
  )
}

export default cyber