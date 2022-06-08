-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists gems;

CREATE table gems (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    nickname VARCHAR NOT NULL,
    species VARCHAR NOT NULL,
    weapon VARCHAR NOT NULL,
    components VARCHAR NOT NULL
);

INSERT INTO gems (name, nickname, weapon, components) VALUES
('Steven', 'Schtu-ball', 'Part Human, Part Gem', 'Shield', 'Not a fusion'),

('Connie', 'Miss Knight', 'Human', 'Sword', 'Not a fusion'),

('Stevonnie', 'Dondai', 'Part Human, Part Gem', 'Shield & Sword', 'Steven, Connie'),

('Garnet', 'The boss', 'Gem', 'Gauntlets', 'Ruby, Sapphire'),

('Amethyst', 'Ams', 'Gem', 'Whip', 'Not a fusion'),

('Pearl', 'P', 'Gem', 'Spear, Swords', 'Not a fusion'),

('Peridot', 'P-dot', 'Gem', 'Limb-enhancers', 'Not a fusion'),

('Lapis Lazuli', 'Lapis', 'Gem', 'Hydrokinesis', 'Not a fusion');