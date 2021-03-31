export const byLabel = (a: { label: string }, b: { label: string }) => {
  var nameA = a.label.toUpperCase()
  var nameB = b.label.toUpperCase()

  return nameA.localeCompare(nameB)
}

export const byChecked = (selected: string[]) => (a: { value: string }, b: { value: string }) => {
  if (selected.includes(a.value)) {
    return -1
  }
  if (selected.includes(b.value)) {
    return 1
  }
  return 0
}
