export function install() {
  import('../subs/page/lib.ts')
    .then(console.log)
    .catch(console.error)
}
