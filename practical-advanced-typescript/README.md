### Notes from EggHead Practical Advanced TS (https://egghead.io/courses/practical-advanced-typescript)

# Separate numbers using \_ (underscore)

Example: 1000000 -> 1_000_000

# Use ! to initialize a property inside a class

Example: const name!: string;

# The type 'never' ensures that the property will never be at the type X

Example: const x: never = ""x';

# An interface is an specific contract, so we can't have an interface with two interface, but we can have type with two types or with a type and interface. Types cannot be merged, but interfaces with the same name will be merged

Example: type Pet = IPet & IFeline & Animal

- Interfaces could be overrided
- Types can be a combination from types and interfaces
- Interfaces and Types can refer to types
- All suports merging
- Interface could extend Interfaces and Types
- Interfaces and classes must have a shape locked on

# Be careful with the 'any' type, preffer to use 'unknown

Example: const x: unknown 'Property';

The 'unknown' type prevent that occurs runtime errors that may broke the application, so you have to ensure the type.
