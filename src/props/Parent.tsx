import {ChildAsFC} from './Child'
export default function parent() {
  return (
    <ChildAsFC color="red" onClick={()=>console.log('click')}>
      aldksfd
    </ChildAsFC>
  )
}
