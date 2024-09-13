---
shortTitle: Logic Gates
title: A Comprehensive Guide to Logic Gates and XOR Expression Rewriting
category:
    - Journal
tags:
date: 2024-09-11
---

# A Comprehensive Guide to Logic Gates and XOR Expression Rewriting

In digital circuits and computing systems, **logic gates** are fundamental components that process and manipulate binary signals. Each logic gate performs a specific Boolean operation, taking inputs and producing an output based on certain logical conditions. In this post, we will explore the most common types of logic gates, their functions, truth tables, and see how to construct complex expressions like **XOR** using basic gates like **AND** and **NOR**.

<!-- more -->

## Overview of Logic Gates

Let's first dive into the basic logic gates, which form the building blocks of all complex digital circuits.

### 1. **AND Gate**
- **Function**: The output is 1 if and only if all inputs are 1. Otherwise, the output is 0.
- **Symbol**: $A \, \text{AND} \, B$, $A \, \land \, B$  or $A \cdot B$
- **Truth Table**:

| A | B | Output (A AND B) |
|---|---|------------------|
| 0 | 0 |        0         |
| 0 | 1 |        0         |
| 1 | 0 |        0         |
| 1 | 1 |        1         |

### 2. **OR Gate**
- **Function**: The output is 1 if at least one input is 1. If both inputs are 0, the output is 0.
- **Symbol**: $A \, \text{OR} \, B$ , $A \lor B$ or $A + B$
- **Truth Table**:

| A | B | Output (A OR B) |
|---|---|-----------------|
| 0 | 0 |        0        |
| 0 | 1 |        1        |
| 1 | 0 |        1        |
| 1 | 1 |        1        |

### 3. **NOT Gate**
- **Function**: The output is the inverse of the input. When the input is 1, the output is 0; and when the input is 0, the output is 1.
- **Symbol**: $\neg A$ or $A'$
- **Truth Table**:

| A | Output (NOT A) |
|---|----------------|
| 0 |       1        |
| 1 |       0        |

### 4. **XOR Gate**
- **Function**: The output is 1 if the inputs are different (one is 1, the other is 0). If the inputs are the same, the output is 0.
- **Symbol**: $A \oplus B$
- **Truth Table**:

| A | B | Output (A XOR B) |
|---|---|------------------|
| 0 | 0 |        0         |
| 0 | 1 |        1         |
| 1 | 0 |        1         |
| 1 | 1 |        0         |

### 5. **XNOR Gate**
- **Function**: The output is 1 if the inputs are the same. If the inputs are different, the output is 0. This is the inverse of the XOR gate.
- **Symbol**: $A \odot B$
- **Truth Table**:

| A | B | Output (A XNOR B) |
|---|---|-------------------|
| 0 | 0 |         1         |
| 0 | 1 |         0         |
| 1 | 0 |         0         |
| 1 | 1 |         1         |

### 6. **NAND Gate**
- **Function**: The NAND gate is the inverse of the AND gate. It outputs 0 only if all inputs are 1; otherwise, it outputs 1.
- **Symbol**: $A \, \text{NAND} \, B$
- **Truth Table**:

| A | B | Output (A NAND B) |
|---|---|-------------------|
| 0 | 0 |         1         |
| 0 | 1 |         1         |
| 1 | 0 |         1         |
| 1 | 1 |         0         |

### 7. **NOR Gate**
- **Function**: The NOR gate is the inverse of the OR gate. It outputs 1 only if both inputs are 0; otherwise, it outputs 0.
- **Symbol**: $A \, \text{NOR} \, B$
- **Truth Table**:

| A | B | Output (A NOR B) |
|---|---|------------------|
| 0 | 0 |        1         |
| 0 | 1 |        0         |
| 1 | 0 |        0         |
| 1 | 1 |        0         |

## Rewriting XOR Using AND and NOR Gates

Now that we understand the basic logic gates, let’s explore how to express the XOR operation using only **AND** and **NOR** gates.

### XOR Definition

We know that the XOR operation can be defined as follows: The output is 1 when the inputs are different (one is 1, the other is 0), and the output is 0 when the inputs are the same.

- **Logic expression**:
  $$
  x \, \text{XOR} \, y = (x \, \text{AND} \, \neg y) \, \text{OR} \, (\neg x \, \text{AND} \, y)
  $$

### Rewriting XOR with AND and NOR Gates

We can rewrite the XOR expression using **AND** and **NOR** gates:
$$
x \, \text{XOR} \, y = (x \, \text{AND} \, y) \, \text{NOR} \, (x \, \text{NOR} \, y)
$$

#### Verification: Comparing the Truth Tables

To verify that this expression is correct, let’s build the truth table for both the original XOR expression and the rewritten version using AND and NOR gates:

| x | y | x XOR y | x AND y | x NOR y | (x AND y) NOR (x NOR y) |
|---|---|---------|---------|---------|-------------------------|
| 0 | 0 |    0    |    0    |    1    |            0            |
| 0 | 1 |    1    |    0    |    0    |            1            |
| 1 | 0 |    1    |    0    |    0    |            1            |
| 1 | 1 |    0    |    1    |    0    |            0            |

We can see that the two expressions produce the same outputs for all input combinations, confirming that:
$$
(x \, \text{AND} \, y) \, \text{NOR} \, (x \, \text{NOR} \, y) = x \, \text{XOR} \, y
$$

## Conclusion

In this blog, we have reviewed the most common types of logic gates and demonstrated how the XOR operation can be rewritten using AND and NOR gates. Understanding how to manipulate these logic gates is crucial for learning digital circuits, and the ability to express complex functions using basic gates is a key skill for designing efficient systems.
