import styled from 'styled-components'

import Favicon from './Favicon'

const StyledLI = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  flex-shrink: 0; 

  list-style-type: none;
  padding: 5px 10px;
  // top right bottom left
  margin: 0;
  font-size: .7rem;

  // Way to make text ... [Reference]: https://css-tricks.com/flexbox-truncated-text/
  min-width: 92%;
  // --------------------------------------------------------------------------------
  max-width: 92%;
  height: 1.5rem;

  //background-color: #6798b6;
  //box-shadow: 0 4px 2px -2px rgba(0,0,0,0.65);
  

  background-color: #39485b;
`

// [Abandoned Plan] Making the whole box clickable (NVM), Have an alt context bar show up with full title
// [Plan] Automatically adjust the text to match flex box size
const StyledA = styled.a`
    text-decoration: none;
    //color: #FFFF;
    //text-shadow: 1px 1px 2px black;
    color: #d5dde8;
    font-family: Monospace;
    font-size: .85rem;
    max-width: 75%;

    // Way to make text ... [Reference]: https://css-tricks.com/flexbox-truncated-text/
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const TimerStyledSPAN = styled.span`
    //color: #27374D;
    color: #d5dde8;
    font-family: Monospace;
    font-size: .85rem;
    // [Resolving For] CASE: The timer flex box would shrink when the text is too long
    // Source: https://stackoverflow.com/questions/49056401/when-using-nowrap-within-a-flex-row-avoid-pushing-the-last-elements-off-the-s
    flex-shrink: 0; 
    margin-right: 1rem;
`

const URLStyledSPAN = styled.span`
    //color: #27374D;
    color: #abb7c7;
    font-family: Monospace;
    font-size: .8rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const HistoryItem = ({ title, time, url }) => {
    if (!title) { // [Resolving For] CASE: Sometimes for link redirects (EX: youtu.be), the title is NULL
        return
    }

    // Index 0: Link with HTTP/HTTPS, Index 1: Abbreviated link (w/o HTTP/HTTPS)
    const arrUrls = url.match( new RegExp(/https?:\/\/([^/]*)\//) )
    
    return (
        <StyledLI>
            <TimerStyledSPAN>{time}</TimerStyledSPAN>
            <Favicon mainSiteUrl={arrUrls[0]} />
            <StyledA href={url}>{title}</StyledA>
            <URLStyledSPAN>{arrUrls[1]}</URLStyledSPAN>
        </StyledLI>
    )
}

export default HistoryItem