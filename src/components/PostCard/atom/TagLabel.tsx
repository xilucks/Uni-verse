const TagLabel = ({tagName}: {tagName: string}) => {
    return(
        <div className="badge badge-outline">
            {tagName}
        </div>
    )
}

export default TagLabel
