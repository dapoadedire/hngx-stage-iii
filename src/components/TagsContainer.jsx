/* eslint-disable react/prop-types */
export const TagsContainer = ({ tags }) => {
    return (
        <div className="tags-container">
            {tags.map((tag) => (
                <span key={tag} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
};
