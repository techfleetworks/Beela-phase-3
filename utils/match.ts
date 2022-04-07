
/**
 * Match a string against regular expressions. If one matches, run its associated function.
 */
export async function match<T>(
  stringToMatch: string,
  handlers: Record<string, (...regexGroups: string[]) => Promise<T | undefined>>
): Promise<T | undefined> {
  for (const [pattern, handler] of Object.entries(handlers)) {
    const result = stringToMatch.match(new RegExp(pattern))

    if (result) {
      result.shift() // Get rid of the matched string which is at the first position

      const handlerReturnValue = await handler(...result)

      if (handlerReturnValue) return handlerReturnValue
    }
  }
}