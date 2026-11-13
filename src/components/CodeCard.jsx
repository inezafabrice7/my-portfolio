import { useState } from 'react'
import { ArrowUpRight, Terminal } from 'lucide-react'
import { profile } from '../data/profile'
import { socialLinks } from '../data/socialLinks'

const responses = {
  about: profile.bio,
  focus: profile.currentDirection,
  contact: socialLinks.email,
  help: 'Available commands: about, focus, contact, help, signal',
  signal: 'The next chapter is yours to write. Keep building, keep learning, keep going.',
}

export default function CodeCard() {
  const [command, setCommand] = useState('')
  const [history, setHistory] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedCommand = command.trim().toLowerCase()
    if (!submittedCommand) return

    setHistory((previous) => [
      ...previous,
      {
        command: submittedCommand,
        output: responses[submittedCommand] || 'Command not found. Try "help" for the available options.',
        isSecret: submittedCommand === 'signal',
      },
    ])
    setCommand('')
  }

  return (
    <div className="portfolio-terminal overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0a10]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/20 bg-accent/[0.08] text-accent-light">
            <Terminal size={15} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-xs font-medium text-white/75">A little about me</h3>
            <p className="font-mono text-[9px] text-white/30">ineza / profile.shell</p>
          </div>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">Read-only demo</span>
      </div>

      <div
        className="max-h-52 min-h-32 space-y-3 overflow-y-auto p-4 font-mono text-[11px] leading-5 sm:px-5"
        role="log"
        aria-live="polite"
        aria-label="Portfolio terminal output"
      >
        <p className="text-white/40">A tiny local terminal for portfolio information. Try <span className="text-accent-light">help</span>.</p>
        {history.map((entry, index) => (
          <div key={`${entry.command}-${index}`} className={entry.isSecret ? 'secret-transmission' : undefined}>
            <p className="text-accent-light"><span className="text-[#54d9ff]">›</span> {entry.command}</p>
            {entry.isSecret && (
              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#54d9ff]/75">
                Hidden transmission / unlocked
              </p>
            )}
            <p className={`mt-1 whitespace-pre-wrap ${entry.isSecret ? 'text-accent-light' : 'text-white/55'}`}>{entry.output}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/[0.07] px-4 py-3 sm:px-5">
        <label htmlFor="terminal-command" className="font-mono text-sm text-[#54d9ff]">›</label>
        <input
          id="terminal-command"
          aria-label="Portfolio terminal command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          placeholder="Type a command..."
          autoComplete="off"
          spellCheck="false"
          className="min-w-0 flex-1 bg-transparent font-mono text-xs text-white outline-none placeholder:text-white/25"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          Run <ArrowUpRight size={12} aria-hidden="true" />
        </button>
      </form>
      <p className="px-4 pb-3 font-mono text-[9px] text-white/25 sm:px-5">
        Commands display portfolio details only; no shell commands are executed.
      </p>
    </div>
  )
}
