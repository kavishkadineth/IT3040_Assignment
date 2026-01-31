# IT3040_Assignment

Simple repository for IT3040 assignment work.

Contents
- Project files and student submission for the IT3040 assignment.

How to use
- Clone the repository:

```bash
git clone https://github.com/kavishkadineth/IT3040_Assignment.git
cd IT3040_Assignment
```

- To sync with the remote when branches diverge, use one of:

```bash
# Merge (safe, preserves history)
git pull --no-rebase origin main

# Rebase (linear history — rewrites local commits)
git pull --rebase origin main

# Fast-forward only (fails if divergence exists)
git pull --ff-only origin main
```

Notes
- Keep your local changes committed before pulling to avoid conflicts.
- Use `git config pull.rebase true|false` to set a repo or global default behavior.

Author
- kavishkadineth

License
- No license specified. Add a LICENSE file if you want to grant reuse permissions.