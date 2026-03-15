import image1 from './lord.webp';
import './Bstyle.css';
function ImageComponent(){
    return (<>
    <div className="div-class">
     <img src="https://t3.ftcdn.net/jpg/07/80/67/26/360_F_780672601_0O6rQmHITb3PLdnRDeWhPoTGQ71QHPpn.jpg" alt="No image found" /> 
     <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='10' fill='red'/%3E%3C/svg%3E" alt="Circle" width="100px" height="100px" />
     <img src={image1} alt="No image found"/>
    </div>
    
    </>)
};
export default ImageComponent;