const Favicon = ({ mainSiteUrl }) => {
    return (
        <>
            <img src={`https://www.google.com/s2/favicons?domain=${mainSiteUrl}&sz=16`} alt='Favicon' />
        </>
    )
}

export default Favicon