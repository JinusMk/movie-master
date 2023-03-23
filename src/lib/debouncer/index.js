const _debouncer = () => {
  let debounceTimer = null
  return (func, delay = 600) => {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      if (func) func()
    }, delay)
  }
}

const debouncer = _debouncer()

export { debouncer }
