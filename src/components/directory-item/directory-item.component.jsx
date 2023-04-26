import './directory-item.styles.scss'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imagefile, title ,route} = category;
    const navigate = useNavigate();
    const onNavigateHandler=()=>navigate(route)
    return (
        <div className="directory-item-container" onClick={onNavigateHandler}>
            <div
                className="background-image" 
                style={{
                backgroundImage: `url(${imagefile})`,
                }}
            />
            <div className="body" >
                <h2>{title}</h2>
                <h3>Shop Now</h3>
            </div>
        </div>
    )
}

export default DirectoryItem