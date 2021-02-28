import buildFormatter from "react-timeago/lib/formatters/buildFormatter"
import esStrings from "react-timeago/lib/language-strings/es"

const getDateFormatter = () => buildFormatter(esStrings)

const parseDate = (date) => Date.parse(date);

export { parseDate, getDateFormatter };