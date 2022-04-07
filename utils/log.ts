export function log(namespace: string) {
  const message = (...data: any[]) => console.log(`[${namespace}]:`, ...data)
  message.warn = (...data: any[]) => console.warn(`[${namespace}][warn]:`, ...data)
  message.error = (...data: any[]) => console.error(`[${namespace}][error]:`, ...data)
  return message
}