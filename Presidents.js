const presidents = {
    "george washington": {
        "name": "George Washington",
        "presidentNumber": 1,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
        "vicePresident": "John Adams",
        "inOffice": "April 30, 1789 - March 4, 1797",
        "born": "Febuary 11, 1731",
        "birthLocation": "Popes Creek, Virginia, U.S.",
        "died": "December 14, 1799",
        "restingPlace": "Mount Vernon, Virginia, U.S.",
        "politicalParty": "Independent"
    },
    "john adams": {
        "name": "John Adams",
        "presidentNumber": 2,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg",
        "vicePresident": "Thomas Jefferson",
        "inOffice": "March 4, 1794 - March 4, 1801",
        "born": "October 30, 1735",
        "birthLocation": "Braintree, Massachusetts Bay, British America (now Quincey)",
        "died": "July 4, 1826",
        "restingPlace": "United First Parish Church",
        "politicalParty": "Federalist" 
    },
    "thomas jefferson": {
        "name": "Thomas Jefferson",
        "presidentNumber": 3,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
        "vicePresident": ["Aaron Burr", "George Clinton"],
        "inOffice": "March 4, 1801 - March 4, 1809",
        "born": "April 13, 1743",
        "birthLocation": "Shadwell, Virgina, British America",
        "died": "July 4, 1826",
        "restingPlace": "Monticello, Virgina, U.S.",
        "politicalParty": "Democratic-Republican" 
    },
    "james madison": {
        "name": "James Madison",
        "presidentNumber": 4,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/2/20/James_Madison%28cropped%29%28c%29.jpg",
        "vicePresident": ["George Clinton", "Elbridge Gerry"],
        "inOffice": "March 4, 1809 - March 4, 1817",
        "born": "March 16, 1751",
        "birthLocation": "Port Conway, Virginia, British America",
        "died": "June 28, 1836",
        "restingPlace": "Monpelier, Virgina, U.S.",
        "politicalParty": "Democratic-Republican" 
    },
    "james monroe": {
        "name": "James Monroe",
        "presidentNumber": 5,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/d/d4/James_Monroe_White_House_portrait_1819.jpg",
        "vicePresident": "Daniel D. Tompkins",
        "inOffice": "March 4, 1817 - March 4, 1825",
        "born": "April 28, 1758",
        "birthLocation": "Monroe Hall, Virginia, British America",
        "died": "July 4, 1831",
        "restingPlace": "New York City, U.S.",
        "politicalParty": "Democratic-Republican" 
    },
    "john quincey adams": {
        "name": "John Quincey Adams",
        "presidentNumber": 6,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/f/f0/John_Q._Adams.jpg",
        "vicePresident": "John C. Calhoun",
        "inOffice": "March 4, 1825 - March 4, 1829",
        "born": "July 11, 1767",
        "birthLocation": "Braintree, Massachusetts Bay, British America (now Quincey)",
        "died": "Feburary 23, 1848",
        "restingPlace": "United First Parish Church",
        "politicalParty": "Democratic-Republican" 
    },
    "andrew jackson": {
        "name": "Andrew Jackson",
        "presidentNumber": 7,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/4/43/Andrew_jackson_head.jpg",
        "vicePresident": ["John C. Calhoun","None", "Martin Van Buren"],
        "inOffice": "March 4, 1829 - March 4, 1837",
        "born": "March 15, 1767",
        "birthLocation": "Waxhaw Settlement between North Carolina and South Carolina, British America",
        "died": "June 8, 1845",
        "restingPlace": "The Hermitage",
        "politicalParty": "Democratic" 
    },
    "martin van buren": {
        "name": "Martin Van Buren",
        "presidentNumber": 8,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Martin_Van_Buren_by_Mathew_Brady_c1855-58.jpg",
        "vicePresident": "Richard Mentor Johnson",
        "inOffice": "March 4, 1837 - March 4, 1841",
        "born": "December 5, 1782",
        "birthLocation": "Kinderhook, New York, U.S.",
        "died": "July 24, 1862",
        "restingPlace": "Kinderhook Reformed Church Cemetery",
        "politicalParty": "Democratic" 
    },
    "william henry harrison": {
        "name": "William Henry Harrison",
        "presidentNumber": 9,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/3/34/William_Henry_Harrison_by_James_Reid_Lambdin%2C_1835_crop.jpg",
        "vicePresident": "John Tyler",
        "inOffice": "March 4, 1841 - April 4, 1841",
        "born": "Febuary 9, 1773",
        "birthLocation": "Charles City County, Virginia, British America",
        "died": "April 4, 1841",
        "restingPlace": "Harrison Tomb State Memorial",
        "politicalParty": "Whig" 
    },
    "john tyler": {
        "name": "John Tyler",
        "presidentNumber": 10,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/a/ab/John_Tyler_%28cropped_3x4%29.png",
        "vicePresident": "None",
        "inOffice": "April 4, 1841 - March 4, 1845",
        "born": "March 29, 1790",
        "birthLocation": "Greenway Plantation, Charels City County, Virginia, U.S.",
        "died": "January 18, 1862",
        "restingPlace": "Ballard House, Richmond, Virginia",
        "politicalParty": "Whig" 
    },
    "james k polk": {
        "name": "James K. Polk",
        "presidentNumber": 11,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/8/87/Polk_crop.jpg",
        "vicePresident": "George M. Dallas",
        "inOffice": "March 4, 1845 - March 4, 1849",
        "born": "November 2, 1795",
        "birthLocation": "Pineville, North Carolina, U.S.",
        "died": "June 15, 1849",
        "restingPlace": "Tennessee State Capitol",
        "politicalParty": "Democratic" 
    },
    "zachary taylor": {
        "name": "Zachary Taylor",
        "presidentNumber": 12,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/5/51/Zachary_Taylor_restored_and_cropped.jpg",
        "vicePresident": "Millard Fillmore",
        "inOffice": "March 4, 1849 - July 9, 1850",
        "born": "November 24, 1784",
        "birthLocation": "Barboursville, Virginia, U.S.",
        "died": "July 9, 1850",
        "restingPlace": "Zachary Taylor National Cemetary",
        "politicalParty": "Whig" 
    },
    "millard filmore": {
        "name": "Millard Fillmore",
        "presidentNumber": 13,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/7/73/Fillmore.jpg",
        "vicePresident": "Franklin Pierce",
        "inOffice": "July 9, 1850 - March 4, 1853",
        "born": "January 7, 1800",
        "birthLocation": "Moravia, New York, U.S.",
        "died": "March 8, 1874",
        "restingPlace": "Forest Lawn Cemetery Buffalo, New York, U.S.",
        "politicalParty": "Whig" 
    },
    "franklin pierce": {
        "name": "Franklin Pierce",
        "presidentNumber": 14,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/4/46/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg",
        "vicePresident": ["William R. King", "None"],
        "inOffice": "March 4, 1853 - March 4, 1857",
        "born": "November 23, 1804",
        "birthLocation": "Hillsborough, New Hampshire, U.S.",
        "died": "October 8, 1869",
        "restingPlace": "Old North Cemetery Concord, New Hampshire, U.S.",
        "politicalParty": "Democratic" 
    },
    "james buchanan": {
        "name": "James Buchanan",
        "presidentNumber": 15,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/f/fd/James_Buchanan.jpg",
        "vicePresident": "John C. Breckinridge",
        "inOffice": "March 4, 1857 - March 4, 1861",
        "born": "April 23, 1791",
        "birthLocation": "Cove Gap, Pennsylvania, U.S.",
        "died": "June 1, 1868",
        "restingPlace": "Woodward Hill Cemetery",
        "politicalParty": "Democratic" 
    },
    "abraham lincoln": {
        "name": "Abraham Lincoln",
        "presidentNumber": 16,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg",
        "vicePresident": ["Hannibal Hamlin", "Andrew Johnson"],
        "inOffice": "March 4, 1861 - April 15, 1865",
        "born": "February 12, 1809",
        "birthLocation": "Hodgenville, Kentucky, U.S.",
        "died": "April 15, 1865",
        "restingPlace": "Lincoln Tomb",
        "politicalParty": "Republican" 
    },
    "andrew johnson": {
        "name": "Andrew Johnson",
        "presidentNumber": 17,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg",
        "vicePresident": "None",
        "inOffice": "April 15, 1865 - March 4, 1869",
        "born": "December 29, 1808",
        "birthLocation": "Raleigh, North Carolina, U.S.",
        "died": "July 31, 1875",
        "restingPlace": "Andrew Johnson National Cemetery",
        "politicalParty": "National Union" 
    },
    "ulysses s grant": {
        "name": "Ulyssess S. Grant",
        "presidentNumber": 18,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Ulysses_S._Grant_1870-1880.jpg",
        "vicePresident": ["Schuyler Colfax", "Henry Wilson", "None"],
        "inOffice": "March 4, 1869 - March 4, 1877",
        "born": "April 27, 1822",
        "birthLocation": "Point Pleasant, Ohio, U.S.",
        "died": "July 23, 1885",
        "restingPlace": "Grant's Tomb, New York City",
        "politicalParty": "Republican" 
    },
    "rutherford b hayes": {
        "name": "Rutherford B. Hayes",
        "presidentNumber": 19,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg",
        "vicePresident": "William A. Wheeler",
        "inOffice": "March 4, 1877 - March 4, 1881",
        "born": "October 4, 1822",
        "birthLocation": "Delaware, Ohio, U.S.",
        "died": "January 17, 1893",
        "restingPlace": "Spiegel Grove State Park",
        "politicalParty": "Republican" 
    },
    "james a garfield": {
        "name": "James A. Garfield",
        "presidentNumber": 20,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg",
        "vicePresident": "Chester A. Arthur",
        "inOffice": "March 4, 1881 - September 19, 1881",
        "born": "November 19, 1831",
        "birthLocation": "Moreland Hills, Ohio, U.S.",
        "died": "September 19, 1881",
        "restingPlace": "James A. Garfield Memorial",
        "politicalParty": "Republican" 
    },
    "chester a arthur": {
        "name": "Chester A. Arthur",
        "presidentNumber": 21,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/7/79/Chester_Alan_Arthur.jpg",
        "vicePresident": "None",
        "inOffice": "September 19, 1881 - March 4, 1885",
        "born": "October 5, 1829",
        "birthLocation": "Fairfield, Vermont, U.S.",
        "died": "November 18, 1886",
        "restingPlace": "Albany York, U.S.",
        "politicalParty": "Republican" 
    },
    "grover cleveland": {
        "name": "Grover Cleveland",
        "presidentNumber": [22, 24],
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grover_Cleveland_-_NARA_-_518139.jpg",
        "vicePresident": ["Thomas A. Hendricks", "None", "Adlai Stevenson"],
        "inOffice": ["March 4, 1885 - March 4, 1889", "March 4, 1893 - March 4, 1897"],
        "born": "March 18, 1837",
        "birthLocation": "Caldwell, New Jersey, U.S.",
        "died": "June 24, 1908",
        "restingPlace": "Princeton Cemetery, Princeton, New Jersey, U.S.",
        "politicalParty": "Democratic" 
    },
    "benjamin harrison": {
        "name": "Benjamin Harrison",
        "presidentNumber": 23,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg",
        "vicePresident": "Levi P. Morton",
        "inOffice": "March 4, 1889 - March 4, 1893",
        "born": "August 20, 1833",
        "birthLocation": "North Bend, Ohio, U.S.",
        "died": "March 13, 1901",
        "restingPlace": "Crown Hill Cemetery",
        "politicalParty": "Republican" 
    },
    "william mckinley": {
        "name": "William McKinley",
        "presidentNumber": 25,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/3/30/McKinley_%28cropped%29.jpg",
        "vicePresident": ["Garret Hobart", "None", "Theodore Roosevelt"],
        "inOffice": "March 4, 1897 - September 14, 1901",
        "born": "January 29, 1843",
        "birthLocation": "Niles, Ohio, U.S.",
        "died": "September 14, 1901",
        "restingPlace": "McKinley National Memorial, Canton, Ohio, U.S.",
        "politicalParty": "Republican" 
    },
    "theodore roosevelt": {
        "name": "Theodore Roosevelt",
        "presidentNumber": 26,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/6/64/President_Roosevelt_-_Pach_Bros_%28cropped%29.jpg",
        "vicePresident": ["None", "Charles W. Fairbanks"],
        "inOffice": "September 14, 1901 - March 4, 1909",
        "born": "October 27, 1858",
        "birthLocation": "New York City, U.S.",
        "died": "January 6, 1919",
        "restingPlace": "Youngs Memorial Cemetery, Oyster Bay, New York",
        "politicalParty": "Republican" 
    },
    "william howard taft": {
        "name": "William Howard Taft",
        "presidentNumber": 27,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/3/39/William_Howard_Taft%2C_head-and-shoulders_portrait%2C_facing_front.jpg",
        "vicePresident": ["James S. Sherman", "None"],
        "inOffice": "March 4, 1909 - March 4, 1913",
        "born": "September 15, 1857",
        "birthLocation": "Cincinnati, Ohio, U.S.",
        "died": "March 8, 1930",
        "restingPlace": "Arlington National Cemetery",
        "politicalParty": "Republican" 
    },
    "woodrow wilson": {
        "name": "Woodrow Wilson",
        "presidentNumber": 28,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919_%28cropped%29.jpg",
        "vicePresident": "Thomas R. Marshall",
        "inOffice": "March 4, 1913 - March 4, 1921",
        "born": "December 28, 1856",
        "birthLocation": "Staunton, Virginia, U.S.",
        "died": "February 3, 1924",
        "restingPlace": "Washington National Cathedral",
        "politicalParty": "Democratic" 
    },
    "warren g harding": {
        "name": "Warren G. Harding",
        "presidentNumber": 29,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg",
        "vicePresident": "Calvin Coolidge",
        "inOffice": "March 4, 1921 - August 2, 1923",
        "born": "November 2, 1865",
        "birthLocation": "Blooming Grove, Ohio, U.S.",
        "died": "August 2, 1923",
        "restingPlace": "Harding Tomb",
        "politicalParty": "Republican" 
    },
    "calvin coolidge": {
        "name": "Calvin Coolidge",
        "presidentNumber": 30,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg",
        "vicePresident": ["None", "Charles G. Dawes"],
        "inOffice": "March 4, 1921 - August 2, 1923",
        "born": "July 4, 1872",
        "birthLocation": "Plymouth Notch, Vermont, U.S.",
        "died": "January 5, 1933",
        "restingPlace": "Plymouth Notch Cemetery",
        "politicalParty": "Republican" 
    },
    "herbert hoover": {
        "name": "Herbert Hoover",
        "presidentNumber": 31,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/5/57/President_Hoover_portrait.jpg",
        "vicePresident": "Charles Curtis",
        "inOffice": "March 4, 1929 - March 4, 1933",
        "born": "August 10, 1874",
        "birthLocation": "West Branch, Iowa, U.S.",
        "died": "October 20, 1964",
        "restingPlace": "Herbert Hoover Presidential Library and Museum",
        "politicalParty": "Republican" 
    },
    "franklin d roosevelt": {
        "name": "Franklin D. Roosevelt",
        "presidentNumber": 32,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg",
        "vicePresident": ["John Nance Garner", "Henry A. Wallace", "Harry S. Truman"],
        "inOffice": "March 4, 1933 - April 12, 1945",
        "born": "January 30, 1882",
        "birthLocation": "Hyde Park, New York, U.S.",
        "died": "April 12, 1945",
        "restingPlace": "Springwood Estate",
        "politicalParty": "Democratic" 
    },
    "harry s truman": {
        "name": "Harry S. Truman",
        "presidentNumber": 33,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg",
        "vicePresident": ["None", "Alben W. Barkley"],
        "inOffice": "April 12, 1945 - January 20, 1953",
        "born": "May 8, 1884",
        "birthLocation": "Lamar, Missouri, U.S.",
        "died": "December 26, 1972",
        "restingPlace": "Harry S. Truman Presidential Library and Museum, Independence, Missouri, U.S.",
        "politicalParty": "Democratic" 
    },
    "dwight d eisenhower": {
        "name": "Dwight D. Eisenhower",
        "presidentNumber": 34,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg",
        "vicePresident": "Richard Nixon",
        "inOffice": "January 20, 1953 - January 20, 1961",
        "born": "October 14, 1890",
        "birthLocation": "Denison, Texas, U.S.",
        "died": "March 28, 1969",
        "restingPlace": "Dwight D. Eisenhower Presidential Library, Museum and Boyhood Home",
        "politicalParty": "Republican" 
    },
    "john f kennedy": {
        "name": "John F. Kennedy",
        "presidentNumber": 35,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg",
        "vicePresident": "Lyndon B. Johnson",
        "inOffice": "January 20, 1961 - November 22, 1963",
        "born": "May 29, 1917",
        "birthLocation": "Brookline, Massachusetts, U.S.",
        "died": "November 22, 1963",
        "restingPlace": "Arlington National Cemetery",
        "politicalParty": "Democratic" 
    },
    "lyndon b johnson": {
        "name": "Lyndon B. Johnson",
        "presidentNumber": 36,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/c/c3/37_Lyndon_Johnson_3x4.jpg",
        "vicePresident": "Lyndon B. Johnson",
        "inOffice": "November 22, 1963 - January 20, 1969",
        "born": "August 27, 1908",
        "birthLocation": "Stonewall, Texas, U.S.",
        "died": "January 22, 1973",
        "restingPlace": "Johnson Family Cemetery, Stonewall, Texas, U.S.",
        "politicalParty": "Democratic" 
    },
    "richard nixon": {
        "name": "Richard Nixon",
        "presidentNumber": 37,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg",
        "vicePresident": ["Spiro Agnew", "None", "Gerald Ford"],
        "inOffice": "January 20, 1969 - August 9, 1974",
        "born": "January 9, 1913",
        "birthLocation": "Yorba Linda, California, U.S.",
        "died": "April 22, 1994",
        "restingPlace": "Richard Nixon Presidential Library and Museum",
        "politicalParty": "Republican" 
    },
    "gerald ford": {
        "name": "Gerald Ford",
        "presidentNumber": 38,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/3/36/Gerald_Ford_presidential_portrait_%28cropped%29.jpg",
        "vicePresident": ["None", "Nelson Rockefeller"],
        "inOffice": "August 9, 1974 - January 20, 1977",
        "born": "July 14, 1913",
        "birthLocation": "Omaha, Nebraska, U.S.",
        "died": "December 26, 2006",
        "restingPlace": "Gerald R. Ford Presidential Museum",
        "politicalParty": "Republican" 
    },
    "jimmy carter": {
        "name": "Jimmy Carter",
        "presidentNumber": 39,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/e/ea/JimmyCarterPortrait_%28cropped%29.jpg",
        "vicePresident": "Walter Mondale",
        "inOffice": "January 20, 1977 - January 20, 1981",
        "born": "October 1, 1924",
        "birthLocation": "Plains, Georgia, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Democratic" 
    },
    "ronald reagan": {
        "name": "Ronald Reagan",
        "presidentNumber": 40,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg",
        "vicePresident": "George H. W. Bush",
        "inOffice": "January 20, 1981 - January 20, 1989",
        "born": "February 6, 1911",
        "birthLocation": "Tampico, Illinois, U.S.",
        "died": "June 5, 2004",
        "restingPlace": "Ronald Reagan Presidential Library and Museum",
        "politicalParty": "Republican" 
    },
    "george h w bush": {
        "name": "George H. W. Bush",
        "presidentNumber": 41,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/e/ee/George_H._W._Bush_presidential_portrait_%28cropped%29.jpg",
        "vicePresident": "Dan Quayle",
        "inOffice": "January 20, 1989 - January 20, 1993",
        "born": "June 12, 1924",
        "birthLocation": "Milton, Massachusetts, U.S.",
        "died": "November 30, 2018",
        "restingPlace": "George H.W. Bush Presidential Library and Museum",
        "politicalParty": "Republican" 
    },
    "bill clinton": {
        "name": "Bill Clinton",
        "presidentNumber": 42,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg",
        "vicePresident": "Al Gore",
        "inOffice": "January 20, 1993 - January 20, 2001",
        "born": "August 19, 1946",
        "birthLocation": "Hope, Arkansas, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Democratic" 
    },
    "george w bush": {
        "name": "George W. Bush",
        "presidentNumber": 43,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg",
        "vicePresident": "Dick Cheney",
        "inOffice": "January 20, 2001 - January 20, 2009",
        "born": "July 6, 1946",
        "birthLocation": "New Haven, Connecticut, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Republican" 
    },
    "barack obama": {
        "name": "Barack Obama",
        "presidentNumber": 44,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg",
        "vicePresident": "Joe Biden",
        "inOffice": "January 20, 2009 - January 20, 2017",
        "born": "August 4, 1961",
        "birthLocation": "Honolulu, Hawaii, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Democratic" 
    },
    "donald trump": {
        "name": "Donald Trump",
        "presidentNumber": 45,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg",
        "vicePresident": "Mike Pence",
        "inOffice": "January 20, 2017 - January 20, 2021",
        "born": "June 14, 1946",
        "birthLocation": "Queens, New York City, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Republican" 
    },
    "joe biden": {
        "name": "Joe Biden",
        "presidentNumber": 46,
        "portrait": "https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg",
        "vicePresident": "Kamala Harris",
        "inOffice": "January 20, 2021 - Present",
        "born": "November 20, 1942",
        "birthLocation": "Scranton, Pennsylvania, U.S.",
        "died": "N/A",
        "restingPlace": "N/A",
        "politicalParty": "Democratic" 
    },
    "unknown": {
        "name": "unknown",
        "presidentNumber": "unknown",
        "portrait": "unknown",
        "vicePresident": "unknown",
        "inOffice": "unknown",
        "born": "unknown",
        "birthLocation": "unknown",
        "died": "unknown",
        "restingPlace": "unknown",
        "politicalParty": "unknown" 
    }
}

module.exports = {presidents}