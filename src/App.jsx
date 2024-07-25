import { useEffect, useState } from 'react'
import ImageGrid from './components/ImageGrid'
import Model from './components/Model'
import Title from './components/Title'
import Upload from './components/Upload'

const App = () => {
  const [img, setImg] = useState(null)
  useEffect(()=>{
    document.body.style.overflow = img ? 'hidden' : 'auto'
    return ()=>{
      document.body.style.overflow='auto'
    }
  },[img])
  return (
    <div>
      <Title/>
      <Upload />
      <ImageGrid setImg={setImg}/>
      {img && <Model img={img} setImg={setImg}/>}
    </div>
  )
}

export default App