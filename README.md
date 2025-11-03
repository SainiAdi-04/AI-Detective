# 🕵️‍♂️ CSP-Based Detective AI

**CSP-Based Detective AI** is an intelligent solver for *"whodunit"* style logic puzzles — the kind where you must figure out **who did it, with what, and where**, based on a set of logical clues.  
The system models the puzzle as a **Constraint Satisfaction Problem (CSP)** and applies classic AI algorithms to deduce the correct solution by eliminating impossible combinations.

---

## 🧩 Features

- 🧠 **Constraint Satisfaction Modeling** — Represents suspects, weapons, locations, and clues as CSP variables and constraints.  
- ⚙️ **AC-3 Algorithm** — Enforces *arc consistency* to prune impossible options before search.  
- 🔍 **Heuristic Backtracking Search** — Efficiently explores remaining possibilities with forward checking and MRV (Minimum Remaining Values) heuristic.  
- 🚫 **Contradiction Detection** — Automatically identifies and eliminates logically inconsistent assignments.  
- 💡 **Step-by-Step Reasoning** — Optionally logs the AI’s reasoning process to help visualize the deduction.

---

## 🧠 How It Works

1. **Modeling the Puzzle**  
   - Each category (e.g., *Suspect*, *Weapon*, *Room*) becomes a CSP variable.  
   - Each clue becomes a **constraint** (e.g., "If it was done with the Rope, it wasn’t in the Library").  

2. **Inference with AC-3**  
   - The AC-3 algorithm enforces *arc consistency*, removing values that violate constraints.  

3. **Backtracking Search**  
   - After pruning, a backtracking algorithm explores possible assignments.  
   - Uses heuristics like MRV and forward checking for efficient solving.  

4. **Solution Deduction**  
   - Once all constraints are satisfied, the AI outputs the correct *Who*, *Where*, and *What*.  

---
