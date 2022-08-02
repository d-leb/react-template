import { UseQueryResult, useQuery } from '@tanstack/react-query'

const fetchRandomMeowFact = (): Promise<string> =>
  fetch('https://meowfacts.herokuapp.com/')
    .then((response) => response.json())
    .then((data) => {
      const fact: string | undefined = data?.data?.[0]
      return fact ?? 'No meow fact found'
    })

export const useSampleData = (): UseQueryResult<string> => useQuery<string>(['meowfacts'], fetchRandomMeowFact)
