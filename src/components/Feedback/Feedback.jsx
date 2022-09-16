import { StatList, StatListItem, Btn, Title, BtnsList, BtnsListItem, StatListItemText } from './Feedback.styled'
import { Box } from 'utils/Box'

export const Feedback = ({ values }) => {
    const keys = Object.keys(values)

    const keyToUpeerCase = key => {
        return key.charAt(0).toLocaleUpperCase() + key.slice(1);
    }

    return (
        <Box>
        <Title>Please, leave your feedback</Title>
        <BtnsList>
            {keys.map(key => (<BtnsListItem key={key}><Btn type='button'>{keyToUpeerCase(key)}</Btn></BtnsListItem>))}
        </BtnsList>
        <Title>Statistics</Title>
        <StatList>
                {keys.map(key => (<StatListItem key={key}><StatListItemText>{keyToUpeerCase(key)}: {values[key]}</StatListItemText></StatListItem>))}
        </StatList>
        </Box>
    )
}