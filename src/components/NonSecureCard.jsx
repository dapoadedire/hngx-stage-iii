/* eslint-disable react/prop-types */
import { TagsContainer } from "./TagsContainer";
export const NonSecureCard = ({ src, title,  tags }) => {
    

    return (
        <div  className="card">
            <img src={src} alt={title} />
            <TagsContainer tags={tags} />
        </div>
    );
};

