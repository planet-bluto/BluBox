var beepbox;
! function(t) {
    class e {}

    function i(t) {
        let e = 0;
        for (let i = 0; i < t.length; i++) e += t[i];
        const i = e / t.length;
        let s = 0,
            n = 0;
        for (let e = 0; e < t.length; e++) s += n, n = t[e] - i, t[e] = s;
        return t.push(0), new Float64Array(t)
    }

    function s(t) {
        let e = 0,
            i = 0;
        for (let s = 0; s < t.length; s++) e += t[s], i += Math.abs(t[s]);
        const s = e / t.length,
            n = i / t.length;
        let o = 0,
            r = 0;
        for (let e = 0; e < t.length; e++) o += r, r = (t[e] - s) / n, t[e] = o;
        return t.push(0), new Float64Array(t)
    }

    function n(i) {
        let s = e.chipNoises[i].samples;
        if (null == s) {
            if (s = new Float32Array(e.chipNoiseLength + 1), e.chipNoises[i].samples = s, 0 == i) {
                let t = 1;
                for (let i = 0; i < e.chipNoiseLength; i++) {
                    s[i] = 2 * (1 & t) - 1;
                    let e = t >> 1;
                    1 == (t + e & 1) && (e += 16384), t = e
                }
            } else if (1 == i)
                for (let t = 0; t < e.chipNoiseLength; t++) s[t] = 2 * Math.random() - 1;
            else if (2 == i) {
                let t = 1;
                for (let i = 0; i < e.chipNoiseLength; i++) {
                    s[i] = 2 * (1 & t) - 1;
                    let e = t >> 1;
                    1 == (t + e & 1) && (e += 32768), t = e
                }
            } else if (3 == i) {
                let t = 1;
                for (let i = 0; i < e.chipNoiseLength; i++) {
                    s[i] = 2 * (1 & t) - 1;
                    let e = t >> 1;
                    1 == (t + e & 1) && (e += 40), t = e
                }
            } else if (4 == i) o(s, 10, 11, 1, 1, 0), o(s, 11, 14, .6578, .6578, 0), t.inverseRealFourierTransform(s, e.chipNoiseLength), t.scaleElementsByFactor(s, 1 / Math.sqrt(e.chipNoiseLength));
            else if (5 == i)
                for (var n = 1, r = 0; r < e.chipNoiseLength; r++) {
                    s[r] = 2 * (1 & n) - 1, 1 == (n + (h = n >> 1) & 1) && (h += 40), n = h
                } else if (6 == i) o(s, 1, 10, 1, 1, 0), o(s, 20, 14, -2, -2, 0), t.inverseRealFourierTransform(s, e.chipNoiseLength), t.scaleElementsByFactor(s, 1 / Math.sqrt(e.chipNoiseLength));
                else if (7 == i)
                for (n = 1, r = 0; r < e.chipNoiseLength; r++) {
                    s[r] = 4 * (1 & n) * (14 * Math.random() + 1), 1 == (n + (h = n >> 1) & 1) && (h += 60), n = h
                } else {
                    if (8 != i) throw new Error("Unrecognized drum index: " + i);
                    for (n = 1, r = 0; r < 32768; r++) {
                        var h;
                        s[r] = (1 & n) / 2 + .5, 1 == (n + (h = n >> 1) & 1) && (h -= 40), n = h
                    }
                }
            s[e.chipNoiseLength] = s[0]
        }
        return s
    }

    function o(t, i, s, o, r, h) {
        const a = 0 | Math.pow(2, i),
            l = Math.min(e.chipNoiseLength >> 1, 0 | Math.pow(2, s)),
            c = n(0);
        let d = 0;
        for (let n = a; n < l; n++) {
            let a = o + (r - o) * (Math.log(n) / Math.LN2 - i) / (s - i),
                l = Math.pow(2, (a - 1) * e.spectrumMax + 1) * a;
            d += l *= Math.pow(n / 2048, h), l *= c[n];
            const m = .61803398875 * n * n * Math.PI * 2;
            t[n] = Math.cos(m) * l, t[e.chipNoiseLength - n] = Math.sin(m) * l
        }
        return d
    }

    function r(t) {
        const e = {};
        for (let i = 0; i < t.length; i++) {
            const s = t[i];
            s.index = i, e[s.name] = s
        }
        const i = t;
        return i.dictionary = e, i
    }
    e.thresholdVal = -10, e.kneeVal = 40, e.ratioVal = 12, e.attackVal = 0, e.releaseVal = .25, e.versionDisplayName = "BluBox BETA", e.scales = r([{
        name: "Free",
        realName: "chromatic",
        flags: [!0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0, !0]
    }, {
        name: "Major",
        realName: "ionian",
        flags: [!0, !1, !0, !1, !0, !0, !1, !0, !1, !0, !1, !0]
    }, {
        name: "Minor",
        realName: "aeolian",
        flags: [!0, !1, !0, !0, !1, !0, !1, !0, !0, !1, !0, !1]
    }, {
        name: "Mixolydian",
        realName: "mixolydian",
        flags: [!0, !1, !0, !1, !0, !0, !1, !0, !1, !0, !0, !1]
    }, {
        name: "Lydian",
        realName: "lydian",
        flags: [!0, !1, !0, !1, !0, !1, !0, !0, !1, !0, !1, !0]
    }, {
        name: "Dorian",
        realName: "dorian",
        flags: [!0, !1, !0, !0, !1, !0, !1, !0, !1, !0, !0, !1]
    }, {
        name: "Phrygian",
        realName: "phrygian",
        flags: [!0, !0, !1, !0, !1, !0, !1, !0, !0, !1, !0, !1]
    }, {
        name: "Locrian",
        realName: "locrian",
        flags: [!0, !0, !1, !0, !1, !0, !0, !1, !0, !1, !0, !1]
    }, {
        name: "Lydian Dominant",
        realName: "lydian dominant",
        flags: [!0, !1, !0, !1, !0, !1, !0, !0, !1, !0, !0, !1]
    }, {
        name: "Phrygian Dominant",
        realName: "phrygian dominant",
        flags: [!0, !0, !1, !1, !0, !0, !1, !0, !0, !1, !0, !1]
    }, {
        name: "Harmonic Major",
        realName: "harmonic major",
        flags: [!0, !1, !0, !1, !0, !0, !1, !0, !0, !1, !1, !0]
    }, {
        name: "Harmonic Minor",
        realName: "harmonic minor",
        flags: [!0, !1, !0, !0, !1, !0, !1, !0, !0, !1, !1, !0]
    }, {
        name: "Melodic Minor",
        realName: "melodic minor",
        flags: [!0, !1, !0, !0, !1, !0, !1, !0, !1, !0, !1, !0]
    }, {
        name: "Blu's",
        realName: "blues",
        flags: [!0, !1, !1, !0, !1, !0, !0, !0, !1, !1, !0, !1]
    }, {
        name: "Altered",
        realName: "altered",
        flags: [!0, !0, !1, !0, !0, !1, !0, !1, !0, !1, !0, !1]
    }, {
        name: "Major Pentatonic",
        realName: "major pentatonic",
        flags: [!0, !1, !0, !1, !0, !1, !1, !0, !1, !0, !1, !1]
    }, {
        name: "Minor Pentatonic",
        realName: "minor pentatonic",
        flags: [!0, !1, !1, !0, !1, !0, !1, !0, !1, !1, !0, !1]
    },{
        name: "Dab",
        realName: "dab",
        flags: [!0, !0, !1, !0, !0, !0, !0, !0, !0, !1, !0, !1]
    }, {
        name: "Whole Tone",
        realName: "whole tone",
        flags: [!0, !1, !0, !1, !0, !1, !0, !1, !0, !1, !0, !1]
    }, {
        name: "Octatonic",
        realName: "octatonic",
        flags: [!0, !1, !0, !0, !1, !0, !0, !1, !0, !0, !1, !0]
    }, {
        name: "Hexatonic",
        realName: "hexatonic",
        flags: [!0, !1, !1, !0, !0, !1, !1, !0, !0, !1, !1, !0]
    }]), e.keys = r([{
        name: "C",
        isWhiteKey: !0,
        basePitch: 12
    }, {
        name: "C♯",
        isWhiteKey: !1,
        basePitch: 13
    }, {
        name: "D",
        isWhiteKey: !0,
        basePitch: 14
    }, {
        name: "D♯",
        isWhiteKey: !1,
        basePitch: 15
    }, {
        name: "E",
        isWhiteKey: !0,
        basePitch: 16
    }, {
        name: "F",
        isWhiteKey: !0,
        basePitch: 17
    }, {
        name: "F♯",
        isWhiteKey: !1,
        basePitch: 18
    }, {
        name: "G",
        isWhiteKey: !0,
        basePitch: 19
    }, {
        name: "G♯",
        isWhiteKey: !1,
        basePitch: 20
    }, {
        name: "A",
        isWhiteKey: !0,
        basePitch: 21
    }, {
        name: "A♯",
        isWhiteKey: !1,
        basePitch: 22
    }, {
        name: "B",
        isWhiteKey: !0,
        basePitch: 23
    }]), e.blackKeyNameParents = [-1, 1, -1, 1, -1, 1, -1, -1, 1, -1, 1, -1], e.tempoMin = 30, e.tempoMax = 320, e.reverbRange = 32, e.beatsPerBarMin = 3, e.beatsPerBarMax = 16, e.barCountMin = 1, e.barCountMax = 256, e.instrumentsPerChannelMin = 1, e.instrumentsPerChannelMax = 10, e.partsPerBeat = 24, e.ticksPerPart = 2, e.rhythms = r([{
        name: "÷3 (triplets)",
        stepsPerBeat: 3,
        ticksPerArpeggio: 4,
        arpeggioPatterns: [
            [0],
            [0, 0, 1, 1],
            [0, 1, 2, 1],
            [0, 1, 2, 3]
        ],
        roundUpThresholds: [5, 12, 18]
    }, {
        name: "÷4 (standard)",
        stepsPerBeat: 4,
        ticksPerArpeggio: 3,
        arpeggioPatterns: [
            [0],
            [0, 0, 1, 1],
            [0, 1, 2, 1],
            [0, 1, 2, 3]
        ],
        roundUpThresholds: [3, 9, 17, 21]
    }, {
        name: "÷6",
        stepsPerBeat: 6,
        ticksPerArpeggio: 4,
        arpeggioPatterns: [
            [0],
            [0, 1],
            [0, 1, 2, 1],
            [0, 1, 2, 3]
        ],
        roundUpThresholds: null
    }, {
        name: "÷8",
        stepsPerBeat: 8,
        ticksPerArpeggio: 3,
        arpeggioPatterns: [
            [0],
            [0, 1],
            [0, 1, 2, 1],
            [0, 1, 2, 3]
        ],
        roundUpThresholds: null
    }, {
        name: "freehand",
        stepsPerBeat: 24,
        ticksPerArpeggio: 3,
        arpeggioPatterns: [
            [0],
            [0, 1],
            [0, 1, 2, 1],
            [0, 1, 2, 3]
        ],
        roundUpThresholds: null
    }]), e.instrumentTypeNames = ["chip", "FM", "noise", "spectrum", "drumset", "harmonics", "PWM", "custom chip", "mod"], e.instrumentTypeHasSpecialInterval = [!0, !0, !1, !1, !1, !0, !1, !0], e.chipWaves = r([{
        name: "rounded",
        volume: .94,
        samples: i([0, .2, .4, .5, .6, .7, .8, .85, .9, .95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, .95, .9, .85, .8, .7, .6, .5, .4, .2, 0, -.2, -.4, -.5, -.6, -.7, -.8, -.85, -.9, -.95, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -.95, -.9, -.85, -.8, -.7, -.6, -.5, -.4, -.2])
    }, {
        name: "triangle",
        volume: 1,
        samples: i([1 / 15, .2, 5 / 15, 7 / 15, .6, 11 / 15, 13 / 15, 1, 1, 13 / 15, 11 / 15, .6, 7 / 15, 5 / 15, .2, 1 / 15, -1 / 15, -.2, -5 / 15, -7 / 15, -.6, -11 / 15, -13 / 15, -1, -1, -13 / 15, -11 / 15, -.6, -7 / 15, -5 / 15, -.2, -1 / 15])
    }, {
        name: "square",
        volume: .5,
        samples: i([1, -1])
    }, {
        name: "1/4 pulse",
        volume: .5,
        samples: i([1, -1, -1, -1])
    }, {
        name: "1/8 pulse",
        volume: .5,
        samples: i([1, -1, -1, -1, -1, -1, -1, -1])
    }, {
        name: "sawtooth",
        volume: .65,
        samples: i([1 / 31, 3 / 31, 5 / 31, 7 / 31, 9 / 31, 11 / 31, 13 / 31, 15 / 31, 17 / 31, 19 / 31, 21 / 31, 23 / 31, 25 / 31, 27 / 31, 29 / 31, 1, -1, -29 / 31, -27 / 31, -25 / 31, -23 / 31, -21 / 31, -19 / 31, -17 / 31, -15 / 31, -13 / 31, -11 / 31, -9 / 31, -7 / 31, -5 / 31, -3 / 31, -1 / 31])
    }, {
        name: "double saw",
        volume: .5,
        samples: i([0, -.2, -.4, -.6, -.8, -1, 1, -.8, -.6, -.4, -.2, 1, .8, .6, .4, .2])
    }, {
        name: "double pulse",
        volume: .4,
        samples: i([1, 1, 1, 1, 1, -1, -1, -1, 1, 1, 1, 1, -1, -1, -1, -1])
    }, {
        name: "spiky",
        volume: .4,
        samples: i([1, -1, 1, -1, 1, 0])
    }, {
        name: "sine",
        volume: .88,
        samples: s([8, 9, 11, 12, 13, 14, 15, 15, 15, 15, 14, 14, 13, 11, 10, 9, 7, 6, 4, 3, 2, 1, 0, 0, 0, 0, 1, 1, 2, 4, 5, 6])
    }, {
        name: "flute",
        volume: .8,
        samples: s([3, 4, 6, 8, 10, 11, 13, 14, 15, 15, 14, 13, 11, 8, 5, 3])
    }, {
        name: "harp",
        volume: .8,
        samples: s([0, 3, 3, 3, 4, 5, 5, 6, 7, 8, 9, 11, 11, 13, 13, 15, 15, 14, 12, 11, 10, 9, 8, 7, 7, 5, 4, 3, 2, 1, 0, 0])
    }, {
        name: "sharp clarinet",
        volume: .38,
        samples: s([0, 0, 0, 1, 1, 8, 8, 9, 9, 9, 8, 8, 8, 8, 8, 9, 9, 7, 9, 9, 10, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    }, {
        name: "soft clarinet",
        volume: .45,
        samples: s([0, 1, 5, 8, 9, 9, 9, 9, 9, 9, 9, 11, 11, 12, 13, 12, 10, 9, 7, 6, 4, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1])
    }, {
        name: "alto sax",
        volume: .3,
        samples: s([5, 5, 6, 4, 3, 6, 8, 7, 2, 1, 5, 6, 5, 4, 5, 7, 9, 11, 13, 14, 14, 14, 14, 13, 10, 8, 7, 7, 4, 3, 4, 2])
    }, {
        name: "bassoon",
        volume: .35,
        samples: s([9, 9, 7, 6, 5, 4, 4, 4, 4, 5, 7, 8, 9, 10, 11, 13, 13, 11, 10, 9, 7, 6, 4, 2, 1, 1, 1, 2, 2, 5, 11, 14])
    }, {
        name: "trumpet",
        volume: .22,
        samples: s([10, 11, 8, 6, 5, 5, 5, 6, 7, 7, 7, 7, 6, 6, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 7, 8, 9, 11, 14])
    }, {
        name: "electric guitar",
        volume: .2,
        samples: s([11, 12, 12, 10, 6, 6, 8, 0, 2, 4, 8, 10, 9, 10, 1, 7, 11, 3, 6, 6, 8, 13, 14, 2, 0, 12, 8, 4, 13, 11, 10, 13])
    }, {
        name: "organ",
        volume: .2,
        samples: s([11, 10, 12, 11, 14, 7, 5, 5, 12, 10, 10, 9, 12, 6, 4, 5, 13, 12, 12, 10, 12, 5, 2, 2, 8, 6, 6, 5, 8, 3, 2, 1])
    }, {
        name: "pan flute",
        volume: .35,
        samples: s([1, 4, 7, 6, 7, 9, 7, 7, 11, 12, 13, 15, 13, 11, 11, 12, 13, 10, 7, 5, 3, 6, 10, 7, 3, 3, 1, 0, 1, 0, 1, 0])
    }]), e.chipNoises = r([{
        name: "retro",
        volume: .25,
        basePitch: 69,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }, {
        name: "white",
        volume: 1,
        basePitch: 69,
        pitchFilterMult: 8,
        isSoft: !0,
        samples: null
    }, {
        name: "clang",
        volume: .4,
        basePitch: 69,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }, {
        name: "buzz",
        volume: .3,
        basePitch: 69,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }, {
        name: "hollow",
        volume: 1.5,
        basePitch: 96,
        pitchFilterMult: 1,
        isSoft: !0,
        samples: null
    }, {
        name: "shine",
        volume: 1,
        basePitch: 69,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }, {
        name: "deep",
        volume: 1.5,
        basePitch: 120,
        pitchFilterMult: 1024,
        isSoft: !0,
        samples: null
    }, {
        name: "cutter",
        volume: .005,
        basePitch: 96,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }, {
        name: "metallic",
        volume: 1,
        basePitch: 96,
        pitchFilterMult: 1024,
        isSoft: !1,
        samples: null
    }]), e.filterCutoffMaxHz = 8e3, e.filterCutoffMinHz = 1, e.filterMax = .95, e.filterMaxResonance = .95, e.filterCutoffRange = 11, e.filterResonanceRange = 8, e.transitions = r([{
        name: "seamless",
        isSeamless: !0,
        attackSeconds: 0,
        releases: !1,
        releaseTicks: 1,
        slides: !1,
        slideTicks: 3
    }, {
        name: "hard",
        isSeamless: !1,
        attackSeconds: 0,
        releases: !1,
        releaseTicks: 3,
        slides: !1,
        slideTicks: 3
    }, {
        name: "soft",
        isSeamless: !1,
        attackSeconds: .025,
        releases: !1,
        releaseTicks: 3,
        slides: !1,
        slideTicks: 3
    }, {
        name: "slide",
        isSeamless: !0,
        attackSeconds: .025,
        releases: !1,
        releaseTicks: 3,
        slides: !0,
        slideTicks: 3
    }, {
        name: "cross fade",
        isSeamless: !1,
        attackSeconds: .04,
        releases: !0,
        releaseTicks: 6,
        slides: !1,
        slideTicks: 3
    }, {
        name: "hard fade",
        isSeamless: !1,
        attackSeconds: 0,
        releases: !0,
        releaseTicks: 48,
        slides: !1,
        slideTicks: 3
    }, {
        name: "medium fade",
        isSeamless: !1,
        attackSeconds: .0125,
        releases: !0,
        releaseTicks: 72,
        slides: !1,
        slideTicks: 3
    }, {
        name: "soft fade",
        isSeamless: !1,
        attackSeconds: .06,
        releases: !0,
        releaseTicks: 96,
        slides: !1,
        slideTicks: 6
    }]), e.vibratos = r([{
        name: "none",
        amplitude: 0,
        periodsSeconds: [.14],
        delayParts: 0
    }, {
        name: "light",
        amplitude: .15,
        periodsSeconds: [.14],
        delayParts: 0
    }, {
        name: "delayed",
        amplitude: .3,
        periodsSeconds: [.14],
        delayParts: 18
    }, {
        name: "heavy",
        amplitude: .45,
        periodsSeconds: [.14],
        delayParts: 0
    }, {
        name: "shaky",
        amplitude: .1,
        periodsSeconds: [.11, .17798, .33],
        delayParts: 0
    }]), e.intervals = r([{
        name: "union",
        spread: 0,
        offset: 0,
        volume: .7,
        sign: 1
    }, {
        name: "shimmer",
        spread: .018,
        offset: 0,
        volume: .8,
        sign: 1
    }, {
        name: "hum",
        spread: .045,
        offset: 0,
        volume: 1,
        sign: 1
    }, {
        name: "honky tonk",
        spread: .09,
        offset: 0,
        volume: 1,
        sign: 1
    }, {
        name: "dissonant",
        spread: .25,
        offset: 0,
        volume: .9,
        sign: 1
    }, {
        name: "fifth",
        spread: 3.5,
        offset: 3.5,
        volume: .9,
        sign: 1
    }, {
        name: "double octave",
        spread: 12,
        offset: 12,
        volume: .8,
        sign: 1
    }, {
        name: "octave",
        spread: 6,
        offset: 6,
        volume: .8,
        sign: 1
    }, {
        name: "bowed",
        spread: .02,
        offset: 0,
        volume: 1,
        sign: -1
    }, {
        name: "piano",
        spread: .01,
        offset: 0,
        volume: 1,
        sign: .7
    }]), e.effectsNames = ["none", "reverb", "chorus", "chorus & reverb"], e.volumeRange = 50, e.volumeLogScale = .1428, e.panCenter = 50, e.panMax = 2 * e.panCenter, e.detuneMin = -50, e.detuneMax = 50, e.songDetuneMin = -250, e.songDetuneMax = 250, e.chords = r([{
        name: "harmony",
        harmonizes: !0,
        customInterval: !1,
        arpeggiates: !1,
        isCustomInterval: !1,
        strumParts: 0
    }, {
        name: "strum",
        harmonizes: !0,
        customInterval: !1,
        arpeggiates: !1,
        isCustomInterval: !1,
        strumParts: 1
    }, {
        name: "arpeggio",
        harmonizes: !1,
        customInterval: !1,
        arpeggiates: !0,
        isCustomInterval: !1,
        strumParts: 0
    }, {
        name: "custom interval",
        harmonizes: !0,
        customInterval: !0,
        arpeggiates: !0,
        isCustomInterval: !0,
        strumParts: 0
    }]), e.maxChordSize = 4, e.operatorCount = 4, e.algorithms = r([{
        name: "1←(2 3 4)",
        carrierCount: 1,
        associatedCarrier: [1, 1, 1, 1],
        modulatedBy: [
            [2, 3, 4],
            [],
            [],
            []
        ]
    }, {
        name: "1←(2 3←4)",
        carrierCount: 1,
        associatedCarrier: [1, 1, 1, 1],
        modulatedBy: [
            [2, 3],
            [],
            [4],
            []
        ]
    }, {
        name: "1←2←(3 4)",
        carrierCount: 1,
        associatedCarrier: [1, 1, 1, 1],
        modulatedBy: [
            [2],
            [3, 4],
            [],
            []
        ]
    }, {
        name: "1←(2 3)←4",
        carrierCount: 1,
        associatedCarrier: [1, 1, 1, 1],
        modulatedBy: [
            [2, 3],
            [4],
            [4],
            []
        ]
    }, {
        name: "1←2←3←4",
        carrierCount: 1,
        associatedCarrier: [1, 1, 1, 1],
        modulatedBy: [
            [2],
            [3],
            [4],
            []
        ]
    }, {
        name: "1←3 2←4",
        carrierCount: 2,
        associatedCarrier: [1, 2, 1, 2],
        modulatedBy: [
            [3],
            [4],
            [],
            []
        ]
    }, {
        name: "1 2←(3 4)",
        carrierCount: 2,
        associatedCarrier: [1, 2, 2, 2],
        modulatedBy: [
            [],
            [3, 4],
            [],
            []
        ]
    }, {
        name: "1 2←3←4",
        carrierCount: 2,
        associatedCarrier: [1, 2, 2, 2],
        modulatedBy: [
            [],
            [3],
            [4],
            []
        ]
    }, {
        name: "(1 2)←3←4",
        carrierCount: 2,
        associatedCarrier: [1, 2, 2, 2],
        modulatedBy: [
            [3],
            [3],
            [4],
            []
        ]
    }, {
        name: "(1 2)←(3 4)",
        carrierCount: 2,
        associatedCarrier: [1, 2, 2, 2],
        modulatedBy: [
            [3, 4],
            [3, 4],
            [],
            []
        ]
    }, {
        name: "1 2 3←4",
        carrierCount: 3,
        associatedCarrier: [1, 2, 3, 3],
        modulatedBy: [
            [],
            [],
            [4],
            []
        ]
    }, {
        name: "(1 2 3)←4",
        carrierCount: 3,
        associatedCarrier: [1, 2, 3, 3],
        modulatedBy: [
            [4],
            [4],
            [4],
            []
        ]
    }, {
        name: "1 2 3 4",
        carrierCount: 4,
        associatedCarrier: [1, 2, 3, 4],
        modulatedBy: [
            [],
            [],
            [],
            []
        ]
    }]), e.operatorCarrierInterval = [0, .04, -.073, .091], e.operatorAmplitudeMax = 15, e.operatorFrequencies = r([{
        name: "1×",
        mult: 1,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "~1×",
        mult: 1,
        hzOffset: 1.5,
        amplitudeSign: -1
    }, {
        name: "2×",
        mult: 2,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "~2×",
        mult: 2,
        hzOffset: -1.3,
        amplitudeSign: -1
    }, {
        name: "3×",
        mult: 3,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "4×",
        mult: 4,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "5×",
        mult: 5,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "6×",
        mult: 6,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "7×",
        mult: 7,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "8×",
        mult: 8,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "9×",
        mult: 9,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "11×",
        mult: 11,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "13×",
        mult: 13,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "16×",
        mult: 16,
        hzOffset: 0,
        amplitudeSign: 1
    }, {
        name: "20×",
        mult: 20,
        hzOffset: 0,
        amplitudeSign: 1
    }]), e.envelopes = r([{
        name: "custom",
        type: 0,
        speed: 0
    }, {
        name: "steady",
        type: 1,
        speed: 0
    }, {
        name: "punch",
        type: 2,
        speed: 0
    }, {
        name: "flare 1",
        type: 3,
        speed: 32
    }, {
        name: "flare 2",
        type: 3,
        speed: 8
    }, {
        name: "flare 3",
        type: 3,
        speed: 2
    }, {
        name: "twang 1",
        type: 4,
        speed: 32
    }, {
        name: "twang 2",
        type: 4,
        speed: 8
    }, {
        name: "twang 3",
        type: 4,
        speed: 2
    }, {
        name: "swell 1",
        type: 5,
        speed: 32
    }, {
        name: "swell 2",
        type: 5,
        speed: 8
    }, {
        name: "swell 3",
        type: 5,
        speed: 2
    }, {
        name: "tremolo1",
        type: 6,
        speed: 4
    }, {
        name: "tremolo2",
        type: 6,
        speed: 2
    }, {
        name: "tremolo3",
        type: 6,
        speed: 1
    }, {
        name: "tremolo4",
        type: 7,
        speed: 4
    }, {
        name: "tremolo5",
        type: 7,
        speed: 2
    }, {
        name: "tremolo6",
        type: 7,
        speed: 1
    }, {
        name: "decay 1",
        type: 8,
        speed: 10
    }, {
        name: "decay 2",
        type: 8,
        speed: 7
    }, {
        name: "decay 3",
        type: 8,
        speed: 4
    }]), e.feedbacks = r([{
        name: "1⟲",
        indices: [
            [1],
            [],
            [],
            []
        ]
    }, {
        name: "2⟲",
        indices: [
            [],
            [2],
            [],
            []
        ]
    }, {
        name: "3⟲",
        indices: [
            [],
            [],
            [3],
            []
        ]
    }, {
        name: "4⟲",
        indices: [
            [],
            [],
            [],
            [4]
        ]
    }, {
        name: "1⟲ 2⟲",
        indices: [
            [1],
            [2],
            [],
            []
        ]
    }, {
        name: "3⟲ 4⟲",
        indices: [
            [],
            [],
            [3],
            [4]
        ]
    }, {
        name: "1⟲ 2⟲ 3⟲",
        indices: [
            [1],
            [2],
            [3],
            []
        ]
    }, {
        name: "2⟲ 3⟲ 4⟲",
        indices: [
            [],
            [2],
            [3],
            [4]
        ]
    }, {
        name: "1⟲ 2⟲ 3⟲ 4⟲",
        indices: [
            [1],
            [2],
            [3],
            [4]
        ]
    }, {
        name: "1→2",
        indices: [
            [],
            [1],
            [],
            []
        ]
    }, {
        name: "1→3",
        indices: [
            [],
            [],
            [1],
            []
        ]
    }, {
        name: "1→4",
        indices: [
            [],
            [],
            [],
            [1]
        ]
    }, {
        name: "2→3",
        indices: [
            [],
            [],
            [2],
            []
        ]
    }, {
        name: "2→4",
        indices: [
            [],
            [],
            [],
            [2]
        ]
    }, {
        name: "3→4",
        indices: [
            [],
            [],
            [],
            [3]
        ]
    }, {
        name: "1→3 2→4",
        indices: [
            [],
            [],
            [1],
            [2]
        ]
    }, {
        name: "1→4 2→3",
        indices: [
            [],
            [],
            [2],
            [1]
        ]
    }, {
        name: "1→2→3→4",
        indices: [
            [],
            [1],
            [2],
            [3]
        ]
    }]), e.chipNoiseLength = 32768, e.spectrumBasePitch = 24, e.spectrumControlPoints = 30, e.spectrumControlPointsPerOctave = 7, e.spectrumControlPointBits = 3, e.spectrumMax = (1 << e.spectrumControlPointBits) - 1, e.harmonicsControlPoints = 28, e.harmonicsRendered = 64, e.harmonicsControlPointBits = 3, e.harmonicsMax = (1 << e.harmonicsControlPointBits) - 1, e.harmonicsWavelength = 2048, e.pulseWidthRange = 50, e.pitchChannelCountMin = 1, e.pitchChannelCountMax = 40, e.noiseChannelCountMin = 0, e.noiseChannelCountMax = 8, e.modChannelCountMin = 0, e.modChannelCountMax = 8, e.noiseInterval = 6, e.pitchesPerOctave = 12, e.drumCount = 12, e.modCount = 6, e.pitchOctaves = 8, e.maxScrollableOctaves = 5, e.maxPitch = e.pitchOctaves * e.pitchesPerOctave, e.maximumTonesPerChannel = 2 * e.maxChordSize, e.sineWaveLength = 256, e.sineWaveMask = e.sineWaveLength - 1, e.sineWave = function() {
        const t = new Float64Array(e.sineWaveLength + 1);
        for (let i = 0; i < e.sineWaveLength + 1; i++) t[i] = Math.sin(i * Math.PI * 2 / e.sineWaveLength);
        return t
    }(), e.barEditorHeight = 10, t.Config = e, t.getDrumWave = n, t.drawNoiseSpectrum = o, t.getArpeggioPitchIndex = function(t, i, s) {
        const n = e.rhythms[i].arpeggioPatterns[t - 1];
        return null != n ? n[s % n.length] : s % t
    }, t.toNameMap = r
}(beepbox || (beepbox = {})),
function(t) {
    t.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|android|ipad|playbook|silk/i.test(navigator.userAgent);
    class e {
        static valueToPreset(t) {
            const i = t >> 6,
                s = 63 & t;
            return e.presetCategories[i].presets[s]
        }
        static midiProgramToPresetValue(t) {
            for (let i = 0; i < e.presetCategories.length; i++) {
                const s = e.presetCategories[i];
                for (let e = 0; e < s.presets.length; e++) {
                    const n = s.presets[e];
                    if (n.generalMidi && n.midiProgram == t) return (i << 6) + e
                }
            }
            return null
        }
        static nameToPresetValue(t) {
            for (let i = 0; i < e.presetCategories.length; i++) {
                const s = e.presetCategories[i];
                for (let e = 0; e < s.presets.length; e++) {
                    if (s.presets[e].name == t) return (i << 6) + e
                }
            }
            return null
        }
    }
    e.versionDisplayName = t.Config.versionDisplayName, e.presetCategories = t.toNameMap([{
        name: "Custom Instruments",
        presets: t.toNameMap([{
            name: "chip wave",
            customType: 0
        }, {
            name: "FM (expert)",
            customType: 1
        }, {
            name: "basic noise",
            customType: 2
        },{
            name: "fuck",
            customType: 8
        },		{
            name: "spectrum",
            customType: 3
        }, {
            name: "drumset",
            customType: 4
        }, {
            name: "harmonics",
            customType: 5
        }, {
            name: "pulse width",
            customType: 6
        }, {
            name: "custom chip",
            customType: 7
        }])
    }, {
        name: "Retro Presets",
        presets: t.toNameMap([{
            name: "square wave",
            midiProgram: 80,
            settings: {
                type: "chip",
                transition: "seamless",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                wave: "square",
                interval: "union",
                vibrato: "none"
            }
        }, {
            name: "triangle wave",
            midiProgram: 71,
            settings: {
                type: "chip",
                transition: "seamless",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                wave: "triangle",
                interval: "union",
                vibrato: "none"
            }
        }, {
            name: "square lead",
            midiProgram: 80,
            generalMidi: !0,
            settings: {
                type: "chip",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                wave: "square",
                interval: "hum",
                vibrato: "none"
            }
        }, {
            name: "sawtooth lead 1",
            midiProgram: 81,
            generalMidi: !0,
            settings: {
                type: "chip",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                wave: "sawtooth",
                interval: "shimmer",
                vibrato: "none"
            }
        }, {
            name: "sawtooth lead 2",
            midiProgram: 81,
            settings: {
                type: "chip",
                effects: "reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 29,
                filterEnvelope: "steady",
                wave: "sawtooth",
                interval: "hum",
                vibrato: "light"
            }
        }, {
            name: "chip noise",
            midiProgram: 116,
            isNoise: !0,
            settings: {
                type: "noise",
                transition: "hard",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                wave: "retro"
            }
        }, {
            name: "FM twang",
            midiProgram: 32,
            settings: {
                type: "FM",
                transition: "hard",
                effects: "none",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "twang 2"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "FM bass",
            midiProgram: 36,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "custom interval",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "2×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "twang 2"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "twang 3"
                }, {
                    frequency: "20×",
                    amplitude: 3,
                    envelope: "twang 2"
                }]
            }
        }, {
            name: "FM flute",
            midiProgram: 73,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "twang 2"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "FM organ",
            midiProgram: 16,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "custom interval",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }, {
                    frequency: "2×",
                    amplitude: 11,
                    envelope: "steady"
                }]
            }
        }, {
            name: "NES Pulse",
            midiProgram: 80,
            settings: {
                type: "custom chip",
                transition: "hard",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                customChipWave: [-24, -24, -24, -24, -23, -23, -23, -23, -22, -22, -22, -22, -21, -21, -21, -21, -20, -20, -20, -20, -19, -19, -19, -19, -18, -18, -18, -18, -17, -17, -17, -17, 24, 24, 24, 24, 23, 23, 23, 23, 22, 22, 22, 22, 21, 21, 21, 21, 20, 20, 20, 20, 19, 19, 19, 19, 18, 18, 18, 18, 17, 17, 17, 17]
            }
        }, {
            name: "Gameboy Pulse",
            midiProgram: 80,
            settings: {
                type: "custom chip",
                transition: "hard",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                customChipWave: [-24, -20, -17, -15, -13, -13, -11, -11, -11, -9, -9, -9, -9, -7, -7, -7, -7, -7, -5, -5, -5, -5, -5, -5, -3, -3, -3, -3, -3, -3, -3, -3, 24, 20, 17, 15, 13, 13, 11, 11, 11, 9, 9, 9, 9, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3]
            }
        }, {
            name: "VRC6 Sawtooth",
            midiProgram: 81,
            settings: {
                type: "custom chip",
                transition: "hard",
                effects: "none",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                customChipWave: [-24, -20, -16, -13, -10, -8, -6, -5, -4, -4, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 16, 16, 16, 16, 16, 16, 16, 16, 20, 20, 20, 20, 20, 20, 20, 20, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24]
            }
        }, {
            name: "Atari Square",
            midiProgram: 80,
            settings: {
                type: "custom chip",
                effects: "none",
                transition: "seamless",
                chord: "arpeggio",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                customChipWave: [-24, -24, -24, -23, -23, -23, -22, -22, -22, -21, -21, -21, -20, -20, -20, -19, -19, -19, -18, -18, -18, -17, -17, -17, -16, -16, -16, -15, -15, -15, -14, -14, -14, -13, -13, -13, 24, 24, 24, 23, 23, 23, 22, 22, 22, 21, 21, 21, 20, 20, 20, 19, 19, 19, 18, 18, 18, 17, 17, 17, 16, 16, 15, 15]
            }
        }, {
            name: "Atari Bass",
            midiProgram: 36,
            settings: {
                type: "custom chip",
                effects: "none",
                transition: "seamless",
                chord: "arpeggio",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                customChipWave: [-24, -24, -24, -24, -24, -24, -24, -24, -24, 24, 24, 24, 24, 24, 24, -24, -24, -24, 24, 24, 24, -24, -24, -24, 24, 24, 24, -24, -24, -24, 24, 24, -24, -24, -24, -24, -24, -24, -24, -24, -24, 24, 24, 24, 24, 24, 24, -24, -24, 24, 24, 24, 24, 24, -24, -24, -24, -24, 24, 24, -24, -24, 24, 24]
            }
        }])
    }, {
        name: "Keyboard Presets",
        presets: t.toNameMap([{
            name: "grand piano 1",
            midiProgram: 0,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                interval: "piano",
                vibrato: "none",
                harmonics: [100, 100, 86, 86, 86, 71, 71, 71, 0, 86, 71, 71, 71, 57, 57, 71, 57, 14, 57, 57, 57, 57, 57, 57, 57, 57, 29, 57]
            }
        }, {
            name: "bright piano",
            midiProgram: 1,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                interval: "piano",
                vibrato: "none",
                harmonics: [100, 100, 86, 86, 71, 71, 0, 71, 86, 86, 71, 71, 71, 14, 57, 57, 57, 57, 57, 57, 29, 57, 57, 57, 57, 57, 57, 57]
            }
        }, {
            name: "electric grand",
            midiProgram: 2,
            generalMidi: !0,
            settings: {
                type: "chip",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                wave: "1/8 pulse",
                interval: "shimmer",
                vibrato: "none"
            }
        }, {
            name: "honky-tonk piano",
            midiProgram: 3,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 29,
                filterEnvelope: "twang 2",
                interval: "honky tonk",
                vibrato: "none",
                harmonics: [100, 100, 86, 71, 86, 71, 43, 71, 43, 43, 57, 57, 57, 29, 57, 43, 43, 43, 43, 43, 29, 43, 43, 43, 29, 29, 29, 29]
            }
        }, {
            name: "electric piano 1",
            midiProgram: 4,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "union",
                vibrato: "none",
                harmonics: [86, 100, 100, 71, 71, 57, 57, 43, 43, 43, 29, 29, 29, 14, 14, 14, 0, 0, 0, 0, 0, 57, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "electric piano 2",
            midiProgram: 5,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "steady"
                }, {
                    frequency: "16×",
                    amplitude: 6,
                    envelope: "twang 3"
                }]
            }
        }, {
            name: "harpsichord",
            midiProgram: 6,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 8,
                    envelope: "steady"
                }, {
                    frequency: "3×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "5×",
                    amplitude: 7,
                    envelope: "steady"
                }]
            }
        }, {
            name: "clavinet",
            midiProgram: 7,
            generalMidi: !0,
            settings: {
                type: "FM",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 0,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "3⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "3×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "8×",
                    amplitude: 4,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "dulcimer",
            midiProgram: 15,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "piano",
                vibrato: "none",
                harmonics: [100, 100, 100, 86, 100, 86, 57, 100, 100, 86, 100, 86, 100, 86, 100, 71, 57, 71, 71, 100, 86, 71, 86, 86, 100, 86, 86, 86]
            }
        }, {
            name: "grand piano 2",
            midiProgram: 0,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 43,
                filterEnvelope: "twang 3",
                interval: "shimmer",
                vibrato: "none",
                harmonics: [100, 86, 86, 86, 86, 71, 71, 57, 0, 57, 29, 43, 57, 57, 57, 43, 43, 0, 29, 43, 43, 43, 43, 43, 43, 29, 0, 29]
            }
        }])
    }, {
        name: "Idiophone Presets",
        presets: t.toNameMap([{
            name: "celesta",
            midiProgram: 8,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~1×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "20×",
                    amplitude: 3,
                    envelope: "twang 1"
                }, {
                    frequency: "3×",
                    amplitude: 1,
                    envelope: "twang 2"
                }]
            }
        }, {
            name: "glockenspiel",
            midiProgram: 9,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "decay 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "20×",
                    amplitude: 2,
                    envelope: "twang 1"
                }]
            }
        }, {
            name: "music box 1",
            midiProgram: 10,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 0, 0, 100, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 71, 0]
            }
        }, {
            name: "music box 2",
            midiProgram: 10,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 57, 57, 0, 0, 0, 0, 0, 0, 57, 0, 0, 0, 14, 14, 14, 14, 14, 14, 43, 14, 14, 14, 14, 14, 14, 14, 14]
            }
        }, {
            name: "vibraphone",
            midiProgram: 11,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1→2→3→4",
                feedbackAmplitude: 3,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "9×",
                    amplitude: 3,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 9,
                    envelope: "custom"
                }]
            }
        }, {
            name: "marimba",
            midiProgram: 12,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "decay 1",
                vibrato: "none",
                algorithm: "1 2←(3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "13×",
                    amplitude: 6,
                    envelope: "twang 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "kalimba",
            midiProgram: 108,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "decay 1",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 3,
                    envelope: "twang 2"
                }, {
                    frequency: "20×",
                    amplitude: 3,
                    envelope: "twang 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "xylophone",
            midiProgram: 13,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "11×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "20×",
                    amplitude: 6,
                    envelope: "twang 1"
                }]
            }
        }, {
            name: "tubular bell",
            midiProgram: 14,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                interval: "hum",
                vibrato: "none",
                harmonics: [43, 71, 0, 100, 0, 100, 0, 86, 0, 0, 86, 0, 14, 71, 14, 14, 57, 14, 14, 43, 14, 14, 43, 14, 14, 43, 14, 14]
            }
        }, {
            name: "bell synth",
            midiProgram: 14,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~2×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 6,
                    envelope: "twang 3"
                }, {
                    frequency: "20×",
                    amplitude: 1,
                    envelope: "twang 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "rain drop",
            midiProgram: 96,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 4,
                    envelope: "custom"
                }, {
                    frequency: "20×",
                    amplitude: 3,
                    envelope: "twang 1"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "tremolo1"
                }]
            }
        }, {
            name: "crystal",
            midiProgram: 98,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "delayed",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 4,
                    envelope: "custom"
                }, {
                    frequency: "13×",
                    amplitude: 4,
                    envelope: "custom"
                }]
            }
        }, {
            name: "tinkle bell",
            midiProgram: 112,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1→2→3→4",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "~2×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "16×",
                    amplitude: 7,
                    envelope: "custom"
                }]
            }
        }, {
            name: "agogo",
            midiProgram: 113,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "decay 1",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1→4",
                feedbackAmplitude: 15,
                feedbackEnvelope: "decay 1",
                operators: [{
                    frequency: "2×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "13×",
                    amplitude: 11,
                    envelope: "custom"
                }]
            }
        }])
    }, {
        name: "Guitar Presets",
        presets: t.toNameMap([{
            name: "nylon guitar",
            midiProgram: 24,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "3⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "5×",
                    amplitude: 2,
                    envelope: "steady"
                }, {
                    frequency: "7×",
                    amplitude: 4,
                    envelope: "steady"
                }]
            }
        }, {
            name: "steel guitar",
            midiProgram: 25,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 100, 86, 71, 71, 71, 86, 86, 71, 57, 43, 43, 43, 57, 57, 57, 57, 57, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43]
            }
        }, {
            name: "jazz guitar",
            midiProgram: 26,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 100, 86, 71, 57, 71, 71, 43, 57, 71, 57, 43, 29, 29, 29, 29, 29, 29, 29, 29, 14, 14, 14, 14, 14, 14, 14, 0]
            }
        }, {
            name: "clean guitar",
            midiProgram: 27,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                interval: "union",
                vibrato: "none",
                harmonics: [86, 100, 100, 100, 86, 57, 86, 100, 100, 100, 71, 57, 43, 71, 86, 71, 57, 57, 71, 71, 71, 71, 57, 57, 57, 57, 57, 43]
            }
        }, {
            name: "muted guitar",
            midiProgram: 28,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 4,
                    envelope: "twang 3"
                }, {
                    frequency: "4×",
                    amplitude: 4,
                    envelope: "twang 2"
                }, {
                    frequency: "16×",
                    amplitude: 4,
                    envelope: "twang 1"
                }]
            }
        }])
    }, {
        name: "Picked Bass Presets",
        presets: t.toNameMap([{
            name: "acoustic bass",
            midiProgram: 32,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 86, 71, 71, 71, 71, 57, 57, 57, 57, 43, 43, 43, 43, 43, 29, 29, 29, 29, 29, 29, 14, 14, 14, 14, 14, 14, 14]
            }
        }, {
            name: "fingered bass",
            midiProgram: 33,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 86, 71, 57, 71, 43, 57, 29, 29, 29, 29, 29, 29, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 0]
            }
        }, {
            name: "picked bass",
            midiProgram: 34,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "3⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "11×",
                    amplitude: 1,
                    envelope: "twang 3"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "steady"
                }]
            }
        }, {
            name: "fretless bass",
            midiProgram: 35,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 1e3,
                filterResonance: 14,
                filterEnvelope: "flare 2",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 100, 86, 71, 71, 57, 57, 71, 71, 71, 57, 57, 57, 57, 57, 57, 57, 43, 43, 43, 43, 43, 43, 43, 43, 29, 29, 14]
            }
        }, {
            name: "slap bass 1",
            midiProgram: 36,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 100, 100, 100, 86, 71, 57, 29, 29, 43, 43, 57, 71, 57, 29, 29, 43, 57, 57, 57, 43, 43, 43, 57, 71, 71, 71, 71]
            }
        }, {
            name: "slap bass 2",
            midiProgram: 37,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "3⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "3×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "13×",
                    amplitude: 3,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }]
            }
        }, {
            name: "bass synth 1",
            midiProgram: 38,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 43,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "3⟲ 4⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "twang 1"
                }, {
                    frequency: "~1×",
                    amplitude: 13,
                    envelope: "twang 2"
                }]
            }
        }, {
            name: "bass synth 2",
            midiProgram: 39,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 1e3,
                filterResonance: 57,
                filterEnvelope: "punch",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1→2",
                feedbackAmplitude: 4,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "steady"
                }, {
                    frequency: "3×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "bass & lead",
            midiProgram: 87,
            generalMidi: !0,
            settings: {
                type: "chip",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 86,
                filterEnvelope: "twang 2",
                wave: "sawtooth",
                interval: "shimmer",
                vibrato: "none"
            }
        }])
    }, {
        name: "Picked String Presets",
        presets: t.toNameMap([{
            name: "pizzicato strings",
            midiProgram: 45,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 1e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 10,
                    envelope: "steady"
                }]
            }
        }, {
            name: "harp",
            midiProgram: 46,
            generalMidi: !0,
            settings: {
                type: "FM",
                transition: "hard fade",
                effects: "reverb",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "3⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "~2×",
                    amplitude: 3,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }]
            }
        }, {
            name: "sitar",
            midiProgram: 104,
            generalMidi: !0,
            settings: {
                type: "FM",
                transition: "hard fade",
                effects: "reverb",
                chord: "strum",
                filterCutoffHz: 8e3,
                filterResonance: 57,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "twang 3"
                }, {
                    frequency: "9×",
                    amplitude: 3,
                    envelope: "twang 3"
                }, {
                    frequency: "16×",
                    amplitude: 9,
                    envelope: "swell 3"
                }]
            }
        }, {
            name: "banjo",
            midiProgram: 105,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "2⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "4×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "steady"
                }, {
                    frequency: "11×",
                    amplitude: 3,
                    envelope: "twang 3"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }]
            }
        }, {
            name: "ukulele",
            midiProgram: 105,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "3⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "2×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "9×",
                    amplitude: 4,
                    envelope: "twang 2"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }]
            }
        }, {
            name: "shamisen",
            midiProgram: 106,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "3⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "steady"
                }, {
                    frequency: "16×",
                    amplitude: 4,
                    envelope: "twang 3"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "steady"
                }]
            }
        }, {
            name: "koto",
            midiProgram: 107,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 2",
                operators: [{
                    frequency: "~1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 8,
                    envelope: "twang 3"
                }, {
                    frequency: "~2×",
                    amplitude: 8,
                    envelope: "twang 3"
                }]
            }
        }])
    }, {
        name: "Distortion Presets",
        presets: t.toNameMap([{
            name: "overdrive guitar",
            midiProgram: 29,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1→2",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "twang 3"
                }, {
                    frequency: "1×",
                    amplitude: 4,
                    envelope: "swell 3"
                }]
            }
        }, {
            name: "distortion guitar",
            midiProgram: 30,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 57,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1→2",
                feedbackAmplitude: 4,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "swell 1"
                }, {
                    frequency: "~2×",
                    amplitude: 5,
                    envelope: "swell 3"
                }]
            }
        }, {
            name: "charango synth",
            midiProgram: 84,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 0,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1→2→3→4",
                feedbackAmplitude: 8,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "3×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "4×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "steady"
                }]
            }
        }, {
            name: "guitar harmonics",
            midiProgram: 31,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3)←4",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "4×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "16×",
                    amplitude: 5,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 2,
                    envelope: "punch"
                }, {
                    frequency: "~1×",
                    amplitude: 12,
                    envelope: "twang 1"
                }]
            }
        }, {
            name: "distorted synth 1",
            midiProgram: 30,
            settings: {
                type: "PWM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                pulseWidth: 18,
                pulseEnvelope: "punch",
                vibrato: "none"
            }
        }, {
            name: "distorted synth 2",
            midiProgram: 30,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "seamless",
                chord: "strum",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "flare 1"
                }]
            }
        }, {
            name: "distorted synth 3",
            midiProgram: 30,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "1←(2 3 4)",
                feedbackType: "1→2",
                feedbackAmplitude: 3,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "distorted synth 4",
            midiProgram: 30,
            settings: {
                type: "PWM",
                effects: "reverb",
                transition: "hard",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 57,
                filterEnvelope: "steady",
                pulseWidth: 50,
                pulseEnvelope: "swell 1",
                vibrato: "delayed"
            }
        }])
    }, {
        name: "Bellows Presets",
        presets: t.toNameMap([{
            name: "drawbar organ 1",
            midiProgram: 16,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                harmonics: [86, 86, 0, 86, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "drawbar organ 2",
            midiProgram: 16,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                harmonics: [86, 29, 71, 86, 71, 14, 0, 100, 0, 0, 0, 86, 0, 0, 0, 71, 0, 0, 0, 57, 0, 0, 0, 29, 0, 0, 0, 0]
            }
        }, {
            name: "percussive organ",
            midiProgram: 17,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "FM",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "punch",
                vibrato: "light",
                algorithm: "1 2 3 4",
                feedbackType: "1→3 2→4",
                feedbackAmplitude: 7,
                feedbackEnvelope: "decay 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 8,
                    envelope: "custom"
                }]
            }
        }, {
            name: "rock organ",
            midiProgram: 18,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "punch",
                vibrato: "delayed",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "flare 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 5,
                    envelope: "steady"
                }]
            }
        }, {
            name: "pipe organ",
            midiProgram: 19,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "FM",
                transition: "cross fade",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 8,
                    envelope: "custom"
                }]
            }
        }, {
            name: "reed organ",
            midiProgram: 20,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                harmonics: [71, 86, 100, 86, 71, 100, 57, 71, 71, 71, 43, 43, 43, 71, 43, 71, 57, 57, 57, 57, 57, 57, 57, 29, 43, 29, 29, 14]
            }
        }, {
            name: "accordion",
            midiProgram: 21,
            generalMidi: !0,
            settings: {
                type: "chip",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 0,
                filterEnvelope: "swell 1",
                wave: "double saw",
                interval: "honky tonk",
                vibrato: "none"
            }
        }, {
            name: "bandoneon",
            midiProgram: 23,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "swell 1",
                interval: "hum",
                vibrato: "none",
                harmonics: [86, 86, 86, 57, 71, 86, 57, 71, 71, 71, 57, 43, 57, 43, 71, 43, 71, 57, 57, 43, 43, 43, 57, 43, 43, 29, 29, 29]
            }
        }, {
            name: "bagpipe",
            midiProgram: 109,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 43,
                filterEnvelope: "punch",
                interval: "hum",
                vibrato: "none",
                harmonics: [71, 86, 86, 100, 100, 86, 57, 100, 86, 71, 71, 71, 57, 57, 57, 71, 57, 71, 57, 71, 43, 57, 57, 43, 43, 43, 43, 43]
            }
        }])
    }, {
        name: "String Presets",
        presets: t.toNameMap([{
            name: "violin 1",
            midiProgram: 40,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "4×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "7×",
                    amplitude: 5,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "viola",
            midiProgram: 41,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 8,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "2×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "13×",
                    amplitude: 4,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 5,
                    envelope: "steady"
                }]
            }
        }, {
            name: "cello",
            midiProgram: 42,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }]
            }
        }, {
            name: "contrabass",
            midiProgram: 43,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "(1 2)←3←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "16×",
                    amplitude: 5,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "steady"
                }, {
                    frequency: "6×",
                    amplitude: 3,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "fiddle",
            midiProgram: 110,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "3⟲ 4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "2×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "steady"
                }, {
                    frequency: "16×",
                    amplitude: 3,
                    envelope: "steady"
                }]
            }
        }, {
            name: "tremolo strings",
            midiProgram: 44,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 0,
                filterEnvelope: "tremolo4",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1→2→3→4",
                feedbackAmplitude: 12,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "~2×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 8,
                    envelope: "custom"
                }]
            }
        }, {
            name: "strings",
            midiProgram: 48,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "4×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "7×",
                    amplitude: 3,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "slow strings",
            midiProgram: 49,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 0,
                filterEnvelope: "swell 2",
                vibrato: "none",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "flare 3",
                operators: [{
                    frequency: "4×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "7×",
                    amplitude: 4,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "strings synth 1",
            midiProgram: 50,
            generalMidi: !0,
            settings: {
                type: "chip",
                volume: 60,
                transition: "soft fade",
                effects: "chorus & reverb",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 43,
                filterEnvelope: "steady",
                wave: "sawtooth",
                interval: "hum",
                vibrato: "delayed"
            }
        }, {
            name: "strings synth 2",
            midiProgram: 51,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 12,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "3×",
                    amplitude: 6,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 9,
                    envelope: "custom"
                }]
            }
        }, {
            name: "orchestra hit 1",
            midiProgram: 55,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 14,
                filterEnvelope: "custom",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 14,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "twang 3"
                }, {
                    frequency: "2×",
                    amplitude: 15,
                    envelope: "flare 3"
                }, {
                    frequency: "4×",
                    amplitude: 15,
                    envelope: "flare 2"
                }, {
                    frequency: "8×",
                    amplitude: 15,
                    envelope: "flare 1"
                }]
            }
        }, {
            name: "violin 2",
            midiProgram: 40,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "light",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "4×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "7×",
                    amplitude: 8,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "orchestra hit 2",
            midiProgram: 55,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "decay 1",
                vibrato: "delayed",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 14,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 14,
                    envelope: "custom"
                }]
            }
        }])
    }, {
        name: "Vocal Presets",
        presets: t.toNameMap([{
            name: "choir soprano",
            midiProgram: 94,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 57,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [86, 100, 86, 43, 14, 14, 57, 71, 57, 14, 14, 14, 14, 14, 43, 57, 43, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0]
            }
        }, {
            name: "choir tenor",
            midiProgram: 52,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 86,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [86, 100, 100, 86, 71, 57, 29, 14, 14, 14, 29, 43, 43, 43, 29, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "choir bass",
            midiProgram: 52,
            settings: {
                type: "harmonics",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 86,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [71, 86, 86, 100, 86, 100, 57, 43, 14, 14, 14, 14, 29, 29, 43, 43, 43, 43, 43, 29, 29, 29, 29, 14, 14, 14, 0, 0]
            }
        }, {
            name: "solo soprano",
            midiProgram: 85,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 71,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [86, 100, 86, 43, 14, 14, 57, 71, 57, 14, 14, 14, 14, 14, 43, 57, 43, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0]
            }
        }, {
            name: "solo tenor",
            midiProgram: 85,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 86,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [86, 100, 100, 86, 71, 57, 29, 14, 14, 14, 29, 43, 43, 43, 29, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "solo bass",
            midiProgram: 85,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 86,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [71, 86, 86, 100, 86, 100, 57, 43, 14, 14, 14, 14, 29, 29, 43, 43, 43, 43, 43, 29, 29, 29, 29, 14, 14, 14, 0, 0]
            }
        }, {
            name: "voice ooh",
            midiProgram: 53,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 57,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "shaky",
                harmonics: [100, 57, 43, 43, 14, 14, 0, 0, 0, 14, 29, 29, 14, 0, 14, 29, 29, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "voice synth",
            midiProgram: 54,
            generalMidi: !0,
            settings: {
                type: "chip",
                transition: "medium fade",
                effects: "chorus & reverb",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 57,
                filterEnvelope: "steady",
                wave: "rounded",
                interval: "union",
                vibrato: "light"
            }
        }, {
            name: "vox synth lead",
            midiProgram: 85,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "light",
                algorithm: "(1 2 3)←4",
                feedbackType: "1→2→3→4",
                feedbackAmplitude: 2,
                feedbackEnvelope: "punch",
                operators: [{
                    frequency: "2×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "9×",
                    amplitude: 5,
                    envelope: "custom"
                }, {
                    frequency: "20×",
                    amplitude: 1,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 4,
                    envelope: "steady"
                }]
            }
        }, {
            name: "tiny robot",
            midiProgram: 85,
            settings: {
                type: "FM",
                transition: "slide",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "2×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "punch"
                }, {
                    frequency: "~1×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "yowie",
            midiProgram: 85,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 86,
                filterEnvelope: "tremolo5",
                vibrato: "none",
                algorithm: "1←2←(3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 12,
                feedbackEnvelope: "tremolo3",
                operators: [{
                    frequency: "2×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "16×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "mouse",
            midiProgram: 85,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "slide",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "light",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "flare 2",
                operators: [{
                    frequency: "2×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "gumdrop",
            midiProgram: 85,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "2×",
                    amplitude: 15,
                    envelope: "punch"
                }, {
                    frequency: "4×",
                    amplitude: 15,
                    envelope: "punch"
                }, {
                    frequency: "7×",
                    amplitude: 15,
                    envelope: "punch"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "twang 1"
                }]
            }
        }, {
            name: "echo drop",
            midiProgram: 102,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "punch",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~2×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "11×",
                    amplitude: 2,
                    envelope: "steady"
                }, {
                    frequency: "16×",
                    amplitude: 5,
                    envelope: "swell 3"
                }]
            }
        }, {
            name: "dark choir",
            midiProgram: 85,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "swell 1",
                spectrum: [43, 14, 14, 14, 14, 14, 14, 100, 14, 14, 14, 57, 14, 14, 100, 14, 43, 14, 43, 14, 14, 43, 14, 29, 14, 29, 14, 14, 29, 0]
            }
        }])
    }, {
        name: "Brass Presets",
        presets: t.toNameMap([{
            name: "trumpet",
            midiProgram: 56,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 5,
                    envelope: "flare 2"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "trombone",
            midiProgram: 57,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "2⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "tuba",
            midiProgram: 58,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "2⟲",
                feedbackAmplitude: 8,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "muted trumpet",
            midiProgram: 59,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "swell 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "flare 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "9×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "13×",
                    amplitude: 9,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "french horn",
            midiProgram: 60,
            generalMidi: !0,
            settings: {
                type: "FM",
                transition: "soft",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 3,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "swell 1"
                }, {
                    frequency: "~1×",
                    amplitude: 8,
                    envelope: "flare 2"
                }]
            }
        }, {
            name: "brass section",
            midiProgram: 61,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "punch",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "swell 1"
                }, {
                    frequency: "~1×",
                    amplitude: 10,
                    envelope: "swell 1"
                }]
            }
        }, {
            name: "brass synth 1",
            midiProgram: 62,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 11,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "flare 1"
                }, {
                    frequency: "~1×",
                    amplitude: 8,
                    envelope: "flare 2"
                }]
            }
        }, {
            name: "brass synth 2",
            midiProgram: 63,
            generalMidi: !0,
            settings: {
                type: "FM",
                transition: "soft",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 43,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "flare 1"
                }, {
                    frequency: "~1×",
                    amplitude: 7,
                    envelope: "flare 1"
                }]
            }
        }, {
            name: "pulse brass",
            midiProgram: 62,
            settings: {
                type: "PWM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "swell 1",
                pulseWidth: 50,
                pulseEnvelope: "flare 3",
                vibrato: "none"
            }
        }])
    }, {
        name: "Reed Presets",
        presets: t.toNameMap([{
            name: "soprano sax",
            midiProgram: 64,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 4,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "5×",
                    amplitude: 4,
                    envelope: "punch"
                }]
            }
        }, {
            name: "alto sax",
            midiProgram: 65,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "punch",
                operators: [{
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "4×",
                    amplitude: 6,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "steady"
                }]
            }
        }, {
            name: "tenor sax",
            midiProgram: 66,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "1⟲",
                feedbackAmplitude: 6,
                feedbackEnvelope: "swell 1",
                operators: [{
                    frequency: "2×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 3,
                    envelope: "steady"
                }, {
                    frequency: "8×",
                    amplitude: 3,
                    envelope: "steady"
                }]
            }
        }, {
            name: "baritone sax",
            midiProgram: 67,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "swell 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "8×",
                    amplitude: 4,
                    envelope: "steady"
                }, {
                    frequency: "4×",
                    amplitude: 5,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 4,
                    envelope: "punch"
                }]
            }
        }, {
            name: "sax synth",
            midiProgram: 64,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "light",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 4,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "4×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "shehnai",
            midiProgram: 111,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "light",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 3,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "4×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "oboe",
            midiProgram: 68,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "swell 1",
                vibrato: "none",
                algorithm: "1 2←(3 4)",
                feedbackType: "2⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "tremolo5",
                operators: [{
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "6×",
                    amplitude: 2,
                    envelope: "steady"
                }]
            }
        }, {
            name: "english horn",
            midiProgram: 69,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1 2←(3 4)",
                feedbackType: "2⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "4×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 8,
                    envelope: "punch"
                }, {
                    frequency: "8×",
                    amplitude: 4,
                    envelope: "steady"
                }]
            }
        }, {
            name: "bassoon",
            midiProgram: 70,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 707,
                filterResonance: 57,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "2×",
                    amplitude: 11,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "6×",
                    amplitude: 6,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "clarinet",
            midiProgram: 71,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 43, 86, 57, 86, 71, 86, 71, 71, 71, 71, 71, 71, 43, 71, 71, 57, 57, 57, 57, 57, 57, 43, 43, 43, 29, 14, 0]
            }
        }, {
            name: "harmonica",
            midiProgram: 22,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 29,
                filterEnvelope: "swell 1",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "tremolo5",
                operators: [{
                    frequency: "2×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "steady"
                }, {
                    frequency: "~2×",
                    amplitude: 2,
                    envelope: "twang 3"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }])
    }, {
        name: "Flute Presets",
        presets: t.toNameMap([{
            name: "flute 1",
            midiProgram: 73,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "4⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "decay 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 4,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 3,
                    envelope: "steady"
                }, {
                    frequency: "~1×",
                    amplitude: 1,
                    envelope: "punch"
                }]
            }
        }, {
            name: "recorder",
            midiProgram: 74,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "swell 2",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 43, 57, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 29, 29, 29, 29, 29, 29, 29, 14, 14, 14, 14, 14, 14, 14, 0]
            }
        }, {
            name: "whistle",
            midiProgram: 78,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "chorus & reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "delayed",
                harmonics: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "ocarina",
            midiProgram: 79,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "none",
                harmonics: [100, 14, 57, 14, 29, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "piccolo",
            midiProgram: 72,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 43,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "4⟲",
                feedbackAmplitude: 15,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "~2×",
                    amplitude: 3,
                    envelope: "punch"
                }, {
                    frequency: "~1×",
                    amplitude: 5,
                    envelope: "punch"
                }]
            }
        }, {
            name: "shakuhachi",
            midiProgram: 77,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "steady",
                vibrato: "delayed",
                algorithm: "1←(2 3←4)",
                feedbackType: "3→4",
                feedbackAmplitude: 15,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 3,
                    envelope: "punch"
                }, {
                    frequency: "~1×",
                    amplitude: 4,
                    envelope: "twang 1"
                }, {
                    frequency: "20×",
                    amplitude: 15,
                    envelope: "steady"
                }]
            }
        }, {
            name: "pan flute",
            midiProgram: 75,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 43,
                filterEnvelope: "steady",
                spectrum: [100, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 71, 0, 0, 14, 0, 57, 0, 29, 14, 29, 14, 14, 29, 14, 29, 14, 14, 29, 14]
            }
        }, {
            name: "blown bottle",
            midiProgram: 76,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 57,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "twang 1",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 4,
                    envelope: "custom"
                }, {
                    frequency: "6×",
                    amplitude: 2,
                    envelope: "custom"
                }, {
                    frequency: "11×",
                    amplitude: 2,
                    envelope: "custom"
                }]
            }
        }, {
            name: "calliope",
            midiProgram: 82,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                transition: "cross fade",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "steady",
                spectrum: [100, 0, 0, 0, 0, 0, 0, 86, 0, 0, 0, 71, 0, 0, 57, 0, 43, 0, 29, 14, 14, 29, 14, 14, 14, 14, 14, 14, 14, 14]
            }
        }, {
            name: "chiffer",
            midiProgram: 83,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "punch",
                spectrum: [86, 0, 0, 0, 0, 0, 0, 71, 0, 0, 0, 71, 0, 0, 57, 0, 57, 0, 43, 14, 14, 43, 14, 29, 14, 29, 29, 29, 29, 14]
            }
        }, {
            name: "breath noise",
            midiProgram: 121,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "cross fade",
                chord: "strum",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                spectrum: [71, 0, 0, 0, 0, 0, 0, 29, 0, 0, 0, 71, 0, 0, 29, 0, 100, 29, 14, 29, 100, 29, 100, 14, 14, 71, 0, 29, 0, 0]
            }
        }, {
            name: "flute 2",
            midiProgram: 73,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "seamless",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "delayed",
                harmonics: [100, 43, 86, 57, 86, 71, 86, 71, 71, 71, 71, 71, 71, 43, 71, 71, 57, 57, 57, 57, 57, 57, 43, 43, 43, 29, 14, 0]
            }
        }])
    }, {
        name: "Pad Presets",
        presets: t.toNameMap([{
            name: "new age pad",
            midiProgram: 88,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 43,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 3,
                feedbackEnvelope: "swell 3",
                operators: [{
                    frequency: "2×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 4,
                    envelope: "swell 2"
                }, {
                    frequency: "6×",
                    amplitude: 3,
                    envelope: "twang 3"
                }, {
                    frequency: "13×",
                    amplitude: 3,
                    envelope: "steady"
                }]
            }
        }, {
            name: "warm pad",
            midiProgram: 89,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "swell 3",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 6,
                    envelope: "swell 1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "polysynth pad",
            midiProgram: 90,
            generalMidi: !0,
            settings: {
                type: "chip",
                transition: "hard fade",
                effects: "chorus & reverb",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "twang 3",
                wave: "sawtooth",
                interval: "hum",
                vibrato: "delayed"
            }
        }, {
            name: "space voice pad",
            midiProgram: 91,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 71,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "(1 2 3)←4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "swell 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 8,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "11×",
                    amplitude: 1,
                    envelope: "punch"
                }]
            }
        }, {
            name: "bowed glass pad",
            midiProgram: 92,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "twang 3"
                }, {
                    frequency: "7×",
                    amplitude: 4,
                    envelope: "flare 3"
                }]
            }
        }, {
            name: "metallic pad",
            midiProgram: 93,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "1←3 2←4",
                feedbackType: "1⟲ 2⟲",
                feedbackAmplitude: 13,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 9,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "swell 2"
                }, {
                    frequency: "11×",
                    amplitude: 7,
                    envelope: "steady"
                }]
            }
        }, {
            name: "sweep pad",
            midiProgram: 95,
            generalMidi: !0,
            settings: {
                type: "chip",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 86,
                filterEnvelope: "flare 3",
                wave: "sawtooth",
                interval: "hum",
                vibrato: "none"
            }
        }, {
            name: "atmosphere",
            midiProgram: 99,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "3⟲ 4⟲",
                feedbackAmplitude: 3,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "swell 3"
                }, {
                    frequency: "3×",
                    amplitude: 7,
                    envelope: "twang 2"
                }, {
                    frequency: "1×",
                    amplitude: 7,
                    envelope: "twang 3"
                }]
            }
        }, {
            name: "brightness",
            midiProgram: 100,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "chorus & reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                interval: "octave",
                vibrato: "none",
                harmonics: [100, 86, 86, 86, 43, 57, 43, 71, 43, 43, 43, 57, 43, 43, 57, 71, 57, 43, 29, 43, 57, 57, 43, 29, 29, 29, 29, 14]
            }
        }, {
            name: "goblins",
            midiProgram: 101,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "swell 2",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "1⟲",
                feedbackAmplitude: 10,
                feedbackEnvelope: "flare 3",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 5,
                    envelope: "swell 3"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "tremolo1"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "sci-fi",
            midiProgram: 103,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 5657,
                filterResonance: 14,
                filterEnvelope: "twang 3",
                vibrato: "none",
                algorithm: "(1 2)←3←4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 8,
                feedbackEnvelope: "twang 3",
                operators: [{
                    frequency: "~1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 10,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 5,
                    envelope: "twang 3"
                }, {
                    frequency: "11×",
                    amplitude: 8,
                    envelope: "tremolo5"
                }]
            }
        }, {
            name: "flutter pad",
            midiProgram: 90,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 86,
                filterEnvelope: "twang 3",
                vibrato: "delayed",
                algorithm: "(1 2)←(3 4)",
                feedbackType: "1⟲ 2⟲ 3⟲",
                feedbackAmplitude: 9,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "1×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "5×",
                    amplitude: 7,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 5,
                    envelope: "tremolo1"
                }, {
                    frequency: "~1×",
                    amplitude: 6,
                    envelope: "punch"
                }]
            }
        }, {
            name: "feedback pad",
            midiProgram: 89,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft fade",
                chord: "custom interval",
                filterCutoffHz: 8e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1 2 3 4",
                feedbackType: "1⟲ 2⟲ 3⟲ 4⟲",
                feedbackAmplitude: 7,
                feedbackEnvelope: "swell 2",
                operators: [{
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "~1×",
                    amplitude: 15,
                    envelope: "custom"
                }]
            }
        }])
    }, {
        name: "Drum Presets",
        presets: t.toNameMap([{
            name: "standard drumset",
            midiProgram: 116,
            isNoise: !0,
            settings: {
                type: "drumset",
                effects: "reverb",
                drums: [{
                    filterEnvelope: "twang 1",
                    spectrum: [57, 71, 71, 86, 86, 86, 71, 71, 71, 71, 57, 57, 57, 57, 43, 43, 43, 43, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
                }, {
                    filterEnvelope: "twang 1",
                    spectrum: [0, 0, 0, 100, 71, 71, 57, 86, 57, 57, 57, 71, 43, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43, 43]
                }, {
                    filterEnvelope: "twang 1",
                    spectrum: [0, 0, 0, 0, 100, 57, 43, 43, 29, 57, 43, 29, 71, 43, 43, 43, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 29, 43, 43, 43]
                }, {
                    filterEnvelope: "twang 1",
                    spectrum: [0, 0, 0, 0, 0, 71, 57, 43, 43, 43, 57, 57, 43, 29, 57, 43, 43, 43, 29, 43, 57, 43, 43, 43, 43, 43, 43, 29, 43, 43]
                }, {
                    filterEnvelope: "decay 2",
                    spectrum: [0, 14, 29, 43, 86, 71, 29, 43, 43, 43, 43, 29, 71, 29, 71, 29, 43, 43, 43, 43, 57, 43, 43, 57, 43, 43, 43, 57, 57, 57]
                }, {
                    filterEnvelope: "decay 1",
                    spectrum: [0, 0, 14, 14, 14, 14, 29, 29, 29, 43, 43, 43, 57, 57, 57, 71, 71, 71, 71, 71, 71, 71, 71, 57, 57, 57, 57, 43, 43, 43]
                }, {
                    filterEnvelope: "twang 3",
                    spectrum: [43, 43, 43, 71, 29, 29, 43, 43, 43, 29, 43, 43, 43, 29, 29, 43, 43, 29, 29, 29, 57, 14, 57, 43, 43, 57, 43, 43, 57, 57]
                }, {
                    filterEnvelope: "decay 3",
                    spectrum: [29, 43, 43, 43, 43, 29, 29, 43, 29, 29, 43, 29, 14, 29, 43, 29, 43, 29, 57, 29, 43, 57, 43, 71, 43, 71, 57, 57, 71, 71]
                }, {
                    filterEnvelope: "twang 3",
                    spectrum: [43, 29, 29, 43, 29, 29, 29, 57, 29, 29, 29, 57, 43, 43, 29, 29, 57, 43, 43, 43, 71, 43, 43, 71, 57, 71, 71, 71, 71, 71]
                }, {
                    filterEnvelope: "decay 3",
                    spectrum: [57, 57, 57, 43, 57, 57, 43, 43, 57, 43, 43, 43, 71, 57, 43, 57, 86, 71, 57, 86, 71, 57, 86, 100, 71, 86, 86, 86, 86, 86]
                }, {
                    filterEnvelope: "flare 1",
                    spectrum: [0, 0, 14, 14, 14, 14, 29, 29, 29, 43, 43, 43, 57, 57, 71, 71, 86, 86, 100, 100, 100, 100, 100, 100, 100, 100, 86, 57, 29, 0]
                }, {
                    filterEnvelope: "decay 2",
                    spectrum: [14, 14, 14, 14, 29, 14, 14, 29, 14, 43, 14, 43, 57, 86, 57, 57, 100, 57, 43, 43, 57, 100, 57, 43, 29, 14, 0, 0, 0, 0]
                }]
            }
        }, {
            name: "steel pan",
            midiProgram: 114,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "decay 2",
                vibrato: "none",
                algorithm: "1←(2 3←4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "~1×",
                    amplitude: 14,
                    envelope: "custom"
                }, {
                    frequency: "7×",
                    amplitude: 3,
                    envelope: "flare 1"
                }, {
                    frequency: "3×",
                    amplitude: 5,
                    envelope: "flare 2"
                }, {
                    frequency: "4×",
                    amplitude: 4,
                    envelope: "swell 2"
                }]
            }
        }, {
            name: "steel pan synth",
            midiProgram: 114,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "twang 1",
                vibrato: "none",
                algorithm: "1 2 3←4",
                feedbackType: "1⟲",
                feedbackAmplitude: 5,
                feedbackEnvelope: "flare 1",
                operators: [{
                    frequency: "~1×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "2×",
                    amplitude: 15,
                    envelope: "custom"
                }, {
                    frequency: "4×",
                    amplitude: 14,
                    envelope: "flare 1"
                }, {
                    frequency: "~1×",
                    amplitude: 3,
                    envelope: "flare 2"
                }]
            }
        }, {
            name: "timpani",
            midiProgram: 47,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "twang 2",
                spectrum: [100, 0, 0, 0, 86, 0, 0, 71, 0, 14, 43, 14, 43, 43, 0, 29, 43, 29, 29, 29, 43, 29, 43, 29, 43, 43, 43, 43, 43, 43]
            }
        }, {
            name: "dark strike",
            midiProgram: 47,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 29,
                filterEnvelope: "twang 2",
                spectrum: [0, 0, 0, 0, 14, 14, 14, 29, 29, 43, 43, 86, 43, 43, 43, 29, 86, 29, 29, 29, 86, 29, 14, 14, 14, 14, 0, 0, 0, 0]
            }
        }, {
            name: "woodblock",
            midiProgram: 115,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -2.5,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                spectrum: [0, 14, 29, 43, 43, 57, 86, 86, 71, 57, 57, 43, 43, 57, 86, 86, 43, 43, 71, 57, 57, 57, 57, 57, 86, 86, 71, 71, 71, 71]
            }
        }, {
            name: "taiko drum",
            midiProgram: 116,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -.5,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 29,
                filterEnvelope: "twang 1",
                spectrum: [71, 100, 100, 43, 43, 71, 71, 43, 43, 43, 43, 43, 43, 57, 29, 57, 43, 57, 43, 43, 57, 43, 43, 43, 43, 43, 43, 43, 43, 43]
            }
        }, {
            name: "melodic drum",
            midiProgram: 117,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -1.5,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 43,
                filterEnvelope: "twang 1",
                spectrum: [100, 71, 71, 57, 57, 43, 43, 71, 43, 43, 43, 57, 43, 43, 57, 43, 43, 43, 43, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
            }
        }, {
            name: "drum synth",
            midiProgram: 118,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -2,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 43,
                filterEnvelope: "decay 1",
                spectrum: [100, 86, 71, 57, 43, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
            }
        }, {
            name: "tom-tom",
            midiProgram: 116,
            isNoise: !0,
            midiSubharmonicOctaves: -1,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "twang 1",
                spectrum: [100, 29, 14, 0, 0, 86, 14, 43, 29, 86, 29, 14, 29, 57, 43, 43, 43, 43, 57, 43, 43, 43, 29, 57, 43, 43, 43, 43, 43, 43]
            }
        }, {
            name: "metal pipe",
            midiProgram: 117,
            isNoise: !0,
            midiSubharmonicOctaves: -1.5,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 8e3,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                spectrum: [29, 43, 86, 43, 43, 43, 43, 43, 100, 29, 14, 14, 100, 14, 14, 0, 0, 0, 0, 0, 14, 29, 29, 14, 0, 0, 14, 29, 0, 0]
            }
        }])
    }, {
        name: "Novelty Presets",
        presets: t.toNameMap([{
            name: "guitar fret noise",
            midiProgram: 120,
            generalMidi: !0,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard",
                chord: "harmony",
                filterCutoffHz: 8e3,
                filterResonance: 86,
                filterEnvelope: "flare 1",
                spectrum: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 29, 14, 0, 0, 43, 0, 43, 0, 71, 43, 0, 57, 0]
            }
        }, {
            name: "fifth saw lead",
            midiProgram: 86,
            generalMidi: !0,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "chip",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 57,
                filterEnvelope: "twang 3",
                wave: "sawtooth",
                interval: "fifth",
                vibrato: "none"
            }
        }, {
            name: "fifth swell",
            midiProgram: 86,
            midiSubharmonicOctaves: 1,
            settings: {
                type: "chip",
                effects: "chorus & reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 57,
                filterEnvelope: "swell 3",
                wave: "sawtooth",
                interval: "fifth",
                vibrato: "none"
            }
        }, {
            name: "soundtrack",
            midiProgram: 97,
            generalMidi: !0,
            settings: {
                type: "chip",
                effects: "chorus & reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "flare 3",
                wave: "sawtooth",
                interval: "fifth",
                vibrato: "none"
            }
        }, {
            name: "reverse cymbal",
            midiProgram: 119,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -3,
            settings: {
                type: "spectrum",
                effects: "none",
                transition: "soft",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "swell 3",
                spectrum: [29, 57, 57, 29, 57, 57, 29, 29, 43, 29, 29, 43, 29, 29, 57, 57, 14, 57, 14, 57, 71, 71, 57, 86, 57, 100, 86, 86, 86, 86]
            }
        }, {
            name: "seashore",
            midiProgram: 122,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -3,
            settings: {
                type: "spectrum",
                transition: "soft fade",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "swell 3",
                spectrum: [14, 14, 29, 29, 43, 43, 43, 57, 57, 57, 57, 57, 57, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 57]
            }
        }, {
            name: "bird tweet",
            midiProgram: 123,
            generalMidi: !0,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "soft",
                chord: "strum",
                filterCutoffHz: 2828,
                filterResonance: 0,
                filterEnvelope: "decay 1",
                interval: "hum",
                vibrato: "heavy",
                harmonics: [0, 0, 14, 100, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "telephone ring",
            midiProgram: 124,
            generalMidi: !0,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "hard",
                chord: "arpeggio",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "tremolo4",
                vibrato: "none",
                algorithm: "1←(2 3 4)",
                feedbackType: "1⟲",
                feedbackAmplitude: 2,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "2×",
                    amplitude: 12,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 4,
                    envelope: "tremolo1"
                }, {
                    frequency: "20×",
                    amplitude: 1,
                    envelope: "steady"
                }, {
                    frequency: "1×",
                    amplitude: 0,
                    envelope: "steady"
                }]
            }
        }, {
            name: "helicopter",
            midiProgram: 125,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -.5,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "seamless",
                chord: "arpeggio",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "tremolo4",
                spectrum: [14, 43, 43, 57, 57, 57, 71, 71, 71, 71, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 71, 71, 71, 71, 71, 71, 71, 57, 57]
            }
        }, {
            name: "applause",
            midiProgram: 126,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -3,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "soft fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "swell 3",
                spectrum: [14, 14, 29, 29, 29, 43, 43, 57, 71, 71, 86, 86, 86, 71, 71, 57, 57, 57, 71, 86, 86, 86, 86, 86, 71, 71, 57, 57, 57, 57]
            }
        }, {
            name: "gunshot",
            midiProgram: 127,
            generalMidi: !0,
            isNoise: !0,
            midiSubharmonicOctaves: -2,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "strum",
                filterCutoffHz: 1414,
                filterResonance: 29,
                filterEnvelope: "twang 1",
                spectrum: [14, 29, 43, 43, 57, 57, 57, 71, 71, 71, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 86, 71, 71, 71, 71, 57, 57, 57, 57, 43]
            }
        }, {
            name: "scoot",
            midiProgram: 92,
            settings: {
                type: "chip",
                transition: "hard",
                effects: "reverb",
                chord: "harmony",
                filterCutoffHz: 707,
                filterResonance: 86,
                filterEnvelope: "flare 1",
                wave: "sawtooth",
                interval: "shimmer",
                vibrato: "none"
            }
        }, {
            name: "buzz saw",
            midiProgram: 30,
            settings: {
                type: "FM",
                effects: "reverb",
                transition: "soft",
                chord: "custom interval",
                filterCutoffHz: 2e3,
                filterResonance: 0,
                filterEnvelope: "steady",
                vibrato: "none",
                algorithm: "1←2←3←4",
                feedbackType: "1⟲",
                feedbackAmplitude: 0,
                feedbackEnvelope: "steady",
                operators: [{
                    frequency: "5×",
                    amplitude: 13,
                    envelope: "custom"
                }, {
                    frequency: "1×",
                    amplitude: 10,
                    envelope: "steady"
                }, {
                    frequency: "~1×",
                    amplitude: 6,
                    envelope: "steady"
                }, {
                    frequency: "11×",
                    amplitude: 12,
                    envelope: "steady"
                }]
            }
        }, {
            name: "mosquito",
            midiProgram: 93,
            settings: {
                type: "PWM",
                effects: "reverb",
                transition: "cross fade",
                chord: "harmony",
                filterCutoffHz: 2828,
                filterResonance: 57,
                filterEnvelope: "steady",
                pulseWidth: 4,
                pulseEnvelope: "tremolo6",
                vibrato: "shaky"
            }
        }, {
            name: "breathing",
            midiProgram: 126,
            isNoise: !0,
            midiSubharmonicOctaves: -1,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "hard fade",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 14,
                filterEnvelope: "swell 2",
                spectrum: [14, 14, 14, 29, 29, 29, 29, 29, 43, 29, 29, 43, 43, 43, 29, 29, 71, 43, 86, 86, 57, 100, 86, 86, 86, 86, 71, 86, 71, 57]
            }
        }, {
            name: "klaxon synth",
            midiProgram: 125,
            isNoise: !0,
            midiSubharmonicOctaves: -1,
            settings: {
                type: "noise",
                effects: "reverb",
                transition: "slide",
                chord: "harmony",
                filterCutoffHz: 2e3,
                filterResonance: 86,
                filterEnvelope: "steady",
                wave: "buzz"
            }
        }, {
            name: "theremin",
            midiProgram: 40,
            settings: {
                type: "harmonics",
                effects: "reverb",
                transition: "slide",
                chord: "harmony",
                filterCutoffHz: 4e3,
                filterResonance: 14,
                filterEnvelope: "steady",
                interval: "union",
                vibrato: "heavy",
                harmonics: [100, 71, 57, 43, 29, 29, 14, 14, 14, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }, {
            name: "sonar ping",
            midiProgram: 121,
            settings: {
                type: "spectrum",
                effects: "reverb",
                transition: "medium fade",
                chord: "harmony",
                filterCutoffHz: 1414,
                filterResonance: 14,
                filterEnvelope: "twang 2",
                spectrum: [100, 43, 29, 29, 14, 14, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        }])
    }]), t.EditorConfig = e
}(beepbox || (beepbox = {})),
function(t) {
    const e = {
        class: !0,
        classList: !0,
        className: !0
    };

    function i(t, s) {
        for (const n of s)
            if (Array.isArray(n)) i(t, n);
            else if (n instanceof Node) t.appendChild(n);
        else if (n && n.constructor === Object)
            for (const i of Object.keys(n)) {
                const s = n[i];
                if (e[i])
                    if ("classList" === i) {
                        const e = Array.isArray(s) ? s : s.split(" ");
                        for (const i of e) t.classList.add(i)
                    } else t.setAttribute("class", Array.isArray(s) ? s.join(" ") : s);
                else if ("style" === i)
                    if (s && s.constructor === Object)
                        for (const e of Object.keys(s)) e.startsWith("--") ? t.style.setProperty(e, s[e]) : t.style.hasOwnProperty(e) ? t.style[e] = s[e] : console.log("Unrecognized style property name: " + e);
                    else t.setAttribute(i, s);
                else "function" == typeof s ? t[i] = s : "boolean" == typeof s ? s ? t.setAttribute(i, "") : t.removeAttribute(i) : t.setAttribute(i, s)
            } else t.appendChild(document.createTextNode(n));
        return t
    }
    const s = "http://www.w3.org/2000/svg";
    t.HTML = function() {}, t.HTML.element = function(t, ...e) {
        return i(document.createElement(t), e)
    }, t.SVG = function() {}, t.SVG.element = function(t, ...e) {
        return i(document.createElementNS(s, t), e)
    };
    for (const e of "a abbr address area article aside audio b base bdi bdo blockquote br button canvas caption cite code col colgroup datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hr i iframe img input ins kbd label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td template textarea tfoot th thead time title tr track u ul var video wbr".split(" ")) t.HTML[e] = function(...t) {
        return i(document.createElement(e), t)
    };
    for (const e of "a altGlyph altGlyphDef altGlyphItem animate animateMotion animateTransform circle clipPath color-profile cursor defs desc discard ellipse feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feDropShadow feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feImage feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence filter font font-face font-face-format font-face-name font-face-src font-face-uri foreignObject g glyph glyphRef hkern image line linearGradient marker mask metadata missing-glyph mpath path pattern polygon polyline radialGradient rect script set stop style svg switch symbol text textPath title tref tspan use view vkern".split(" ")) t.SVG[e] = function(...t) {
        return i(document.createElementNS(s, e), t)
    };
    t.prettyNumber = function(t) {
        return t.toFixed(2).replace(/\.?0*$/, "")
    }
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        static resetColors() {
            this.colorLookup.clear()
        }
        static getComputedChannelColor(t, i) {
            if ("false" == getComputedStyle(this.t).getPropertyValue("--use-color-formula").trim()) {
                let n = e.getChannelColor(t, i);
                var s = /\(([^)]+)\)/;
                return {
                    secondaryChannel: e.getComputed(s.exec(n.secondaryChannel)[1]),
                    primaryChannel: e.getComputed(s.exec(n.primaryChannel)[1]),
                    secondaryNote: e.getComputed(s.exec(n.secondaryNote)[1]),
                    primaryNote: e.getComputed(s.exec(n.primaryNote)[1])
                }
            }
            return e.getChannelColor(t, i)
        }
        static getChannelColor(i, s) {
            if ("false" == getComputedStyle(this.t).getPropertyValue("--use-color-formula").trim()) return s < i.pitchChannelCount ? e.pitchChannels[s % e.pitchChannels.length] : s < i.pitchChannelCount + i.noiseChannelCount ? e.noiseChannels[(s - i.pitchChannelCount) % e.noiseChannels.length] : e.modChannels[(s - i.pitchChannelCount - i.noiseChannelCount) % e.modChannels.length];
            if (e.colorLookup.has(s)) return e.colorLookup.get(s);
            if (s < i.pitchChannelCount) {
                const i = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-hue"),
                    n = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-hue-scale"),
                    o = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-sat"),
                    r = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-sat-scale"),
                    h = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-lum"),
                    a = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-channel-lum-scale"),
                    l = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-hue"),
                    c = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-hue-scale"),
                    d = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-sat"),
                    m = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-sat-scale"),
                    f = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-lum"),
                    u = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-channel-lum-scale"),
                    p = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-hue"),
                    y = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-hue-scale"),
                    b = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-sat"),
                    g = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-sat-scale"),
                    v = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-lum"),
                    w = +getComputedStyle(this.t).getPropertyValue("--pitch-secondary-note-lum-scale"),
                    k = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-hue"),
                    x = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-hue-scale"),
                    M = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-sat"),
                    E = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-sat-scale"),
                    C = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-lum"),
                    S = +getComputedStyle(this.t).getPropertyValue("--pitch-primary-note-lum-scale");
                let q = {
                    secondaryChannel: "hsl(" + (+i + s * +n / t.Config.pitchChannelCountMax * 256) % 256 + "," + +o * (1 - +r * Math.floor(s / 7)) + "%," + +h * (1 - +a * Math.floor(s / 7)) + "%)",
                    primaryChannel: "hsl(" + (+l + s * +c / t.Config.pitchChannelCountMax * 256) % 256 + "," + +d * (1 - +m * Math.floor(s / 7)) + "%," + +f * (1 - +u * Math.floor(s / 7)) + "%)",
                    secondaryNote: "hsl(" + (+p + s * +y / t.Config.pitchChannelCountMax * 256) % 256 + "," + +b * (1 - +g * Math.floor(s / 7)) + "%," + +v * (1 - +w * Math.floor(s / 7)) + "%)",
                    primaryNote: "hsl(" + (+k + s * +x / t.Config.pitchChannelCountMax * 256) % 256 + "," + +M * (1 - +E * Math.floor(s / 7)) + "%," + +C * (1 - +S * Math.floor(s / 7)) + "%)"
                };
                return e.colorLookup.set(s, q), q
            }
            if (s < i.pitchChannelCount + i.noiseChannelCount) {
                const n = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-hue"),
                    o = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-hue-scale"),
                    r = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-sat"),
                    h = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-sat-scale"),
                    a = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-lum"),
                    l = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-channel-lum-scale"),
                    c = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-hue"),
                    d = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-hue-scale"),
                    m = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-sat"),
                    f = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-sat-scale"),
                    u = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-lum"),
                    p = +getComputedStyle(this.t).getPropertyValue("--noise-primary-channel-lum-scale"),
                    y = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-hue"),
                    b = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-hue-scale"),
                    g = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-sat"),
                    v = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-sat-scale"),
                    w = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-lum"),
                    k = +getComputedStyle(this.t).getPropertyValue("--noise-secondary-note-lum-scale"),
                    x = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-hue"),
                    M = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-hue-scale"),
                    E = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-sat"),
                    C = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-sat-scale"),
                    S = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-lum"),
                    q = +getComputedStyle(this.t).getPropertyValue("--noise-primary-note-lum-scale");
                let P = {
                    secondaryChannel: "hsl(" + (+n + (s - i.pitchChannelCount) * +o / t.Config.noiseChannelCountMax * 256) % 256 + "," + (+r + s * +h) + "%," + (+a + s * +l) + "%)",
                    primaryChannel: "hsl(" + (+c + (s - i.pitchChannelCount) * +d / t.Config.noiseChannelCountMax * 256) % 256 + "," + (+m + s * +f) + "%," + (+u + s * +p) + "%)",
                    secondaryNote: "hsl(" + (+y + (s - i.pitchChannelCount) * +b / t.Config.noiseChannelCountMax * 256) % 256 + "," + (+g + s * +v) + "%," + (+w + s * +k) + "%)",
                    primaryNote: "hsl(" + (+x + (s - i.pitchChannelCount) * +M / t.Config.noiseChannelCountMax * 256) % 256 + "," + (+E + s * +C) + "%," + (+S + s * +q) + "%)"
                };
                return e.colorLookup.set(s, P), P
            } {
                const n = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-hue"),
                    o = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-hue-scale"),
                    r = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-sat"),
                    h = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-sat-scale"),
                    a = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-lum"),
                    l = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-channel-lum-scale"),
                    c = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-hue"),
                    d = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-hue-scale"),
                    m = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-sat"),
                    f = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-sat-scale"),
                    u = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-lum"),
                    p = +getComputedStyle(this.t).getPropertyValue("--mod-primary-channel-lum-scale"),
                    y = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-hue"),
                    b = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-hue-scale"),
                    g = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-sat"),
                    v = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-sat-scale"),
                    w = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-lum"),
                    k = +getComputedStyle(this.t).getPropertyValue("--mod-secondary-note-lum-scale"),
                    x = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-hue"),
                    M = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-hue-scale"),
                    E = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-sat"),
                    C = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-sat-scale"),
                    S = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-lum"),
                    q = +getComputedStyle(this.t).getPropertyValue("--mod-primary-note-lum-scale");
                let P = {
                    secondaryChannel: "hsl(" + (+n + (s - i.pitchChannelCount - i.noiseChannelCount) * +o / t.Config.modChannelCountMax * 256) % 256 + "," + (+r + s * +h) + "%," + (+a + s * +l) + "%)",
                    primaryChannel: "hsl(" + (+c + (s - i.pitchChannelCount - i.noiseChannelCount) * +d / t.Config.modChannelCountMax * 256) % 256 + "," + (+m + s * +f) + "%," + (+u + s * +p) + "%)",
                    secondaryNote: "hsl(" + (+y + (s - i.pitchChannelCount - i.noiseChannelCount) * +b / t.Config.modChannelCountMax * 256) % 256 + "," + (+g + s * +v) + "%," + (+w + s * +k) + "%)",
                    primaryNote: "hsl(" + (+x + (s - i.pitchChannelCount - i.noiseChannelCount) * +M / t.Config.modChannelCountMax * 256) % 256 + "," + (+E + s * +C) + "%," + (+S + s * +q) + "%)"
                };
                return e.colorLookup.set(s, P), P
            }
        }
        static setTheme(t) {
            this.t.textContent = this.themes[t];
            const e = document.querySelector("meta[name='theme-color']");
            null != e && e.setAttribute("content", getComputedStyle(document.documentElement).getPropertyValue("--ui-widget-background")), this.resetColors()
        }
        static getComputed(t) {
            return getComputedStyle(this.t).getPropertyValue(t)
        }
    }
    e.colorLookup = new Map, e.themes = {
		"blu default": `
				:root {
					--page-margin: #040410;
					--editor-background: #040410;
					--hover-preview: white;
					--playhead: white;
					--primary-text: white;
					--secondary-text: #84859a;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: #044b94;
					--loop-accent: #74f;
					--link-accent: #024ACA;
					--ui-widget-background: #393e4f;
					--ui-widget-focus: #6d6886;
					--pitch-background: #393e4f;
					--tonic: #725491;
					--fifth-note: #54547a;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
					--use-color-formula: false;
					--track-editor-bg-pitch: #393e4f;
					--track-editor-bg-pitch-dim: #1c1d28;
					--track-editor-bg-noise: #3d3535;
					--track-editor-bg-noise-dim: #161313;
					--track-editor-bg-mod: #283560;
					--track-editor-bg-mod-dim: #0a101f;
					--multiplicative-mod-slider: #606c9f;
					--overwriting-mod-slider: #6850b5;
					--indicator-primary: #9c64f7;
					--indicator-secondary: #393e4f;
					--select2-opt-group: #5d576f;
					--input-box-outline: #222;
					--mute-button-normal: #886eae;
					--mute-button-mod: #9a6bff;
					--pitch1-secondary-channel: #0A89FF;
					--pitch1-primary-channel:   #024ACA;
					--pitch1-secondary-note:    #0A89FF;
					--pitch1-primary-note:      #024ACA;
					--pitch2-secondary-channel: #0A89FF;
					--pitch2-primary-channel:   #024ACA;
					--pitch2-secondary-note:    #0A89FF;
					--pitch2-primary-note:      #024ACA;
					--pitch3-secondary-channel: #0A89FF;
					--pitch3-primary-channel:   #024ACA;
					--pitch3-secondary-note:    #0A89FF;
					--pitch3-primary-note:      #024ACA;
					--pitch4-secondary-channel: #0A89FF;
					--pitch4-primary-channel:   #024ACA;
					--pitch4-secondary-note:    #0A89FF;
					--pitch4-primary-note:      #024ACA;
					--pitch5-secondary-channel: #0A89FF;
					--pitch5-primary-channel:   #024ACA;
					--pitch5-secondary-note:    #0A89FF;
					--pitch5-primary-note:      #024ACA;
					--pitch6-secondary-channel: #0A89FF;
					--pitch6-primary-channel:   #024ACA;
					--pitch6-secondary-note:    #0A89FF;
					--pitch6-primary-note:      #024ACA;
					--pitch7-secondary-channel: #0A89FF;
					--pitch7-primary-channel:   #024ACA;
					--pitch7-secondary-note:	  #0A89FF;
					--pitch7-primary-note:			#024ACA;
					--pitch8-secondary-channel: #0A89FF;
					--pitch8-primary-channel:   #024ACA;
					--pitch8-secondary-note:    #0A89FF;
					--pitch8-primary-note:      #024ACA;
					--pitch9-secondary-channel: #0A89FF;
					--pitch9-primary-channel:   #024ACA;
					--pitch9-secondary-note:    #0A89FF;
					--pitch9-primary-note:			#024ACA;
					--pitch10-secondary-channel:#0A89FF;
					--pitch10-primary-channel:  #024ACA;
					--pitch10-secondary-note:   #0A89FF;
					--pitch10-primary-note:     #024ACA;
					--noise1-secondary-channel: #0A89FF;
					--noise1-primary-channel:   #024ACA;
					--noise1-secondary-note:    #0A89FF;
					--noise1-primary-note:      #024ACA;
					--noise2-secondary-channel: #0A89FF;
					--noise2-primary-channel:   #024ACA;
					--noise2-secondary-note:    #0A89FF;
					--noise2-primary-note:      #024ACA;
					--noise3-secondary-channel: #0A89FF;
					--noise3-primary-channel:   #024ACA;
					--noise3-secondary-note:    #0A89FF;
					--noise3-primary-note:      #024ACA;
					--noise4-secondary-channel: #0A89FF;
					--noise4-primary-channel:   #024ACA;
					--noise4-secondary-note:    #0A89FF;
					--noise4-primary-note:      #024ACA;
		--mod1-secondary-channel:   #0A89FF;
					--mod1-primary-channel:     #024ACA;
					--mod1-secondary-note:      #0A89FF;
					--mod1-primary-note:        #024ACA;
					--mod2-secondary-channel:   #0A89FF;
					--mod2-primary-channel:     #024ACA;
					--mod2-secondary-note:      #0A89FF;
					--mod2-primary-note:        #024ACA;
					--mod3-secondary-channel:   #0A89FF;
					--mod3-primary-channel:     #024ACA;
					--mod3-secondary-note:      #0A89FF;
					--mod3-primary-note:			  #024ACA;
					--mod4-secondary-channel:   #0A89FF;
					--mod4-primary-channel:     #024ACA;
					--mod4-secondary-note:      #0A89FF;
					--mod4-primary-note:        #024ACA;
					--mod-label-primary:        #282840;
					--mod-label-secondary-text: rgb(87, 86, 120);
					--mod-label-primary-text:   white;

				}
			`,
        "dark classic": `
				:root {
					--page-margin: black;
					--editor-background: black;
					--hover-preview: white;
					--playhead: white;
					--primary-text: white;
					--secondary-text: #999;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: rgba(255,255,255,0.2);
					--loop-accent: #74f;
					--link-accent: #98f;
					--ui-widget-background: #444;
					--ui-widget-focus: #777;
					--pitch-background: #444;
					--tonic: #864;
					--fifth-note: #468;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #333;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #333;
					--track-editor-bg-mod: #234;
					--track-editor-bg-mod-dim: #123;
					--multiplicative-mod-slider: #456;
					--overwriting-mod-slider: #654;
					--indicator-primary: #74f;
					--indicator-secondary: #444;
					--select2-opt-group: #585858;
					--input-box-outline: #333;
					--mute-button-normal: #ffa033;
					--mute-button-mod: #9a6bff;
					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #00bdc7;
					--pitch1-primary-note:      #92f9ff;
					--pitch2-secondary-channel: #a1a100;
					--pitch2-primary-channel:   #ffff25;
					--pitch2-secondary-note:    #c7c700;
					--pitch2-primary-note:      #ffff92;
					--pitch3-secondary-channel: #c75000;
					--pitch3-primary-channel:   #ff9752;
					--pitch3-secondary-note:    #ff771c;
					--pitch3-primary-note:      #ffcdab;
					--pitch4-secondary-channel: #00a100;
					--pitch4-primary-channel:   #50ff50;
					--pitch4-secondary-note:    #00c700;
					--pitch4-primary-note:      #a0ffa0;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #ff90ff;
					--pitch5-secondary-note:    #e040e0;
					--pitch5-primary-note:      #ffc0ff;
					--pitch6-secondary-channel: #7777b0;
					--pitch6-primary-channel:   #a0a0ff;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #8AA100;
					--pitch7-primary-channel:   #DEFF25;
					--pitch7-secondary-note:	  #AAC700;
					--pitch7-primary-note:			#E6FF92;
					--pitch8-secondary-channel: #DF0019;
					--pitch8-primary-channel:   #FF98A4;
					--pitch8-secondary-note:    #FF4E63;
					--pitch8-primary-note:      #FFB2BB;
					--pitch9-secondary-channel: #00A170;
					--pitch9-primary-channel:   #50FFC9;
					--pitch9-secondary-note:    #00C78A;
					--pitch9-primary-note:			#83FFD9;
					--pitch10-secondary-channel:#A11FFF;
					--pitch10-primary-channel:  #CE8BFF;
					--pitch10-secondary-note:   #B757FF;
					--pitch10-primary-note:     #DFACFF;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6B3E8E;
					--noise4-primary-channel:   #AF82D2;
					--noise4-secondary-note:    #9E71C1;
					--noise4-primary-note:      #D4C1EA;
		--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77fc55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #cdffee;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ffb8de;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:			  #f8ddff;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #fff6d3;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;

				}
			`,
        "dark competition": `
				:root {
					--page-margin: black;
					--editor-background: black;
					--hover-preview: #ddd;
					--playhead: #ddd;
					--primary-text: #ddd;
					--secondary-text: #8e695b;
					--inverted-text: black;
					--text-selection: rgba(169,0,255,0.99);
					--box-selection-fill: rgba(221,221,221,0.2);
					--loop-accent: #bf15ba;
					--link-accent: #f888ff;
					--ui-widget-background: #443a3a;
					--ui-widget-focus: #777;
					--pitch-background: #353333;
					--tonic: #884a44;
					--fifth-note: #415498;
					--white-piano-key: #bbb;
					--black-piano-key: #444;
					--use-color-formula: false;
					--track-editor-bg-pitch: #444;
					--track-editor-bg-pitch-dim: #333;
					--track-editor-bg-noise: #444;
					--track-editor-bg-noise-dim: #333;
					--track-editor-bg-mod: #234;
					--track-editor-bg-mod-dim: #123;
					--multiplicative-mod-slider: #456;
					--overwriting-mod-slider: #654;
					--indicator-primary: #74f;
					--indicator-secondary: #444;
					--select2-opt-group: #585858;
					--input-box-outline: #333;
					--mute-button-normal: #ffa033;
					--mute-button-mod: #9a6bff;
					--pitch1-secondary-channel: #0099a1;
					--pitch1-primary-channel:   #25f3ff;
					--pitch1-secondary-note:    #00bdc7;
					--pitch1-primary-note:      #92f9ff;
					--pitch2-secondary-channel: #a1a100;
					--pitch2-primary-channel:   #ffff25;
					--pitch2-secondary-note:    #c7c700;
					--pitch2-primary-note:      #ffff92;
					--pitch3-secondary-channel: #c75000;
					--pitch3-primary-channel:   #ff9752;
					--pitch3-secondary-note:    #ff771c;
					--pitch3-primary-note:      #ffcdab;
					--pitch4-secondary-channel: #00a100;
					--pitch4-primary-channel:   #50ff50;
					--pitch4-secondary-note:    #00c700;
					--pitch4-primary-note:      #a0ffa0;
					--pitch5-secondary-channel: #d020d0;
					--pitch5-primary-channel:   #ff90ff;
					--pitch5-secondary-note:    #e040e0;
					--pitch5-primary-note:      #ffc0ff;
					--pitch6-secondary-channel: #7777b0;
					--pitch6-primary-channel:   #a0a0ff;
					--pitch6-secondary-note:    #8888d0;
					--pitch6-primary-note:      #d0d0ff;
					--pitch7-secondary-channel: #8AA100;
					--pitch7-primary-channel:   #DEFF25;
					--pitch7-secondary-note:	  #AAC700;
					--pitch7-primary-note:			#E6FF92;
					--pitch8-secondary-channel: #DF0019;
					--pitch8-primary-channel:   #FF98A4;
					--pitch8-secondary-note:    #FF4E63;
					--pitch8-primary-note:      #FFB2BB;
					--pitch9-secondary-channel: #00A170;
					--pitch9-primary-channel:   #50FFC9;
					--pitch9-secondary-note:    #00C78A;
					--pitch9-primary-note:			#83FFD9;
					--pitch10-secondary-channel:#A11FFF;
					--pitch10-primary-channel:  #CE8BFF;
					--pitch10-secondary-note:   #B757FF;
					--pitch10-primary-note:     #DFACFF;
					--noise1-secondary-channel: #6f6f6f;
					--noise1-primary-channel:   #aaaaaa;
					--noise1-secondary-note:    #a7a7a7;
					--noise1-primary-note:      #e0e0e0;
					--noise2-secondary-channel: #996633;
					--noise2-primary-channel:   #ddaa77;
					--noise2-secondary-note:    #cc9966;
					--noise2-primary-note:      #f0d0bb;
					--noise3-secondary-channel: #4a6d8f;
					--noise3-primary-channel:   #77aadd;
					--noise3-secondary-note:    #6f9fcf;
					--noise3-primary-note:      #bbd7ff;
					--noise4-secondary-channel: #6B3E8E;
					--noise4-primary-channel:   #AF82D2;
					--noise4-secondary-note:    #9E71C1;
					--noise4-primary-note:      #D4C1EA;
                    --mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77fc55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #cdffee;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ffb8de;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:			  #f8ddff;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #fff6d3;
					--mod-label-primary:        #999;
					--mod-label-secondary-text: #333;
					--mod-label-primary-text:   black;

				}
			`,
        "light classic": `
				:root {
					-webkit-text-stroke-width: 0.5px;
					--page-margin: #685d88;
					--editor-background: white;
					--hover-preview: black;
					--playhead: rgba(0,0,0,0.5);
					--primary-text: black;
					--secondary-text: #777;
					--inverted-text: white;
					--text-selection: rgba(200,170,255,0.99);
					--box-selection-fill: rgba(0,0,0,0.1);
					--loop-accent: #98f;
					--link-accent: #74f;
					--ui-widget-background: #ececec;
					--ui-widget-focus: #eee;
					--pitch-background: #ececec;
					--tonic: #f0d6b6;
					--fifth-note: #bbddf0;
					--white-piano-key: #eee;
					--black-piano-key: #666;
					--use-color-formula: false;
					--track-editor-bg-pitch: #ececec;
					--track-editor-bg-pitch-dim: #fdfdfd;
					--track-editor-bg-noise: #ececec;
					--track-editor-bg-noise-dim: #fdfdfd;
					--track-editor-bg-mod: #dbecfd;
					--track-editor-bg-mod-dim: #ecfdff;
					--multiplicative-mod-slider: #789;
					--overwriting-mod-slider: #987;
					--indicator-primary: #98f;
					--indicator-secondary: #cde;
					--select2-opt-group: #cecece;
					--input-box-outline: #ddd;
					--mute-button-normal: #c0b47f;
					--mute-button-mod: #bd7fc0;
					--pitch1-secondary-channel: #6CD9ED;
					--pitch1-primary-channel:   #00A0BD;
					--pitch1-secondary-note:    #34C2DC;
					--pitch1-primary-note:      #00758A;
					--pitch2-secondary-channel: #E3C941;
					--pitch2-primary-channel:   #B49700;
					--pitch2-secondary-note:    #D1B628;
					--pitch2-primary-note:      #836E00;
					--pitch3-secondary-channel: #FF9D61;
					--pitch3-primary-channel:   #E14E00;
					--pitch3-secondary-note:    #F67D3C;
					--pitch3-primary-note:      #B64000;
					--pitch4-secondary-channel: #4BE24B;
					--pitch4-primary-channel:   #00A800;
					--pitch4-secondary-note:    #2DC82D;
					--pitch4-primary-note:      #008000;
					--pitch5-secondary-channel: #FF90FF;
					--pitch5-primary-channel:   #E12EDF;
					--pitch5-secondary-note:    #EC6EEC;
					--pitch5-primary-note:      #A600A5;
					--pitch6-secondary-channel: #B5B5FE;
					--pitch6-primary-channel:   #6969FD;
					--pitch6-secondary-note:    #9393FE;
					--pitch6-primary-note:      #4A4AD7;
					--pitch7-secondary-channel: #CBE24B;
					--pitch7-primary-channel:   #8EA800;
					--pitch7-secondary-note:    #B0C82D;
					--pitch7-primary-note:      #6C8000;
					--pitch8-secondary-channel: #FF90A4;
					--pitch8-primary-channel:   #E12E4D;
					--pitch8-secondary-note:    #EC6E85;
					--pitch8-primary-note:      #A6001D;
					--pitch9-secondary-channel: #41E3B5;
					--pitch9-primary-channel:   #00B481;
					--pitch9-secondary-note:    #28D1A1;
					--pitch9-primary-note:      #00835E;
					--pitch10-secondary-channel:#CA77FF;
					--pitch10-primary-channel:  #9609FF;
					--pitch10-secondary-note:   #B54FFF;
					--pitch10-primary-note:     #8400E3;
					--noise1-secondary-channel: #C1C1C1;
					--noise1-primary-channel:   #898989;
					--noise1-secondary-note:    #ADADAD;
					--noise1-primary-note:      #6C6C6C;
					--noise2-secondary-channel: #E8BB8C;
					--noise2-primary-channel:   #BD7D3A;
					--noise2-secondary-note:    #D1A374;
					--noise2-primary-note:      #836342;
					--noise3-secondary-channel: #9BC4EB;
					--noise3-primary-channel:   #4481BE;
					--noise3-secondary-note:    #7CA7D3;
					--noise3-primary-note:      #476685;
					--noise4-secondary-channel: #C5A5E0;
					--noise4-primary-channel:   #8553AE;
					--noise4-secondary-note:    #AB87C8;
					--noise4-primary-note:      #684F7D;
					--mod1-secondary-channel:   #339955;
					--mod1-primary-channel:     #77dd55;
					--mod1-secondary-note:      #77ff8a;
					--mod1-primary-note:        #2ad84a;
					--mod2-secondary-channel:   #993355;
					--mod2-primary-channel:     #f04960;
					--mod2-secondary-note:      #f057a0;
					--mod2-primary-note:        #ba124a;
					--mod3-secondary-channel:   #553399;
					--mod3-primary-channel:     #8855fc;
					--mod3-secondary-note:      #aa64ff;
					--mod3-primary-note:        #7a1caa;
					--mod4-secondary-channel:   #a86436;
					--mod4-primary-channel:     #c8a825;
					--mod4-secondary-note:      #e8ba46;
					--mod4-primary-note:        #a86810;
					--mod-label-primary:        #dddddd;
					--mod-label-secondary-text: #777;
					--mod-label-primary-text:   black;
				}
				
				.beepboxEditor button, .beepboxEditor select {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
            `,
        "jummbox classic": `
				:root {
					--page-margin: #040410;
					--editor-background: #040410;
					--hover-preview: white;
					--playhead: rgba(255, 255, 255, 0.9);
					--primary-text: white;
					--secondary-text: #84859a;
					--inverted-text: black;
					--text-selection: rgba(119,68,255,0.99);
					--box-selection-fill: #044b94;
					--loop-accent: #74f;
					--link-accent: #98f;
					--ui-widget-background: #393e4f;
					--ui-widget-focus: #6d6886;
					--pitch-background: #393e4f;
					--tonic: #725491;
					--fifth-note: #54547a;
					--white-piano-key: #eee;
					--black-piano-key: #666;
					--use-color-formula: true;
					--track-editor-bg-pitch: #393e4f;
					--track-editor-bg-pitch-dim: #1c1d28;
					--track-editor-bg-noise: #3d3535;
					--track-editor-bg-noise-dim: #161313;
					--track-editor-bg-mod: #283560;
					--track-editor-bg-mod-dim: #0a101f;
					--multiplicative-mod-slider: #606c9f;
					--overwriting-mod-slider: #6850b5;
					--indicator-primary: #9c64f7;
					--indicator-secondary: #393e4f;
					--select2-opt-group: #5d576f;
					--input-box-outline: #222;
					--mute-button-normal: #dda85d;
					--mute-button-mod: #886eae;
					--mod-label-primary: #282840;
					--mod-label-secondary-text: rgb(87, 86, 120);
					--mod-label-primary-text: white;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 6.1;
					--pitch-secondary-channel-sat: 83.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 6.1;
					--pitch-primary-channel-sat: 100;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 6.1;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 25;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 6.1;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 0;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 0;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 0;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 0;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 192;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 192;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 192;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 55;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 192;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
				}
			`,
        "forest": `
				:root {
					--page-margin: #010c03;
					--editor-background: #010c03;
					--hover-preview: #efe;
					--playhead: rgba(232, 255, 232, 0.9);
					--secondary-text: #70A070;
					--inverted-text: #280228;
					--text-selection: rgba(255,68,199,0.99);
					--box-selection-fill: #267aa3;
					--loop-accent: #ffe845;
					--link-accent: #9f8;
					--ui-widget-background: #203829;
					--ui-widget-focus: #487860;
					--pitch-background: #203829;
					--tonic: #2b8d20;
					--fifth-note: #385840;
					--white-piano-key: #bda;
					--black-piano-key: #573;
					--use-color-formula: true;
					--track-editor-bg-pitch: #254820;
					--track-editor-bg-pitch-dim: #102819;
					--track-editor-bg-noise: #304050;
					--track-editor-bg-noise-dim: #102030;
					--track-editor-bg-mod: #506030;
					--track-editor-bg-mod-dim: #2a300a;
					--multiplicative-mod-slider: #205c8f;
					--overwriting-mod-slider: #20ac6f;
					--indicator-primary: #dcd866;
					--indicator-secondary: #203829;
					--select2-opt-group: #1a6f5a;
					--input-box-outline: #242;
					--mute-button-normal: #49e980;
					--mute-button-mod: #c2e502;
					--mod-label-primary: #133613;
					--mod-label-secondary-text: rgb(27, 126, 40);
					--mod-label-primary-text: #efe;
					--pitch-secondary-channel-hue: 120;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 59;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 50;
					--pitch-secondary-channel-lum-scale: 0.04;
					--pitch-primary-channel-hue: 120;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 86;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 70;
					--pitch-primary-channel-lum-scale: 0.04;
					--pitch-secondary-note-hue: 120;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 85;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 30;
					--pitch-secondary-note-lum-scale: 0.04;
					--pitch-primary-note-hue: 120;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 90;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 80;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 200;
					--noise-secondary-channel-hue-scale: 1.1;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 22;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 200;
					--noise-primary-channel-hue-scale: 1.1;
					--noise-primary-channel-sat: 48;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 65;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 200;
					--noise-secondary-note-hue-scale: 1.1;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 33;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 200;
					--noise-primary-note-hue-scale: 1.1;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 64;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 40;
					--mod-secondary-channel-hue-scale: 1.8;
					--mod-secondary-channel-sat: 44;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 40;
					--mod-primary-channel-hue-scale: 1.8;
					--mod-primary-channel-sat: 60;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 40;
					--mod-secondary-note-hue-scale: 1.8;
					--mod-secondary-note-sat: 62;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 55;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 40;
					--mod-primary-note-hue-scale: 1.8;
					--mod-primary-note-sat: 66;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 85;
					--mod-primary-note-lum-scale: 0;
				}
			`,
        "canyon": `
				:root {
					--page-margin: #0a0000;
					--editor-background: #0a0000;
					--hover-preview: white;
					--playhead: rgba(247, 172, 196, 0.9);
					--primary-text: #f5d6bf;
					--secondary-text: #934050;
					--inverted-text: #290505;
					--text-selection: rgba(255, 208, 68, 0.99);
					--box-selection-fill: #94044870;
					--loop-accent: #ff1e1e;
					--link-accent: #da7b76;
					--ui-widget-background: #533137;
					--ui-widget-focus: #743e4b;
					--pitch-background: #4f3939;
					--tonic: #9e4145;
					--fifth-note: #5b3e6b;
					--white-piano-key: #d89898;
					--black-piano-key: #572b29;
					--use-color-formula: true;
					--track-editor-bg-pitch: #5e3a41;
					--track-editor-bg-pitch-dim: #281d1c;
					--track-editor-bg-noise: #3a3551;
					--track-editor-bg-noise-dim: #272732;
					--track-editor-bg-mod: #552045;
					--track-editor-bg-mod-dim: #3e1442;
					--multiplicative-mod-slider: #9f6095;
					--overwriting-mod-slider: #b55050;
					--indicator-primary: #f2f764;
					--indicator-secondary: #4f3939;
					--select2-opt-group: #673030;
					--input-box-outline: #443131;
					--mute-button-normal: #d81833;
					--mute-button-mod: #9e2691;
					--mod-label-primary: #5f2b39;
					--mod-label-secondary-text: rgb(158, 66, 122);
					--mod-label-primary-text: #e6caed;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 11.8;
					--pitch-secondary-channel-sat: 73.3;
					--pitch-secondary-channel-sat-scale: 0.1;
					--pitch-secondary-channel-lum: 40;
					--pitch-secondary-channel-lum-scale: 0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 11.8;
					--pitch-primary-channel-sat: 90;
					--pitch-primary-channel-sat-scale: 0.1;
					--pitch-primary-channel-lum: 67.5;
					--pitch-primary-channel-lum-scale: 0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 11.8;
					--pitch-secondary-note-sat: 83.9;
					--pitch-secondary-note-sat-scale: 0.1;
					--pitch-secondary-note-lum: 35;
					--pitch-secondary-note-lum-scale: 0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 11.8;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 85.6;
					--pitch-primary-note-lum-scale: 0.025;
					--noise-secondary-channel-hue: 60;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 42;
					--noise-secondary-channel-lum-scale: 0;
					--noise-primary-channel-hue: 60;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 33;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 63.5;
					--noise-primary-channel-lum-scale: 0;
					--noise-secondary-note-hue: 60;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 33.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 55;
					--noise-secondary-note-lum-scale: 0;
					--noise-primary-note-hue: 60;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 46.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 74;
					--noise-primary-note-lum-scale: 0;
					--mod-secondary-channel-hue: 222;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 50;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 222;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 96;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 80;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 222;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 54;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 222;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 75;
					--mod-primary-note-lum-scale: 0;
				}
			`,
        "jummbox light": `
				:root {
					-webkit-text-stroke-width: 0.5px;
					--page-margin: #fefdff;
					--editor-background: #fefdff;
					--hover-preview: #302880;
					--playhead: rgba(62, 32, 120, 0.9);
					--primary-text: #401890;
					--secondary-text: #8769af;
					--inverted-text: #fefdff;
					--text-selection: rgba(255,160,235,0.99);
					--box-selection-fill: rgba(30,62,220,0.5);
					--loop-accent: #4c35d4;
					--link-accent: #7af;
					--ui-widget-background: #bf9cec;
					--ui-widget-focus: #e9c4ff;
					--pitch-background: #e2d9f9;
					--tonic: #c288cc;
					--fifth-note: #d8c9fd;
					--white-piano-key: #e2e2ff;
					--black-piano-key: #66667a;
					--use-color-formula: true;
					--track-editor-bg-pitch: #d9e5ec;
					--track-editor-bg-pitch-dim: #eaeef5;
					--track-editor-bg-noise: #ffc3ae;
					--track-editor-bg-noise-dim: #ffe0cf;
					--track-editor-bg-mod: #c9accc;
					--track-editor-bg-mod-dim: #ebe3ef;
					--multiplicative-mod-slider: #807caf;
					--overwriting-mod-slider: #909cdf;
					--indicator-primary: #ae38ff;
					--indicator-secondary: #bbd4ec;
					--select2-opt-group: #c1b7f1;
					--input-box-outline: #bbb;
					--mute-button-normal: #e9b752;
					--mute-button-mod: #9558ee;
					--mod-label-primary: #ececff;
					--mod-label-secondary-text: rgb(197, 145, 247);
					--mod-label-primary-text: #302880;
					--pitch-secondary-channel-hue: 0;
					--pitch-secondary-channel-hue-scale: 8.1;
					--pitch-secondary-channel-sat: 53.3;
					--pitch-secondary-channel-sat-scale: -0.1;
					--pitch-secondary-channel-lum: 72;
					--pitch-secondary-channel-lum-scale: -0.05;
					--pitch-primary-channel-hue: 0;
					--pitch-primary-channel-hue-scale: 8.1;
					--pitch-primary-channel-sat: 97;
					--pitch-primary-channel-sat-scale: -0.1;
					--pitch-primary-channel-lum: 45.5;
					--pitch-primary-channel-lum-scale: -0.05;
					--pitch-secondary-note-hue: 0;
					--pitch-secondary-note-hue-scale: 8.1;
					--pitch-secondary-note-sat: 93.9;
					--pitch-secondary-note-sat-scale: -0.1;
					--pitch-secondary-note-lum: 95;
					--pitch-secondary-note-lum-scale: -0.05;
					--pitch-primary-note-hue: 0;
					--pitch-primary-note-hue-scale: 8.1;
					--pitch-primary-note-sat: 100;
					--pitch-primary-note-sat-scale: 0.05;
					--pitch-primary-note-lum: 43.6;
					--pitch-primary-note-lum-scale: -0.025;
					--noise-secondary-channel-hue: 220;
					--noise-secondary-channel-hue-scale: 2;
					--noise-secondary-channel-sat: 25;
					--noise-secondary-channel-sat-scale: 0;
					--noise-secondary-channel-lum: 62;
					--noise-secondary-channel-lum-scale: -0.1;
					--noise-primary-channel-hue: 220;
					--noise-primary-channel-hue-scale: 2;
					--noise-primary-channel-sat: 53;
					--noise-primary-channel-sat-scale: 0;
					--noise-primary-channel-lum: 53.5;
					--noise-primary-channel-lum-scale: -0.1;
					--noise-secondary-note-hue: 220;
					--noise-secondary-note-hue-scale: 2;
					--noise-secondary-note-sat: 58.5;
					--noise-secondary-note-sat-scale: 0;
					--noise-secondary-note-lum: 85;
					--noise-secondary-note-lum-scale: -1;
					--noise-primary-note-hue: 220;
					--noise-primary-note-hue-scale: 2;
					--noise-primary-note-sat: 56.5;
					--noise-primary-note-sat-scale: 0;
					--noise-primary-note-lum: 54;
					--noise-primary-note-lum-scale: -1;
					--mod-secondary-channel-hue: 90;
					--mod-secondary-channel-hue-scale: 1.5;
					--mod-secondary-channel-sat: 88;
					--mod-secondary-channel-sat-scale: 0;
					--mod-secondary-channel-lum: 60;
					--mod-secondary-channel-lum-scale: 0;
					--mod-primary-channel-hue: 90;
					--mod-primary-channel-hue-scale: 1.5;
					--mod-primary-channel-sat: 100;
					--mod-primary-channel-sat-scale: 0;
					--mod-primary-channel-lum: 65;
					--mod-primary-channel-lum-scale: 0;
					--mod-secondary-note-hue: 90;
					--mod-secondary-note-hue-scale: 1.5;
					--mod-secondary-note-sat: 92;
					--mod-secondary-note-sat-scale: 0;
					--mod-secondary-note-lum: 95;
					--mod-secondary-note-lum-scale: 0;
					--mod-primary-note-hue: 90;
					--mod-primary-note-hue-scale: 1.5;
					--mod-primary-note-sat: 96;
					--mod-primary-note-sat-scale: 0;
					--mod-primary-note-lum: 55;
					--mod-primary-note-lum-scale: 0;
				}

				.beepboxEditor button, .beepboxEditor select {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}

				.select2-selection__rendered {
					box-shadow: inset 0 0 0 1px var(--secondary-text);
				}
			`,
    }, e.pageMargin = "var(--page-margin)", e.editorBackground = "var(--editor-background)", e.hoverPreview = "var(--hover-preview)", e.playhead = "var(--playhead)", e.primaryText = "var(--primary-text)", e.secondaryText = "var(--secondary-text)", e.invertedText = "var(--inverted-text)", e.textSelection = "var(--text-selection)", e.boxSelectionFill = "var(--box-selection-fill)", e.loopAccent = "var(--loop-accent)", e.linkAccent = "var(--link-accent)", e.uiWidgetBackground = "var(--ui-widget-background)", e.uiWidgetFocus = "var(--ui-widget-focus)", e.pitchBackground = "var(--pitch-background)", e.tonic = "var(--tonic)", e.fifthNote = "var(--fifth-note)", e.whitePianoKey = "var(--white-piano-key)", e.blackPianoKey = "var(--black-piano-key)", e.useColorFormula = "var(--use-color-formula)", e.pitchSecondaryChannelHue = "var(--pitch-secondary-channel-hue)", e.pitchSecondaryChannelHueScale = "var(--pitch-secondary-channel-hue-scale)", e.pitchSecondaryChannelSat = "var(--pitch-secondary-channel-sat)", e.pitchSecondaryChannelSatScale = "var(--pitch-secondary-channel-sat-scale)", e.pitchSecondaryChannelLum = "var(--pitch-secondary-channel-lum)", e.pitchSecondaryChannelLumScale = "var(--pitch-secondary-channel-lum-scale)", e.pitchPrimaryChannelHue = "var(--pitch-primary-channel-hue)", e.pitchPrimaryChannelHueScale = "var(--pitch-primary-channel-hue-scale)", e.pitchPrimaryChannelSat = "var(--pitch-primary-channel-sat)", e.pitchPrimaryChannelSatScale = "var(--pitch-primary-channel-sat-scale)", e.pitchPrimaryChannelLum = "var(--pitch-primary-channel-lum)", e.pitchPrimaryChannelLumScale = "var(--pitch-primary-channel-lum-scale)", e.pitchSecondaryNoteHue = "var(--pitch-secondary-note-hue)", e.pitchSecondaryNoteHueScale = "var(--pitch-secondary-note-hue-scale)", e.pitchSecondaryNoteSat = "var(--pitch-secondary-note-sat)", e.pitchSecondaryNoteSatScale = "var(--pitch-secondary-note-sat-scale)", e.pitchSecondaryNoteLum = "var(--pitch-secondary-note-lum)", e.pitchSecondaryNoteLumScale = "var(--pitch-secondary-note-lum-scale)", e.pitchPrimaryNoteHue = "var(--pitch-primary-note-hue)", e.pitchPrimaryNoteHueScale = "var(--pitch-primary-note-hue-scale)", e.pitchPrimaryNoteSat = "var(--pitch-primary-note-sat)", e.pitchPrimaryNoteSatScale = "var(--pitch-primary-note-sat-scale)", e.pitchPrimaryNoteLum = "var(--pitch-primary-note-lum)", e.pitchPrimaryNoteLumScale = "var(--pitch-primary-note-lum-scale)", e.modSecondaryChannelHue = "var(--mod-secondary-channel-hue)", e.modSecondaryChannelHueScale = "var(--mod-secondary-channel-hue-scale)", e.modSecondaryChannelSat = "var(--mod-secondary-channel-sat)", e.modSecondaryChannelSatScale = "var(--mod-secondary-channel-sat-scale)", e.modSecondaryChannelLum = "var(--mod-secondary-channel-lum)", e.modSecondaryChannelLumScale = "var(--mod-secondary-channel-lum-scale)", e.modPrimaryChannelHue = "var(--mod-primary-channel-hue)", e.modPrimaryChannelHueScale = "var(--mod-primary-channel-hue-scale)", e.modPrimaryChannelSat = "var(--mod-primary-channel-sat)", e.modPrimaryChannelSatScale = "var(--mod-primary-channel-sat-scale)", e.modPrimaryChannelLum = "var(--mod-primary-channel-lum)", e.modPrimaryChannelLumScale = "var(--mod-primary-channel-lum-scale)", e.modSecondaryNoteHue = "var(--mod-secondary-note-hue)", e.modSecondaryNoteHueScale = "var(--mod-secondary-note-hue-scale)", e.modSecondaryNoteSat = "var(--mod-secondary-note-sat)", e.modSecondaryNoteSatScale = "var(--mod-secondary-note-sat-scale)", e.modSecondaryNoteLum = "var(--mod-secondary-note-lum)", e.modSecondaryNoteLumScale = "var(--mod-secondary-note-lum-scale)", e.modPrimaryNoteHue = "var(--mod-primary-note-hue)", e.modPrimaryNoteHueScale = "var(--mod-primary-note-hue-scale)", e.modPrimaryNoteSat = "var(--mod-primary-note-sat)", e.modPrimaryNoteSatScale = "var(--mod-primary-note-sat-scale)", e.modPrimaryNoteLum = "var(--mod-primary-note-lum)", e.modPrimaryNoteLumScale = "var(--mod-primary-note-lum-scale)", e.noiseSecondaryChannelHue = "var(--noise-secondary-channel-hue)", e.noiseSecondaryChannelHueScale = "var(--noise-secondary-channel-hue-scale)", e.noiseSecondaryChannelSat = "var(--noise-secondary-channel-sat)", e.noiseSecondaryChannelSatScale = "var(--noise-secondary-channel-sat-scale)", e.noiseSecondaryChannelLum = "var(--noise-secondary-channel-lum)", e.noiseSecondaryChannelLumScale = "var(--noise-secondary-channel-lum-scale)", e.noisePrimaryChannelHue = "var(--noise-primary-channel-hue)", e.noisePrimaryChannelHueScale = "var(--noise-primary-channel-hue-scale)", e.noisePrimaryChannelSat = "var(--noise-primary-channel-sat)", e.noisePrimaryChannelSatScale = "var(--noise-primary-channel-sat-scale)", e.noisePrimaryChannelLum = "var(--noise-primary-channel-lum)", e.noisePrimaryChannelLumScale = "var(--noise-primary-channel-lum-scale)", e.noiseSecondaryNoteHue = "var(--noise-secondary-note-hue)", e.noiseSecondaryNoteHueScale = "var(--noise-secondary-note-hue-scale)", e.noiseSecondaryNoteSat = "var(--noise-secondary-note-sat)", e.noiseSecondaryNoteSatScale = "var(--noise-secondary-note-sat-scale)", e.noiseSecondaryNoteLum = "var(--noise-secondary-note-lum)", e.noiseSecondaryNoteLumScale = "var(--noise-secondary-note-lum-scale)", e.noisePrimaryNoteHue = "var(--noise-primary-note-hue)", e.noisePrimaryNoteHueScale = "var(--noise-primary-note-hue-scale)", e.noisePrimaryNoteSat = "var(--noise-primary-note-sat)", e.noisePrimaryNoteSatScale = "var(--noise-primary-note-sat-scale)", e.noisePrimaryNoteLum = "var(--noise-primary-note-lum)", e.noisePrimaryNoteLumScale = "var(--noise-primary-note-lum-scale)", e.trackEditorBgPitch = "var(--track-editor-bg-pitch)", e.trackEditorBgPitchDim = "var(--track-editor-bg-pitch-dim)", e.trackEditorBgNoise = "var(--track-editor-bg-noise)", e.trackEditorBgNoiseDim = "var(--track-editor-bg-noise-dim)", e.trackEditorBgMod = "var(--track-editor-bg-mod)", e.trackEditorBgModDim = "var(--track-editor-bg-mod-dim)", e.multiplicativeModSlider = "var(--multiplicative-mod-slider)", e.overwritingModSlider = "var(--overwriting-mod-slider)", e.indicatorPrimary = "var(--indicator-primary)", e.indicatorSecondary = "var(--indicator-secondary)", e.select2OptGroup = "var(--select2-opt-group)", e.inputBoxOutline = "var(--input-box-outline)", e.muteButtonNormal = "var(--mute-button-normal)", e.muteButtonMod = "var(--mute-button-mod)", e.modLabelPrimary = "var(--mod-label-primary)", e.modLabelSecondaryText = "var(--mod-label-secondary-text)", e.modLabelPrimaryText = "var(--mod-label-primary-text)", e.pitchChannels = t.toNameMap([{
        name: "pitch1",
        secondaryChannel: "var(--pitch1-secondary-channel)",
        primaryChannel: "var(--pitch1-primary-channel)",
        secondaryNote: "var(--pitch1-secondary-note)",
        primaryNote: "var(--pitch1-primary-note)"
    }, {
        name: "pitch2",
        secondaryChannel: "var(--pitch2-secondary-channel)",
        primaryChannel: "var(--pitch2-primary-channel)",
        secondaryNote: "var(--pitch2-secondary-note)",
        primaryNote: "var(--pitch2-primary-note)"
    }, {
        name: "pitch3",
        secondaryChannel: "var(--pitch3-secondary-channel)",
        primaryChannel: "var(--pitch3-primary-channel)",
        secondaryNote: "var(--pitch3-secondary-note)",
        primaryNote: "var(--pitch3-primary-note)"
    }, {
        name: "pitch4",
        secondaryChannel: "var(--pitch4-secondary-channel)",
        primaryChannel: "var(--pitch4-primary-channel)",
        secondaryNote: "var(--pitch4-secondary-note)",
        primaryNote: "var(--pitch4-primary-note)"
    }, {
        name: "pitch5",
        secondaryChannel: "var(--pitch5-secondary-channel)",
        primaryChannel: "var(--pitch5-primary-channel)",
        secondaryNote: "var(--pitch5-secondary-note)",
        primaryNote: "var(--pitch5-primary-note)"
    }, {
        name: "pitch6",
        secondaryChannel: "var(--pitch6-secondary-channel)",
        primaryChannel: "var(--pitch6-primary-channel)",
        secondaryNote: "var(--pitch6-secondary-note)",
        primaryNote: "var(--pitch6-primary-note)"
    }, {
        name: "pitch7",
        secondaryChannel: "var(--pitch7-secondary-channel)",
        primaryChannel: "var(--pitch7-primary-channel)",
        secondaryNote: "var(--pitch7-secondary-note)",
        primaryNote: "var(--pitch7-primary-note)"
    }, {
        name: "pitch8",
        secondaryChannel: "var(--pitch8-secondary-channel)",
        primaryChannel: "var(--pitch8-primary-channel)",
        secondaryNote: "var(--pitch8-secondary-note)",
        primaryNote: "var(--pitch8-primary-note)"
    }, {
        name: "pitch9",
        secondaryChannel: "var(--pitch9-secondary-channel)",
        primaryChannel: "var(--pitch9-primary-channel)",
        secondaryNote: "var(--pitch9-secondary-note)",
        primaryNote: "var(--pitch9-primary-note)"
    }, {
        name: "pitch10",
        secondaryChannel: "var(--pitch10-secondary-channel)",
        primaryChannel: "var(--pitch10-primary-channel)",
        secondaryNote: "var(--pitch10-secondary-note)",
        primaryNote: "var(--pitch10-primary-note)"
    }]), e.noiseChannels = t.toNameMap([{
        name: "noise1",
        secondaryChannel: "var(--noise1-secondary-channel)",
        primaryChannel: "var(--noise1-primary-channel)",
        secondaryNote: "var(--noise1-secondary-note)",
        primaryNote: "var(--noise1-primary-note)"
    }, {
        name: "noise2",
        secondaryChannel: "var(--noise2-secondary-channel)",
        primaryChannel: "var(--noise2-primary-channel)",
        secondaryNote: "var(--noise2-secondary-note)",
        primaryNote: "var(--noise2-primary-note)"
    }, {
        name: "noise3",
        secondaryChannel: "var(--noise3-secondary-channel)",
        primaryChannel: "var(--noise3-primary-channel)",
        secondaryNote: "var(--noise3-secondary-note)",
        primaryNote: "var(--noise3-primary-note)"
    }, {
        name: "noise4",
        secondaryChannel: "var(--noise4-secondary-channel)",
        primaryChannel: "var(--noise4-primary-channel)",
        secondaryNote: "var(--noise4-secondary-note)",
        primaryNote: "var(--noise4-primary-note)"
    }]), e.modChannels = t.toNameMap([{
        name: "mod1",
        secondaryChannel: "var(--mod1-secondary-channel)",
        primaryChannel: "var(--mod1-primary-channel)",
        secondaryNote: "var(--mod1-secondary-note)",
        primaryNote: "var(--mod1-primary-note)"
    }, {
        name: "mod2",
        secondaryChannel: "var(--mod2-secondary-channel)",
        primaryChannel: "var(--mod2-primary-channel)",
        secondaryNote: "var(--mod2-secondary-note)",
        primaryNote: "var(--mod2-primary-note)"
    }, {
        name: "mod3",
        secondaryChannel: "var(--mod3-secondary-channel)",
        primaryChannel: "var(--mod3-primary-channel)",
        secondaryNote: "var(--mod3-secondary-note)",
        primaryNote: "var(--mod3-primary-note)"
    }, {
        name: "mod4",
        secondaryChannel: "var(--mod4-secondary-channel)",
        primaryChannel: "var(--mod4-primary-channel)",
        secondaryNote: "var(--mod4-secondary-note)",
        primaryNote: "var(--mod4-primary-note)"
    }]), e.t = document.head.appendChild(t.HTML.style({
        type: "text/css"
    })), t.ColorConfig = e
}(beepbox || (beepbox = {})),
function(t) {
    const e = document.body.appendChild(t.HTML.div({
        style: "width:30px; height:30px; overflow: auto;"
    }, t.HTML.div({
        style: "width:100%;height:40px"
    })));
    e.firstChild.clientWidth < 30 && document.documentElement.classList.add("obtrusive-scrollbars"), document.body.removeChild(e), document.head.appendChild(t.HTML.style({
        type: "text/css"
    }, `\n\n/* Note: "#" symbols need to be encoded as "%23" in SVG data urls, otherwise they are interpreted as fragment identifiers! */\n:root {\n\t--play-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -4 -8 L -4 8 L 9 0 z" fill="gray"/></svg>');\n\t--pause-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="-4" y="-8" width="4" height="16" fill="gray"/><rect x="5" y="-8" width="4" height="16" fill="gray"/></svg>');\n\t--prev-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="-6" y="-6" width="2" height="12" fill="gray"/><path d="M 6 -6 L 6 6 L -3 0 z" fill="gray"/></svg>');\n\t--next-bar-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><rect x="4" y="-6" width="2" height="12" fill="gray"/><path d="M -6 -6 L -6 6 L 3 0 z" fill="gray"/></svg>');\n\t--volume-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z M 15 11 L 16 10 A 7.2 7.2 0 0 1 16 16 L 15 15 A 5.8 5.8 0 0 0 15 12 z M 18 8 L 19 7 A 11.5 11.5 0 0 1 19 19 L 18 18 A 10.1 10.1 0 0 0 18 8 z" fill="gray"/></svg>');\n\t--unmuted-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3 3 20 20"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z M 15 11 L 16 10 A 7.2 7.2 0 0 1 16 16 L 15 15 A 5.8 5.8 0 0 0 15 12 z M 18 8 L 19 7 A 11.5 11.5 0 0 1 19 19 L 18 18 A 10.1 10.1 0 0 0 18 8 z" fill="gray"/></svg>');\n\t--muted-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="3 3 20 20"><path d="M 4 16 L 4 10 L 8 10 L 13 5 L 13 21 L 8 16 z" fill="gray"/></svg>');\n\t--menu-down-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -4 -2 L 4 -2 L 0 3 z" fill="gray"/></svg>');\n\t--select-arrows-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M -4 -3 L 4 -3 L 0 -8 z M -4 3 L 4 3 L 0 8 z" fill="gray"/></svg>');\n\t--file-page-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -21 26 26"><path d="M 2 0 L 2 -16 L 10 -16 L 14 -12 L 14 0 z M 3 -1 L 13 -1 L 13 -11 L 9 -11 L 9 -15 L 3 -15 z" fill="gray"/></svg>');\n\t--edit-pencil-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-5 -21 26 26"><path d="M 0 0 L 1 -4 L 4 -1 z M 2 -5 L 10 -13 L 13 -10 L 5 -2 zM 11 -14 L 13 -16 L 14 -16 L 16 -14 L 16 -13 L 14 -11 z" fill="gray"/></svg>');\n\t--preferences-gear-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path d="M 5.78 -1.6 L 7.93 -0.94 L 7.93 0.94 L 5.78 1.6 L 4.85 3.53 L 5.68 5.61 L 4.21 6.78 L 2.36 5.52 L 0.27 5.99 L -0.85 7.94 L -2.68 7.52 L -2.84 5.28 L -4.52 3.95 L -6.73 4.28 L -7.55 2.59 L -5.9 1.07 L -5.9 -1.07 L -7.55 -2.59 L -6.73 -4.28 L -4.52 -3.95 L -2.84 -5.28 L -2.68 -7.52 L -0.85 -7.94 L 0.27 -5.99 L 2.36 -5.52 L 4.21 -6.78 L 5.68 -5.61 L 4.85 -3.53 M 2.92 0.67 L 2.92 -0.67 L 2.35 -1.87 L 1.3 -2.7 L 0 -3 L -1.3 -2.7 L -2.35 -1.87 L -2.92 -0.67 L -2.92 0.67 L -2.35 1.87 L -1.3 2.7 L -0 3 L 1.3 2.7 L 2.35 1.87 z" fill="gray"/></svg>');\n\t--customize-dial-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"> \t\t\t<g transform="translate(0,1)" fill="gray"> \t\t\t\t<circle cx="0" cy="0" r="6.5" stroke="gray" stroke-width="1" fill="none"/> \t\t\t\t<rect x="-1" y="-5" width="2" height="4" transform="rotate(30)"/> \t\t\t\t<circle cx="-7.79" cy="4.5" r="0.75"/> \t\t\t\t<circle cx="-9" cy="0" r="0.75"/> \t\t\t\t<circle cx="-7.79" cy="-4.5" r="0.75"/> \t\t\t\t<circle cx="-4.5" cy="-7.79" r="0.75"/> \t\t\t\t<circle cx="0" cy="-9" r="0.75"/> \t\t\t\t<circle cx="4.5" cy="-7.79" r="0.75"/> \t\t\t\t<circle cx="7.79" cy="-4.5" r="0.75"/> \t\t\t\t<circle cx="9" cy="0" r="0.75"/> \t\t\t\t<circle cx="7.79" cy="4.5" r="0.75"/> \t\t\t</g> \t\t</svg>');\n\t--export-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -8 3 L -8 8 L 8 8 L 8 3 L 6 3 L 6 6 L -6 6 L -6 3 z M 0 2 L -4 -2 L -1 -2 L -1 -8 L 1 -8 L 1 -2 L 4 -2 z"/></svg>');\n\t--close-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -8 -6 L -6 -8 L 0 -2  L 6 -8 L 8 -6 L 2 0 L 8 6 L 6 8 L 0 2 L -6 8 L -8 6 L -2 0 z"/></svg>');\n\t--checkmark-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="-13 -13 26 26"><path fill="gray" d="M -9 -2 L -8 -3 L -3 2 L 9 -8 L 10 -7 L -3 8 z"/></svg>');\n\t--drum-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40"> \t\t\t<defs> \t\t\t\t<linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="0%"> \t\t\t\t\t<stop offset="0%" stop-color="%237e3302"/> \t\t\t\t\t<stop offset="40%" stop-color="%23ffec6b"/> \t\t\t\t\t<stop offset="100%" stop-color="%237e3302"/> \t\t\t\t</linearGradient> \t\t\t\t<linearGradient id="gold2" x1="0%" y1="0%" x2="100%" y2="0%"> \t\t\t\t\t<stop offset="0%" stop-color="%23faaf7d"/> \t\t\t\t\t<stop offset="15%" stop-color="%23fffba9"/> \t\t\t\t\t<stop offset="40%" stop-color="%23ffffe3"/> \t\t\t\t\t<stop offset="65%" stop-color="%23fffba9"/> \t\t\t\t\t<stop offset="100%" stop-color="%23faaf7d"/> \t\t\t\t</linearGradient> \t\t\t\t<radialGradient id="gold3" cx="0%" cy="0%" r="100%"> \t\t\t\t\t<stop offset="0%" stop-color="%23ffffe3"/> \t\t\t\t\t<stop offset="50%" stop-color="%23ffec6b"/> \t\t\t\t\t<stop offset="100%" stop-color="%237e3302"/> \t\t\t\t</radialGradient> \t\t\t\t<linearGradient id="red" x1="0%" y1="0%" x2="100%" y2="0%"> \t\t\t\t\t<stop offset="0%" stop-color="%23641919"/> \t\t\t\t\t<stop offset="40%" stop-color="%23cd2c2c"/> \t\t\t\t\t<stop offset="100%" stop-color="%23641919"/> \t\t\t\t</linearGradient> \t\t\t\t<radialGradient id="membrane"> \t\t\t\t\t<stop offset="10%" stop-color="%23cccccc" /> \t\t\t\t\t<stop offset="90%" stop-color="%23f6f6f7" /> \t\t\t\t\t<stop offset="100%" stop-color="%23999" /> \t\t\t\t</radialGradient> \t\t\t</defs> \t\t\t<ellipse cx="16" cy="26" rx="16" ry="14" fill="rgba(0,0,0,0.5)"/> \t\t\t<ellipse cx="16" cy="25" rx="16" ry="14" fill="url(%23gold1)"/> \t\t\t<rect x="0" y="23" width="32" height="2" fill="url(%23gold1)"/> \t\t\t<ellipse cx="16" cy="23" rx="16" ry="14" fill="url(%23gold2)"/> \t\t\t<ellipse cx="16" cy="23" rx="15" ry="13" fill="url(%23red)"/> \t\t\t<rect x="1" y="17" width="30" height="6" fill="url(%23red)"/> \t\t\t<rect x="5" y="27" width="1" height="5" rx="0.5" fill="rgba(0,0,0,0.5)"/> \t\t\t<rect x="15" y="31" width="2" height="5" rx="1" fill="rgba(0,0,0,0.5)"/> \t\t\t<rect x="26" y="27" width="1" height="5" rx="0.5" fill="rgba(0,0,0,0.5)"/> \t\t\t<rect x="5" y="26" width="1" height="5" rx="0.5" fill="url(%23gold3)"/> \t\t\t<rect x="15" y="30" width="2" height="5" rx="1" fill="url(%23gold3)"/> \t\t\t<rect x="26" y="26" width="1" height="5" rx="0.5" fill="url(%23gold3)"/> \t\t\t<ellipse cx="16" cy="18" rx="15" ry="13" fill="rgba(0,0,0,0.5)"/> \t\t\t<ellipse cx="16" cy="16" rx="16" ry="14" fill="url(%23gold1)"/> \t\t\t<rect x="0" y="14" width="32" height="2" fill="url(%23gold1)"/> \t\t\t<ellipse cx="16" cy="14" rx="16" ry="14" fill="url(%23gold2)"/> \t\t\t<ellipse cx="16" cy="14" rx="15" ry="13" fill="url(%23membrane)"/> \t\t</svg>');\n\t--piano-key-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" preserveAspectRatio="none" viewBox="0 -1 32 15"> \t\t\t<defs> \t\t\t\t<linearGradient id="shadow" x1="0%" y1="0%" x2="100%" y2="0%"> \t\t\t\t\t<stop offset="0%" stop-color="rgba(0,0,0,0.5)"/> \t\t\t\t\t<stop offset="100%" stop-color="transparent"/> \t\t\t\t</linearGradient> \t\t\t</defs> \t\t\t<rect x="-1" y="1" width="31" height="1" rx="0.6" fill="rgba(255,255,255,0.4)"/> \t\t\t<path d="M -1 11 L 30 11 L 30 2 L 33 -1 L 33 14 L -1 14 z" fill="rgba(0,0,0,0.7)"/> \t\t\t<rect x="-1" y="-1" width="19" height="15" fill="url(%23shadow)"/> \t\t</svg>');\n  --mod-key-symbol: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="80" preserveAspectRatio="none" viewBox="0 -1 32 80"> \t\t\t<defs> \t\t\t\t<linearGradient id="shadow" x1="0%" y1="0%" x2="100%" y2="0%"> \t\t\t\t\t<stop offset="0%" stop-color="rgba(0,0,0,0.4)"/> \t\t\t\t\t<stop offset="100%" stop-color="transparent"/> \t\t\t\t</linearGradient> \t\t\t</defs> \t\t\t<rect x="-1" y="1" width="31" height="1" rx="0.6" fill="rgba(255,255,255,0.2)"/> \t\t\t<path d="M -1 76 L 30 76 L 30 1 L 33 -1 L 33 80 L -1 80 z" fill="rgba(0,0,0,0.7)"/> \t\t\t<rect x="-1" y="-1" width="19" height="80" fill="url(%23shadow)"/> \t\t</svg>');\n}\n\n\n.obtrusive-scrollbars, .obtrusive-scrollbars * {\n\tscrollbar-width: thin;\n\tscrollbar-color: ${t.ColorConfig.uiWidgetBackground} ${t.ColorConfig.editorBackground};\n}\n.obtrusive-scrollbars::-webkit-scrollbar, .obtrusive-scrollbars *::-webkit-scrollbar {\n\twidth: 12px;\n}\n.obtrusive-scrollbars::-webkit-scrollbar-track, .obtrusive-scrollbars *::-webkit-scrollbar-track {\n\tbackground: ${t.ColorConfig.editorBackground};\n}\n.obtrusive-scrollbars::-webkit-scrollbar-thumb, .obtrusive-scrollbars *::-webkit-scrollbar-thumb {\n\tbackground-color: ${t.ColorConfig.uiWidgetBackground};\n\tborder: 3px solid ${t.ColorConfig.editorBackground};\n}\n\n@-moz-document url-prefix() {\n\t.muteButtonText {\n\t\ttransform: translate(3px, 1px) !important;\n\t}\n}\n\n.beepboxEditor {\n\tdisplay: grid;\n    grid-template-columns: minmax(0, 1fr) max-content;\n    grid-template-rows: max-content 1fr; /* max-content minmax(0, 1fr); Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */\n    grid-template-areas: "pattern-area settings-area" "track-area settings-area";\n\tgrid-column-gap: 6px;\n\tgrid-row-gap: 6px;\n\tposition: relative;\n\ttouch-action: manipulation;\n\tcursor: default;\n\tfont-size: small;\n\toverflow: hidden;\n\tcolor: ${t.ColorConfig.primaryText};\n\tbackground: ${t.ColorConfig.editorBackground};\n    opacity: 0;\n    -webkit-transition: opacity 0.2s ease-in;\n    -moz-transition: opacity 0.2s ease-in;\n    -o-transition: opacity 0.2s ease-in;\n    -ms-transition: opacity 0.2s ease-in;\n    transition: opacity 0.2s ease-in;\n    transition-delay: 0s;\n}\n\n.pattern-area {\n     opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0s;\n}\n\n.settings-area {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0.15s;\n}\n\n.editor-song-settings {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0.35s;\n}\n\n.instrument-settings-area {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0.45s;\n}\n\n.trackAndMuteContainer {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0.4s;\n}\n\n.barScrollBar {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-in;\n    -moz-transition: opacity 0.5s ease-in;\n    -o-transition: opacity 0.5s ease-in;\n    -ms-transition: opacity 0.5s ease-in;\n    transition: opacity 0.5s ease-in;\n    transition-delay: 0.5s;\n}\n\n\n\n.load {\n    opacity: 1;\n}\n\n.beepboxEditor .noSelection {\n\t-webkit-touch-callout: none;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n}\n\n.beepboxEditor div {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.beepboxEditor .pattern-area {\n\tgrid-area: pattern-area;\n\theight: 481px;\n\tdisplay: flex;\n\tflex-direction: row;\n}\n\n.beepboxEditor .track-area {\n\tgrid-area: track-area;\n}\n\n.beepboxEditor .settings-area {\n\tgrid-area: settings-area;\n\tdisplay: grid;\n    grid-template-columns: auto;\n    grid-template-rows: min-content min-content min-content min-content min-content;\n    grid-template-areas: "version-area" "play-pause-area" "menu-area" "song-settings-area" "instrument-settings-area";\n\tgrid-column-gap: 6px;\n}\n\n.beepboxEditor .version-area{ grid-area: version-area; }\n.beepboxEditor .play-pause-area{ grid-area: play-pause-area; }\n.beepboxEditor .menu-area{ grid-area: menu-area; }\n.beepboxEditor .song-settings-area{ grid-area: song-settings-area; }\n.beepboxEditor .instrument-settings-area{ grid-area: instrument-settings-area; }\n\n.beepboxEditor .tip {\n\tcursor: help;\n}\n\n.beepboxEditor .tip:hover {\n\tcolor: ${t.ColorConfig.linkAccent};\n\ttext-decoration: underline;\n}\n.beepboxEditor .tip:active {\n\tcolor: ${t.ColorConfig.primaryText};\n}\n\n.beepboxEditor .volume-speaker {\n\tflex-shrink: 0;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: ${t.ColorConfig.secondaryText};\n\t-webkit-mask-image: var(--volume-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--volume-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .drum-button {\n\tflex: 1;\n\tbackground-color: transparent;\n\tbackground-image: var(--drum-symbol);\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n}\n\n.beepboxEditor .modulator-button {\n\tflex: 1;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n}\n.beepboxEditor .modulator-button::before {\n\tcontent: "";\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n\tbackground-image: var(--mod-key-symbol);\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: 100% 102%;\n}\n\n.beepboxEditor .piano-button {\n\tflex: 1;\n\tposition: relative;\n\tdisplay: flex;\n\talign-items: center;\n}\n.beepboxEditor .piano-button::before {\n\tcontent: "";\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tpointer-events: none;\n\tbackground-image: var(--piano-key-symbol);\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: 100% 115.38%;\n}\n.beepboxEditor .piano-button.disabled::after {\n\tcontent: "";\n\tposition: absolute;\n\tright: 0;\n\ttop: 0;\n\twidth: 70%;\n\theight: 100%;\n\tpointer-events: none;\n\tbackground: ${t.ColorConfig.editorBackground};\n\t-webkit-mask-image: linear-gradient(90deg, transparent 0%, gray 70%, gray 100%);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: linear-gradient(90deg, transparent 0%, gray 70%, gray 100%);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .customize-instrument {\n\tmargin: 2px 0;\n}\n.beepboxEditor .customize-instrument::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--customize-dial-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--customize-dial-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .menu.file::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--file-page-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--file-page-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .menu.edit::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--edit-pencil-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--edit-pencil-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .menu.preferences::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--preferences-gear-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--preferences-gear-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor .mute-button {\n\tbackground: transparent;\n\tborder: none;\n  padding-right: 0px;\n  padding-left: 0px;\n  box-shadow: none;\n}\n\n.beepboxEditor .mute-button:focus {\n  background: transparent;\n\tborder: none;\n}\n\n.beepboxEditor .mute-button::before {\n\tcontent: "";\n\tpointer-events: none;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: inline-block;\n  background: var(--mute-button-normal);\n\t-webkit-mask-image: var(--unmuted-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\t-webkit-mask-size: cover;\n  mask-repeat: no-repeat;\n\tmask-position: center;\n\tmask-size: cover;\n  mask-image: var(--unmuted-symbol);\n}\n\n.beepboxEditor .mute-button.muted::before {\n  background: var(--ui-widget-background);\n\t-webkit-mask-image: var(--muted-symbol);\n  mask-image: var(--muted-symbol);\n}\n\n.beepboxEditor .mute-button.modMute.muted::before {\n  background: var(--ui-widget-background);\n\t-webkit-mask-image: var(--muted-symbol);\n  mask-image: var(--muted-symbol);\n}\n\n.beepboxEditor .mute-button.modMute::before {\n  background: var(--mute-button-mod);\n}\n\n\n.beepboxEditor .promptContainer {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.beepboxEditor .promptContainer::before {\n\tcontent: "";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: ${t.ColorConfig.editorBackground};\n\topacity: 0.5;\n\tdisplay: flex;\n}\n\n.beepboxEditor .prompt {\n\tmargin: auto;\n\ttext-align: center;\n\tbackground: ${t.ColorConfig.editorBackground};\n\tborder-radius: 15px;\n\tborder: 4px solid ${t.ColorConfig.uiWidgetBackground};\n\tcolor: ${t.ColorConfig.primaryText};\n\tpadding: 20px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tbox-shadow: 5px 5px 20px 10px rgba(0,0,0,0.5);\n}\n\n.beepboxEditor .prompt > *:not(:first-child):not(.cancelButton) {\n\tmargin-top: 1.5em;\n}\n\n.beepboxEditor .prompt h2 {\n\tfont-size: 2em;\n\tmargin: 0 16px;\n\tfont-weight: normal;\n}\n\n.beepboxEditor .prompt p {\n\ttext-align: left;\n\tmargin: 1em 0;\n}\n\n.beepboxEditor .selectContainer {\n\tposition: relative;\n}\n.beepboxEditor .selectContainer:not(.menu)::after {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tright: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 1.1em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--select-arrows-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--select-arrows-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n.beepboxEditor .selectContainer.menu::after {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tright: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--menu-down-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--menu-down-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n.beepboxEditor select {\n\tmargin: 0;\n\tpadding: 0 0.3em;\n\tdisplay: block;\n\theight: 2em;\n\tborder: none;\n\tborder-radius: 0.4em;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n\tcolor: inherit;\n\tfont-size: inherit;\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\n\t-webkit-appearance:none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n\n.select2-container .select2-selection--single {\n  height: auto;\n}\n\n.select2-container {\n  width: -moz-available !important;\n  width: -webkit-fill-available !important;\n}\n\n.select2-container--default .select2-selection--single{\n  border-radius: 0px;\n  border: 0px;\n  background-color: transparent;\n  outline: none;\n}\n\n.select2-selection__rendered:not(.menu)::before {\n\tcontent: "";\n\tposition: absolute;\n\tright: 0.3em;\n\ttop: 0.4em;\n\tborder-bottom: 0.4em solid currentColor;\n\tborder-left: 0.3em solid transparent;\n\tborder-right: 0.3em solid transparent;\n\tpointer-events: none;\n}\n.select2-selection__rendered:not(.menu)::after {\n\tcontent: "";\n\tposition: absolute;\n\tright: 0.3em;\n\tbottom: 0.4em;\n\tborder-top: 0.4em solid currentColor;\n\tborder-left: 0.3em solid transparent;\n\tborder-right: 0.3em solid transparent;\n\tpointer-events: none;\n}\n.select2-selection__rendered {\n\tmargin: 0;\n\tpadding: 0 0.3em;\n\tdisplay: block;\n\theight: 2em;\n\tborder: none;\n\tborder-radius: 0.4em;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n\tcolor: inherit !important;\n\tfont-size: inherit;\n\tcursor: pointer;\n\tfont-family: inherit;\n\t-webkit-appearance:none;\n\t-moz-appearance: none;\n\tappearance: none;\n}\n.select2-selection__arrow b{\n    display:none !important;\n}\n\n.select2-selection__rendered--focus {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n\toutline: none;\n}\n.select2-search__field {\n    background: ${t.ColorConfig.uiWidgetBackground};\n    color: inherit !important;\n    font-size: small;\n    font-family: inherit;\n    border: 0px !important;\n    padding: 1px !important;\n}\n.select2-dropdown {\n    box-sizing: border-box;\n    display: inline-block;\n    margin: 0;\n    font-size: small;\n    position: relative;\n    vertical-align: middle;\n    background-color: ${t.ColorConfig.uiWidgetFocus};\n}\n\n.select2-container--default .select2-results>.select2-results__options {\n    max-height: 430px;\n    overflow-x: hidden;\n}\n.select2-container--default .select2-results__group {\n    cursor: default;\n    display: block;\n    padding: 1px;\n    background: ${t.ColorConfig.select2OptGroup};\n}\n.select2-results__option {\n    padding: 2px;\n    user-select: none;\n    -webkit-user-select: none;\n}\n.select2-container--default .select2-results__option .select2-results__option {\n    padding-left: 0.1em;\n}\n.select2-container--default .select2-results__option[aria-selected=true] {\n  background-color: transparent !important;\n}\n\n.beepboxEditor .menu select {\n\tpadding: 0 2em;\n}\n.beepboxEditor select:focus {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n\toutline: none;\n}\n.beepboxEditor .menu select {\n\ttext-align: center;\n\ttext-align-last: center;\n}\n.beepboxEditor .settings-area select {\n       width: 100%;\n}\n\n/* This makes it look better in firefox on my computer... What about others?\n@-moz-document url-prefix() {\n\t.beepboxEditor select { padding: 0 2px; }\n}\n*/\n.beepboxEditor button {\n\tmargin: 0;\n\tposition: relative;\n\theight: 2em;\n\tborder: none;\n\tborder-radius: 0.4em;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tfont-weight: inherit;\n\tcursor: pointer;\n}\n.beepboxEditor button:focus {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n\toutline: none;\n}\n\n.beepboxEditor button.cancelButton {\n\tfloat: right;\n\twidth: 2em;\n\tposition: absolute;\n\ttop: 8px;\n\tright: 8px;\n}\n\n.beepboxEditor button.playButton, .beepboxEditor button.pauseButton, .beepboxEditor button.okayButton, .beepboxEditor button.exportButton {\n\tpadding-left: 2em;\n}\n.beepboxEditor button.playButton::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--play-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--play-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n.beepboxEditor button.pauseButton::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 50%;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--pause-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--pause-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor button.prevBarButton::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin-left: -1em;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--prev-bar-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--prev-bar-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor button.nextBarButton::before {\n\tcontent: "";\n\tflex-shrink: 0;\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin-left: -1em;\n\tmargin-top: -1em;\n\tpointer-events: none;\n\twidth: 2em;\n\theight: 2em;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--next-bar-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--next-bar-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor button.cancelButton::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 2em;\n\theight: 2em;\n\tleft: 0;\n\ttop: 0;\n\tpointer-events: none;\n\tbackground: currentColor;\n\tmask-image: var(--close-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n\t-webkit-mask-image: var(--close-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n}\n\n.beepboxEditor button.okayButton::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 2em;\n\theight: 2em;\n\tleft: 0;\n\ttop: 0;\n\tpointer-events: none;\n\tbackground: currentColor;\n\t-webkit-mask-image: var(--checkmark-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n\tmask-image: var(--checkmark-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n}\n\n.beepboxEditor button.exportButton::before {\n\tcontent: "";\n\tposition: absolute;\n\twidth: 2em;\n\theight: 2em;\n\tleft: 0;\n\ttop: 0;\n\tpointer-events: none;\n\tbackground: currentColor;\n\tmask-image: var(--export-symbol);\n\tmask-repeat: no-repeat;\n\tmask-position: center;\n\t-webkit-mask-image: var(--export-symbol);\n\t-webkit-mask-repeat: no-repeat;\n\t-webkit-mask-position: center;\n}\n\n.beepboxEditor canvas {\n\toverflow: hidden;\n\tposition: absolute;\n\tdisplay: block;\n  cursor: crosshair;\n}\n\n@keyframes dash-animation {\n  to {\n    stroke-dashoffset: -100;\n  }\n}\n\n.beepboxEditor .dash-move {\n  animation: dash-animation 20s infinite linear;\n}\n\n.beepboxEditor .trackContainer {\n\toverflow-x: hidden;\n\tflex-grow: 1;\n}\n\n.beepboxEditor .trackAndMuteContainer {\n\tdisplay: flex;\n\talign-items: flex-start;\n}\n\n.beepboxEditor .muteEditor {\n\theight: 128px;\n\twidth: 32px;\n\tflex-shrink: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n}\n\n.beepboxEditor .selectRow {\n\tmargin: 2px 0;\n\theight: 2em;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.beepboxEditor .tip {\n\tcolor: ${t.ColorConfig.secondaryText};\n}\n\n.beepboxEditor .selectRow > :nth-child(2) {\n\twidth: 61.5%;\n}\n\n.beepboxEditor .operatorRow {\n\tmargin: 2px 0;\n\theight: 2em;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n}\n\n.beepboxEditor .operatorRow > * {\n\tflex-grow: 1;\n\tflex-shrink: 1;\n}\n\n.beepboxEditor .menu-area {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n.beepboxEditor .menu-area > * {\n\tmargin: 2px 0;\n}\n.beepboxEditor .menu-area > button {\n\tpadding: 0 2em;\n\twhite-space: nowrap;\n}\n\n.beepboxEditor .song-settings-area {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.beepboxEditor .editor-controls {\n\tflex-shrink: 0;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.beepboxEditor .instrument-settings-area {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.beepboxEditor .editor-right-side-top > *, .beepboxEditor .editor-right-side-bottom > * {\n\tflex-shrink: 0;\n}\n\n.beepboxEditor input[type=text], .beepboxEditor input[type=number] {\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tfont-family: inherit;\n\tbackground: transparent;\n\ttext-align: center;\n\tborder: 1px solid ${t.ColorConfig.inputBoxOutline};\n\tcolor: ${t.ColorConfig.primaryText};\n}\n\n.beepboxEditor input[type=text]::selection, .beepboxEditor input[type=number]::selection {\n\tbackground-color: ${t.ColorConfig.textSelection};\n\tcolor: ${t.ColorConfig.primaryText};\n}\n\n.beepboxEditor input[type=checkbox] {\n  transform: scale(1.5);\n}\n\n.beepboxEditor input[type=range] {\n\t-webkit-appearance: none;\n\tcolor: inherit;\n\twidth: 100%;\n\theight: 2em;\n\tfont-size: inherit;\n\tmargin: 0;\n\tcursor: pointer;\n\tbackground-color: ${t.ColorConfig.editorBackground};\n\ttouch-action: pan-y;\n  position: relative;\n}\n.beepboxEditor input[type=range]:focus {\n\toutline: none;\n}\n.beepboxEditor input[type=range]::-webkit-slider-runnable-track {\n\twidth: 100%;\n\theight: 0.5em;\n\tcursor: pointer;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n}\n\n.beepboxEditor span.midTick:after {\n    content: "";\n    display:inline-block;\n    position: absolute;\n    background: currentColor;\n    width: 2%;\n    left: 49%;\n    height: 0.5em;\n    top: 32%;\n    z-index: 1;\n\t\tpointer-events: none;\n}\n.beepboxEditor span.modSlider {\n\t--mod-position: 20%;\n\t--mod-color: ${t.ColorConfig.overwritingModSlider};\n  --mod-border-radius: 0%;\n}\n.beepboxEditor span.modSlider:before {\n\tcontent: "";\n    display:inline-block;\n    position: absolute;\n    background: var(--mod-color);\n    width: 4%;\n    left: var(--mod-position);\n    height: 0.8em;\n    top: 28%;\n    z-index: 2;\n\t\ttransform: translate(-50%, 0%);\n\t\tpointer-events: none;\n\t\tborder: 40%;\n\t\tborder-radius: var(--mod-border-radius);\n}\n.beepboxEditor input[type=range]::-webkit-slider-thumb {\n\theight: 2em;\n\twidth: 0.5em;\n\tborder-radius: 0.25em;\n\tbackground: currentColor;\n\tcursor: pointer;\n\t-webkit-appearance: none;\n\tmargin-top: -0.75em;\n}\n.beepboxEditor input[type=range]:focus::-webkit-slider-runnable-track {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n}\n.beepboxEditor input[type=range]::-moz-range-track {\n\twidth: 100%;\n\theight: 0.5em;\n\tcursor: pointer;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n}\n.beepboxEditor input[type=range]:focus::-moz-range-track {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n}\n.beepboxEditor input[type=range]::-moz-range-thumb {\n\theight: 2em;\n\twidth: 0.5em;\n\tborder-radius: 0.25em;\n\tborder: none;\n\tbackground: currentColor;\n\tcursor: pointer;\n}\n.beepboxEditor input[type=range]::-ms-track {\n\twidth: 100%;\n\theight: 0.5em;\n\tcursor: pointer;\n\tbackground: ${t.ColorConfig.uiWidgetBackground};\n\tborder-color: transparent;\n}\n.beepboxEditor input[type=range]:focus::-ms-track {\n\tbackground: ${t.ColorConfig.uiWidgetFocus};\n}\n.beepboxEditor input[type=range]::-ms-thumb {\n\theight: 2em;\n\twidth: 0.5em;\n\tborder-radius: 0.25em;\n\tbackground: currentColor;\n\tcursor: pointer;\n}\n.beepboxEditor .hintButton {\n\tborder: 1px solid currentColor;\n\tborder-radius: 50%;\n\ttext-decoration: none;\n\twidth: 1em;\n\theight: 1em;\n\ttext-align: center;\n\tmargin-left: auto;\n\tmargin-right: .4em;\n\tcursor: pointer;\n}\n\nli.select2-results__option[role=group] > strong:hover {\n  background-color: #516fbb;\n}\n\n/* wide screen */\n@media (min-width: 701px) {\n\t#beepboxEditorContainer {\n\t\tdisplay: table;\n\t}\n\t.beepboxEditor {\n\t\tflex-direction: row;\n\t}\n\t.beepboxEditor:focus-within {\n\t\toutline: 3px solid ${t.ColorConfig.uiWidgetBackground};\n\t}\n\t.beepboxEditor .trackAndMuteContainer {\n\t\twidth: 512px;\n\t}\n\t.beepboxEditor .trackSelectBox {\n\t\tdisplay: none;\n\t}\n    .beepboxEditor .muteButtonSelectBox {\n\t\tdisplay: none;\n\t}\n\t.beepboxEditor .play-pause-area {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\t.beepboxEditor .playback-bar-controls {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tmargin: 2px 0;\n\t}\n\t.beepboxEditor .playback-volume-controls {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tmargin: 2px 0;\n\t\talign-items: center;\n\t}\n\t.beepboxEditor .pauseButton, .beepboxEditor .playButton,\n    .beepboxEditor .copyButton, .beepboxEditor .pasteButton\n    {\n\t\tflex-grow: 1;\n\t}\n\t.beepboxEditor .nextBarButton, .beepboxEditor .prevBarButton {\n\t\tflex-grow: 1;\n\t\tmargin-left: 10px;\n\t}\n\t.beepboxEditor .settings-area {\n\t\twidth: 14em;\n\t}\n}\n\n/* narrow screen */\n@media (max-width: 700px) {\n\t.beepboxEditor {\n\t\tgrid-template-columns: minmax(0, 1fr);\n\t\tgrid-template-rows: min-content 6px min-content min-content;\n\t\tgrid-template-areas: "pattern-area" "." "track-area" "settings-area";\n\t\tgrid-row-gap: 0;\n\t}\n\t.beepboxEditor .settings-area {\n\t\tgrid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n\t\tgrid-template-rows: min-content min-content 1fr min-content;\n\t\tgrid-template-areas:\n\t\t\t"play-pause-area play-pause-area"\n\t\t\t"menu-area instrument-settings-area"\n\t\t\t"song-settings-area instrument-settings-area"\n\t\t\t"version-area version-area";\n\t\tgrid-column-gap: 8px;\n\t\tmargin: 0 4px;\n\t}\n\t.beepboxEditor:focus-within {\n\t\toutline: none;\n\t}\n\t.beepboxEditor .pattern-area {\n\t\tmax-height: 75vh;\n\t}\n\t.beepboxEditor .trackContainer {\n\t\toverflow-x: auto;\n\t}\n\t.beepboxEditor .barScrollBar {\n\t\tdisplay: none;\n\t}\n\t.beepboxEditor .play-pause-area {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tmargin: 2px 0;\n\t}\n\t.beepboxEditor .playback-bar-controls {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tflex-grow: 1;\n\t}\n\t.beepboxEditor .playback-volume-controls {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tflex-grow: 1;\n\t\tmargin: 0 2px;\n\t}\n\t.beepboxEditor .pauseButton, .beepboxEditor .playButton,\n\t.beepboxEditor .nextBarButton, .beepboxEditor .prevBarButton,\n    .beepboxEditor .copyButton, .beepboxEditor .pasteButton\n    {\n\t\tflex-grow: 1;\n\t\tmargin: 0 2px;\n\t}\n\t\n\t.beepboxEditor .soundIcon {\n\t  background: ${t.ColorConfig.editorBackground};\n\t  display: inline-block;\n\t  height: 10px;\n\t  margin-left: 0px;\n\t  margin-top: 8px;\n\t\tposition: relative;\n\t\twidth: 10px;\n\t}\n\t.beepboxEditor .soundIcon:before {\n\t  border-bottom: 6px solid transparent;\n\t  border-top: 6px solid transparent;\n\t  border-right: 10px solid ${t.ColorConfig.editorBackground};\n\t  content: "";\n\t  height: 10px;\n\t  left: 6px;\n\t  position: absolute;\n\t  top: -6px;\n\t  width: 0;\n\t}\n}\n\n`))
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        static setFullScreen(t) {
            switch (t) {
                case "normal":
                    this.t.textContent = this.i;
                    break;
                case "fullscreen":
                    this.t.textContent = this.s;
                    break;
                case "widefullscreen":
                    this.t.textContent = this.o
            }
        }
    }
    e.i = "\n\t\t", e.o = '\n\t\t\t/* wide full screen (jummbox) */\n\t\t\t@media (min-width: 1001px) {\n\t\t\t\t#beepboxEditorContainer {\n\t\t\t\t\tmax-width: initial;\n\t\t\t\t\theight: 100vh;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-height: 100vh;\n\t\t\t\t\tgrid-template-columns: 512px minmax(0, 1fr) 30em; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */\n\t\t\t\t\tgrid-template-rows: minmax(481px, 1fr) min-content;\n\t\t\t\t\tgrid-template-areas: "track-area pattern-area settings-area";\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .track-area {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmax-height: 100%;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .pattern-area {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .editor-widget-column {\n\t\t\t\t\tflex: 0;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .instrument-settings-area {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .instrument-settings-area > .editor-controls {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .song-settings-area {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.beepboxEditor .settings-area {\n\t\t\t\t\twidth: 30em;\n\t\t\t\t\tgrid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n\t\t\t\t\tgrid-template-rows: auto auto auto minmax(0, 1fr);\n\t\t\t\t\tgrid-template-areas:\n\t\t\t\t\t\t"instrument-settings-area version-area"\n\t\t\t\t\t\t"instrument-settings-area play-pause-area"\n\t\t\t\t\t\t"instrument-settings-area menu-area"\n\t\t\t\t\t\t"instrument-settings-area song-settings-area";\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackAndMuteContainer {\n\t\t\t\t\tmax-height: calc( 100vh - 20px );\n\t\t\t\t}\n\n\t\t\t\t.beepboxEditor .barScrollBar {\n\t\t\t\t\tposition: absolute !important;\n\t\t\t\t}\n\n\t\t\t}\n\t\t', e.s = `\n\t\t\t/* full screen (beepbox) */\n\t\t\t@media (min-width: 701px) {\n\t\t\t\t#beepboxEditorContainer {\n\t\t\t\t\tmax-width: initial;\n\t\t\t\t\theight: 100vh;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\tmin-height: 100vh;\n\t\t\t\t\tgrid-template-columns: minmax(0, 1fr) 30em; /* minmax(0, 1fr) min-content; Chrome 80 grid layout regression. https://bugs.chromium.org/p/chromium/issues/detail?id=1050307 */\n\t\t\t\t\tgrid-template-rows: minmax(481px, 1fr) min-content;\n\t\t\t\t\tgrid-template-areas: "pattern-area settings-area" "track-area track-area";\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .pattern-area {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .track-area {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .editor-widget-column {\n\t\t\t\t\tflex: 0;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackAndMuteContainer {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .instrument-settings-area {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t\tposition: relative;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .instrument-settings-area > .editor-controls {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .song-settings-area {\n\t\t\t\t\toverflow-y: auto;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.beepboxEditor .settings-area {\n\t\t\t\t\twidth: 30em;\n\t\t\t\t\tgrid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n\t\t\t\t\tgrid-template-rows: auto auto auto minmax(0, 1fr);\n\t\t\t\t\tgrid-template-areas:\n\t\t\t\t\t\t"instrument-settings-area version-area"\n\t\t\t\t\t\t"instrument-settings-area play-pause-area"\n\t\t\t\t\t\t"instrument-settings-area menu-area"\n\t\t\t\t\t\t"instrument-settings-area song-settings-area";\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.beepboxEditor .barScrollBar {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor.selectRow {\n\t\t\t\t\theight: 2em;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .operatorRow {\n\t\t\t\t\theiht: 2em;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackAndMuteContainer {\n\t\t\t\t\tmax-height: 446px;\n\t\t\t\t}\n\n\t\t\t\t.beepboxEditor .trackContainer {\n\t\t\t\t\toverflow-x: auto;\n\t\t\t\t\tscrollbar-width: auto;\n\t\t\t\t\tscrollbar-color: ${t.ColorConfig.uiWidgetBackground} ${t.ColorConfig.editorBackground};\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackContainer::-webkit-scrollbar {\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackContainer::-webkit-scrollbar-track {\n\t\t\t\t\tbackground: ${t.ColorConfig.editorBackground};\n\t\t\t\t}\n\t\t\t\t.beepboxEditor .trackContainer::-webkit-scrollbar-thumb {\n\t\t\t\t\tbackground-color: ${t.ColorConfig.uiWidgetBackground};\n\t\t\t\t\tborder: 3px solid ${t.ColorConfig.editorBackground};\n\t\t\t\t}\n\t\t\t}\n\t\t`, e.t = document.head.appendChild(t.HTML.style({
        type: "text/css"
    })), t.Layout = e
}(beepbox || (beepbox = {})),
function(t) {
    function e(t) {
        if (! function(t) {
                return !(!t || t & t - 1)
            }(t)) throw new Error("FFT array length must be a power of 2.");
        return Math.round(Math.log(t) / Math.log(2))
    }
    t.scaleElementsByFactor = function(t, e) {
        for (let i = 0; i < t.length; i++) t[i] *= e
    }, t.inverseRealFourierTransform = function(t, i) {
        const s = e(i);
        if (i < 4) throw new Error("FFT array length must be at least 4.");
        for (let e = s - 1; e >= 2; e--) {
            const s = 1 << e,
                n = s >> 1,
                o = s << 1,
                r = 2 * Math.PI / o,
                h = Math.cos(r),
                a = Math.sin(r),
                l = 2 * h;
            for (let e = 0; e < i; e += o) {
                const i = e,
                    o = i + n,
                    r = i + s,
                    c = r + n,
                    d = r + s,
                    m = t[i],
                    f = t[r];
                t[i] = m + f, t[o] *= 2, t[r] = m - f, t[c] *= 2;
                let u = h,
                    p = -a,
                    y = 1,
                    b = 0;
                for (let e = 1; e < n; e++) {
                    const s = i + e,
                        n = r - e,
                        o = r + e,
                        h = d - e,
                        a = t[s],
                        c = t[n],
                        m = t[o],
                        f = t[h],
                        g = a - c,
                        v = m + f;
                    t[s] = a + c, t[n] = f - m, t[o] = g * u - v * p, t[h] = v * u + g * p;
                    const w = l * u - y,
                        k = l * p - b;
                    y = u, b = p, u = w, p = k
                }
            }
        }
        for (let e = 0; e < i; e += 4) {
            const i = e + 1,
                s = e + 2,
                n = e + 3,
                o = t[e],
                r = 2 * t[i],
                h = t[s],
                a = 2 * t[n],
                l = o + h,
                c = o - h;
            t[e] = l + r, t[i] = l - r, t[s] = c + a, t[n] = c - a
        }! function(t, i) {
            const s = e(i);
            if (s > 16) throw new Error("FFT array length must not be greater than 2^16.");
            const n = 16 - s;
            for (let e = 0; e < i; e++) {
                let i;
                if ((i = ((i = (61680 & (i = (52428 & (i = (43690 & e) >> 1 | (21845 & e) << 1)) >> 2 | (13107 & i) << 2)) >> 4 | (3855 & i) << 4) >> 8 | (255 & i) << 8) >> n) > e) {
                    let s = t[e];
                    t[e] = t[i], t[i] = s
                }
            }
        }(t, i)
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.Deque = class {
        constructor() {
            this.h = 1, this.l = [void 0], this.m = 0, this.u = 0, this.v = 0
        }
        pushFront(t) {
            this.v >= this.h && this.k(), this.u = this.u - 1 & this.m, this.l[this.u] = t, this.v++
        }
        pushBack(t) {
            this.v >= this.h && this.k(), this.l[this.u + this.v & this.m] = t, this.v++
        }
        popFront() {
            if (this.v <= 0) throw new Error("No elements left to pop.");
            const t = this.l[this.u];
            return this.l[this.u] = void 0, this.u = this.u + 1 & this.m, this.v--, t
        }
        popBack() {
            if (this.v <= 0) throw new Error("No elements left to pop.");
            this.v--;
            const t = this.u + this.v & this.m,
                e = this.l[t];
            return this.l[t] = void 0, e
        }
        peakFront() {
            if (this.v <= 0) throw new Error("No elements left to pop.");
            return this.l[this.u]
        }
        peakBack() {
            if (this.v <= 0) throw new Error("No elements left to pop.");
            return this.l[this.u + this.v - 1 & this.m]
        }
        count() {
            return this.v
        }
        set(t, e) {
            if (t < 0 || t >= this.v) throw new Error("Invalid index");
            this.l[this.u + t & this.m] = e
        }
        get(t) {
            if (t < 0 || t >= this.v) throw new Error("Invalid index");
            return this.l[this.u + t & this.m]
        }
        remove(t) {
            if (t < 0 || t >= this.v) throw new Error("Invalid index");
            if (t <= this.v >> 1) {
                for (; t > 0;) this.set(t, this.get(t - 1)), t--;
                this.popFront()
            } else {
                for (t++; t < this.v;) this.set(t - 1, this.get(t)), t++;
                this.popBack()
            }
        }
        k() {
            if (this.h >= 1073741824) throw new Error("Capacity too big.");
            this.h = this.h << 1;
            const t = this.l,
                e = new Array(this.h),
                i = 0 | this.v,
                s = 0 | this.u;
            for (let n = 0; n < i; n++) e[n] = t[s + n & this.m];
            for (let t = i; t < this.h; t++) e[t] = void 0;
            this.u = 0, this.l = e, this.m = this.h - 1
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const e = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 95],
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 62, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 63, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 0, 0, 0];
    class s {
        constructor(t, e, s) {
            this.M = [], this.S = 0;
            for (let n = e; n < s; n++) {
                const e = i[t.charCodeAt(n)];
                this.M.push(e >> 5 & 1), this.M.push(e >> 4 & 1), this.M.push(e >> 3 & 1), this.M.push(e >> 2 & 1), this.M.push(e >> 1 & 1), this.M.push(1 & e)
            }
        }
        read(t) {
            let e = 0;
            for (; t > 0;) e <<= 1, e += this.M[this.S++], t--;
            return e
        }
        readLongTail(t, e) {
            let i = t,
                s = e;
            for (; this.M[this.S++];) i += 1 << s, s++;
            for (; s > 0;) s--, this.M[this.S++] && (i += 1 << s);
            return i
        }
        readPartDuration() {
            return this.readLongTail(1, 3)
        }
        readLegacyPartDuration() {
            return this.readLongTail(1, 2)
        }
        readPinCount() {
            return this.readLongTail(1, 0)
        }
        readPitchInterval() {
            return this.read(1) ? -this.readLongTail(1, 3) : this.readLongTail(1, 3)
        }
    }
    class n {
        constructor() {
            this.q = 0, this.M = []
        }
        clear() {
            this.q = 0
        }
        write(t, e) {
            for (t--; t >= 0;) this.M[this.q++] = e >>> t & 1, t--
        }
        writeLongTail(t, e, i) {
            if (i < t) throw new Error("value out of bounds");
            i -= t;
            let s = e;
            for (; i >= 1 << s;) this.M[this.q++] = 1, i -= 1 << s, s++;
            for (this.M[this.q++] = 0; s > 0;) s--, this.M[this.q++] = i >>> s & 1
        }
        writePartDuration(t) {
            this.writeLongTail(1, 3, t)
        }
        writePinCount(t) {
            this.writeLongTail(1, 0, t)
        }
        writePitchInterval(t) {
            t < 0 ? (this.write(1, 1), this.writeLongTail(1, 3, -t)) : (this.write(1, 0), this.writeLongTail(1, 3, t))
        }
        concat(t) {
            for (let e = 0; e < t.q; e++) this.M[this.q++] = t.M[e]
        }
        encodeBase64(t) {
            for (let i = 0; i < this.q; i += 6) {
                const s = this.M[i] << 5 | this.M[i + 1] << 4 | this.M[i + 2] << 3 | this.M[i + 3] << 2 | this.M[i + 4] << 1 | this.M[i + 5];
                t.push(e[s])
            }
            return t
        }
        lengthBase64() {
            return Math.ceil(this.q / 6)
        }
    }

    function o(t, e, i) {
        return {
            interval: t,
            time: e,
            volume: i
        }
    }

    function r(t, e, i) {
        return i <= (e -= 1) ? i >= t ? i : t : e
    }

    function h(t, e, i) {
        if (t <= i && i <= e) return i;
        throw new Error(`Value ${i} not in range [${t}, ${e}]`)
    }
    t.makeNotePin = o;
    class a {
        constructor(t, e, i, s, n = !1) {
            this.pitches = [t], this.pins = [o(0, 0, s), o(0, i - e, n ? 0 : s)], this.start = e, this.end = i
        }
        pickMainInterval() {
            let t = 0,
                e = 0;
            for (let i = 1; i < this.pins.length; i++) {
                const s = this.pins[i - 1],
                    n = this.pins[i];
                if (s.interval == n.interval) {
                    const i = n.time - s.time;
                    t < i && (t = i, e = s.interval)
                }
            }
            if (0 == t) {
                let t = 0;
                for (let i = 0; i < this.pins.length; i++) {
                    const s = this.pins[i];
                    t < s.volume && (t = s.volume, e = s.interval)
                }
            }
            return e
        }
    }
    t.Note = a;
    class l {
        constructor() {
            this.notes = [], this.instrument = 0
        }
        cloneNotes() {
            const t = [];
            for (const e of this.notes) {
                const i = new a(-1, e.start, e.end, 6);
                i.pitches = e.pitches.concat(), i.pins = [];
                for (const t of e.pins) i.pins.push(o(t.interval, t.time, t.volume));
                t.push(i)
            }
            return t
        }
        reset() {
            this.notes.length = 0, this.instrument = 0
        }
    }
    t.Pattern = l;
    class c {
        constructor(t) {
            this.frequency = 0, this.amplitude = 0, this.envelope = 0, this.reset(t)
        }
        reset(e) {
            this.frequency = 0, this.amplitude = e <= 1 ? t.Config.operatorAmplitudeMax : 0, this.envelope = 0 == e ? 0 : 1
        }
        copy(t) {
            this.frequency = t.frequency, this.amplitude = t.amplitude, this.envelope = t.envelope
        }
    }
    t.Operator = c;
    class d {
        constructor(t) {
            this.spectrum = [], this.P = null, this.N = !1, this.reset(t)
        }
        reset(e) {
            for (let i = 0; i < t.Config.spectrumControlPoints; i++)
                if (e) this.spectrum[i] = Math.round(t.Config.spectrumMax * (1 / Math.sqrt(1 + i / 3)));
                else {
                    const e = 0 == i || 7 == i || 11 == i || 14 == i || 16 == i || 18 == i || 21 == i || 23 == i || i >= 25;
                    this.spectrum[i] = e ? Math.max(0, Math.round(t.Config.spectrumMax * (1 - i / 30))) : 0
                } this.N = !1
        }
        markCustomWaveDirty() {
            this.N = !1
        }
        getCustomWave(e) {
            if (!this.N || null == this.P) {
                let s = t.Config.chipNoiseLength;
                null != this.P && this.P.length == s + 1 || (this.P = new Float32Array(s + 1));
                const n = this.P;
                for (let t = 0; t < s; t++) n[t] = 0;
                const o = 14,
                    r = .25,
                    h = [0, 1 / 7, Math.log(5 / 4) / Math.LN2, 3 / 7, Math.log(1.5) / Math.LN2, 5 / 7, 6 / 7];

                function i(i) {
                    return e + Math.floor(i / t.Config.spectrumControlPointsPerOctave) + h[(i + t.Config.spectrumControlPointsPerOctave) % t.Config.spectrumControlPointsPerOctave]
                }
                let a = 1;
                for (let e = 0; e < t.Config.spectrumControlPoints + 1; e++) {
                    const s = e <= 0 ? 0 : this.spectrum[e - 1],
                        h = e >= t.Config.spectrumControlPoints ? this.spectrum[t.Config.spectrumControlPoints - 1] : this.spectrum[e],
                        l = i(e - 1);
                    let c = i(e);
                    e >= t.Config.spectrumControlPoints && (c = o + (c - o) * r), 0 == s && 0 == h || (a += .02 * t.drawNoiseSpectrum(n, l, c, s / t.Config.spectrumMax, h / t.Config.spectrumMax, -.5))
                }
                this.spectrum[t.Config.spectrumControlPoints - 1] > 0 && (a += .02 * t.drawNoiseSpectrum(n, o + (i(t.Config.spectrumControlPoints) - o) * r, o, this.spectrum[t.Config.spectrumControlPoints - 1] / t.Config.spectrumMax, 0, -.5)), t.inverseRealFourierTransform(n, s), t.scaleElementsByFactor(n, 5 / (Math.sqrt(s) * Math.pow(a, .75))), n[s] = n[0], this.N = !0
            }
            return this.P
        }
    }
    t.SpectrumWave = d;
    class m {
        constructor() {
            this.harmonics = [], this.P = null, this.N = !1, this.reset()
        }
        reset() {
            for (let e = 0; e < t.Config.harmonicsControlPoints; e++) this.harmonics[e] = 0;
            this.harmonics[0] = t.Config.harmonicsMax, this.harmonics[3] = t.Config.harmonicsMax, this.harmonics[6] = t.Config.harmonicsMax, this.N = !1
        }
        markCustomWaveDirty() {
            this.N = !1
        }
        getCustomWave() {
            if (!this.N || null == this.P) {
                let e = t.Config.harmonicsWavelength;
                const i = t.getDrumWave(0);
                null != this.P && this.P.length == e + 1 || (this.P = new Float32Array(e + 1));
                const s = this.P;
                for (let t = 0; t < e; t++) s[t] = 0;
                const n = -.25;
                let o = 1;
                for (let r = 0; r < t.Config.harmonicsRendered; r++) {
                    const h = r + 1;
                    let a = r < t.Config.harmonicsControlPoints ? this.harmonics[r] : this.harmonics[t.Config.harmonicsControlPoints - 1];
                    r >= t.Config.harmonicsControlPoints && (a *= 1 - (r - t.Config.harmonicsControlPoints) / (t.Config.harmonicsRendered - t.Config.harmonicsControlPoints));
                    const l = a / t.Config.harmonicsMax;
                    let c = Math.pow(2, a - t.Config.harmonicsMax + 1) * Math.sqrt(l);
                    r < t.Config.harmonicsControlPoints && (o += c), c *= Math.pow(h, n), c *= i[r + 589], s[e - h] = c
                }
                t.inverseRealFourierTransform(s, e);
                const r = 1 / Math.pow(o, .7);
                let h = 0,
                    a = 0;
                for (let t = 0; t < s.length; t++) h += a, a = s[t] * r, s[t] = h;
                s[e] = s[0], this.N = !0
            }
            return this.P
        }
    }
    t.HarmonicsWave = m;
    class f {
        constructor(e, i) {
            if (this.type = 0, this.preset = 0, this.chipWave = 2, this.chipNoise = 1, this.filterCutoff = 12, this.filterResonance = 0, this.filterEnvelope = 1, this.transition = 1, this.vibrato = 0, this.interval = 0, this.effects = 0, this.chord = 1, this.volume = 0, this.pan = t.Config.panCenter, this.detune = 0, this.pulseWidth = t.Config.pulseWidthRange, this.pulseEnvelope = 1, this.algorithm = 0, this.feedbackType = 0, this.feedbackAmplitude = 0, this.feedbackEnvelope = 1, this.customChipWave = new Float64Array(64), this.customChipWaveIntegral = new Float64Array(65), this.operators = [], this.harmonicsWave = new m, this.drumsetEnvelopes = [], this.drumsetSpectrumWaves = [], this.modChannels = [], this.modStatuses = [], this.modInstruments = [], this.modSettings = [], i)
                for (let e = 0; e < t.Config.modCount; e++) this.modChannels.push(0), this.modStatuses.push(u.msNone), this.modInstruments.push(0), this.modSettings.push(p.mstNone);
            this.spectrumWave = new d(e);
            for (let e = 0; e < t.Config.operatorCount; e++) this.operators[e] = new c(e);
            for (let e = 0; e < t.Config.drumCount; e++) this.drumsetEnvelopes[e] = t.Config.envelopes.dictionary["twang 2"].index, this.drumsetSpectrumWaves[e] = new d(!0);
            for (let t = 0; t < 64; t++) this.customChipWave[t] = 24 - Math.floor(.75 * t);
            let s = 0;
            for (let t = 0; t < this.customChipWave.length; t++) s += this.customChipWave[t];
            const n = s / this.customChipWave.length;
            let o = 0,
                r = 0;
            for (let t = 0; t < this.customChipWave.length; t++) o += r, r = this.customChipWave[t] - n, this.customChipWaveIntegral[t] = o;
            this.customChipWaveIntegral[64] = 0
        }
        setTypeAndReset(e, i, s) {
            switch (s && (e = 8), this.type = e, this.preset = e, this.volume = 0, this.pan = t.Config.panCenter, this.detune = 0, e) {
                case 0:
                    this.chipWave = 2, this.filterCutoff = 6, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index, this.transition = 1, this.vibrato = 0, this.interval = 0, this.effects = 1, this.chord = 2;
                    break;
                case 7:
                    this.chipWave = 2, this.filterCutoff = 6, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index, this.transition = 1, this.vibrato = 0, this.interval = 0, this.effects = 1, this.chord = 2;
                    for (let t = 0; t < 64; t++) this.customChipWave[t] = 24 - Math.floor(.75 * t);
                    let n = 0;
                    for (let t = 0; t < this.customChipWave.length; t++) n += this.customChipWave[t];
                    const o = n / this.customChipWave.length;
                    let r = 0,
                        h = 0;
                    for (let t = 0; t < this.customChipWave.length; t++) r += h, h = this.customChipWave[t] - o, this.customChipWaveIntegral[t] = r;
                    this.customChipWaveIntegral[64] = 0;
                    break;
                case 1:
                    this.transition = 1, this.vibrato = 0, this.effects = 1, this.chord = 3, this.filterCutoff = 10, this.filterResonance = 0, this.filterEnvelope = 1, this.algorithm = 0, this.feedbackType = 0, this.feedbackAmplitude = 0, this.feedbackEnvelope = t.Config.envelopes.dictionary.steady.index;
                    for (let t = 0; t < this.operators.length; t++) this.operators[t].reset(t);
                    break;
                case 2:
                    this.chipNoise = 1, this.transition = 1, this.effects = 0, this.chord = 2, this.filterCutoff = 10, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index;
                    break;
                case 3:
                    this.transition = 1, this.effects = 1, this.chord = 0, this.filterCutoff = 10, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index, this.spectrumWave.reset(i);
                    break;
                case 4:
                    this.effects = 0;
                    for (let e = 0; e < t.Config.drumCount; e++) this.drumsetEnvelopes[e] = t.Config.envelopes.dictionary["twang 2"].index, void 0 == this.drumsetSpectrumWaves[e] && (this.drumsetSpectrumWaves[e] = new d(!0)), this.drumsetSpectrumWaves[e].reset(i);
                    break;
                case 5:
                    this.filterCutoff = 10, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index, this.transition = 1, this.vibrato = 0, this.interval = 0, this.effects = 1, this.chord = 0, this.harmonicsWave.reset();
                    break;
                case 6:
                    this.filterCutoff = 10, this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.dictionary.steady.index, this.transition = 1, this.vibrato = 0, this.interval = 0, this.effects = 1, this.chord = 2, this.pulseWidth = t.Config.pulseWidthRange, this.pulseEnvelope = t.Config.envelopes.dictionary["twang 2"].index;
                    break;
                case 8:
                    this.transition = 0, this.vibrato = 0, this.interval = 0, this.effects = 0, this.chord = 0, this.modChannels = [], this.modStatuses = [], this.modInstruments = [], this.modSettings = [];
                    for (let e = 0; e < t.Config.modCount; e++) this.modChannels.push(0), this.modStatuses.push(u.msNone), this.modInstruments.push(0), this.modSettings.push(p.mstNone);
                    break;
                default:
                    throw new Error("Unrecognized instrument type: " + e)
            }
        }
        toJsonObject() {
            const e = {
                type: t.Config.instrumentTypeNames[this.type],
                volume: this.volume,
                pan: 100 * (this.pan - t.Config.panCenter) / t.Config.panCenter,
                detune: this.detune,
                effects: t.Config.effectsNames[this.effects]
            };
            if (this.preset != this.type && (e.preset = this.preset), 4 != this.type && (e.transition = t.Config.transitions[this.transition].name, e.chord = this.getChord().name, e.filterCutoffHz = Math.round(t.Config.filterCutoffMaxHz * Math.pow(2, this.getFilterCutoffOctaves())), e.filterResonance = Math.round(100 * this.filterResonance / (t.Config.filterResonanceRange - 1)), e.filterEnvelope = this.getFilterEnvelope().name), 2 == this.type) e.wave = t.Config.chipNoises[this.chipNoise].name;
            else if (3 == this.type) {
                e.spectrum = [];
                for (let i = 0; i < t.Config.spectrumControlPoints; i++) e.spectrum[i] = Math.round(100 * this.spectrumWave.spectrum[i] / t.Config.spectrumMax)
            } else if (4 == this.type) {
                e.drums = [];
                for (let i = 0; i < t.Config.drumCount; i++) {
                    const s = [];
                    for (let e = 0; e < t.Config.spectrumControlPoints; e++) s[e] = Math.round(100 * this.drumsetSpectrumWaves[i].spectrum[e] / t.Config.spectrumMax);
                    e.drums[i] = {
                        filterEnvelope: this.getDrumsetEnvelope(i).name,
                        spectrum: s
                    }
                }
            } else if (0 == this.type) e.wave = t.Config.chipWaves[this.chipWave].name, e.interval = t.Config.intervals[this.interval].name, e.vibrato = t.Config.vibratos[this.vibrato].name;
            else if (7 == this.type) {
                e.wave = t.Config.chipWaves[this.chipWave].name, e.interval = t.Config.intervals[this.interval].name, e.vibrato = t.Config.vibratos[this.vibrato].name, e.customChipWave = new Float64Array(64), e.customChipWaveIntegral = new Float64Array(65);
                for (let t = 0; t < this.customChipWave.length; t++) e.customChipWave[t] = this.customChipWave[t];
                e.customChipWaveIntegral[64] = 0
            } else if (6 == this.type) e.pulseWidth = this.pulseWidth, e.pulseEnvelope = t.Config.envelopes[this.pulseEnvelope].name, e.vibrato = t.Config.vibratos[this.vibrato].name;
            else if (5 == this.type) {
                e.interval = t.Config.intervals[this.interval].name, e.vibrato = t.Config.vibratos[this.vibrato].name, e.harmonics = [];
                for (let i = 0; i < t.Config.harmonicsControlPoints; i++) e.harmonics[i] = Math.round(100 * this.harmonicsWave.harmonics[i] / t.Config.harmonicsMax)
            } else if (1 == this.type) {
                const i = [];
                for (const e of this.operators) i.push({
                    frequency: t.Config.operatorFrequencies[e.frequency].name,
                    amplitude: e.amplitude,
                    envelope: t.Config.envelopes[e.envelope].name
                });
                e.vibrato = t.Config.vibratos[this.vibrato].name, e.algorithm = t.Config.algorithms[this.algorithm].name, e.feedbackType = t.Config.feedbacks[this.feedbackType].name, e.feedbackAmplitude = this.feedbackAmplitude, e.feedbackEnvelope = t.Config.envelopes[this.feedbackEnvelope].name, e.operators = i
            } else {
                if (8 != this.type) throw new Error("Unrecognized instrument type");
                e.modChannels = [], e.modInstruments = [], e.modSettings = [], e.modStatuses = [];
                for (let i = 0; i < t.Config.modCount; i++) e.modChannels[i] = this.modChannels[i], e.modInstruments[i] = this.modInstruments[i], e.modSettings[i] = this.modSettings[i], e.modStatuses[i] = this.modStatuses[i]
            }
            return e
        }
        fromJsonObject(e, i, s) {
            void 0 == e && (e = {});
            let n = t.Config.instrumentTypeNames.indexOf(e.type); - 1 == n && (n = s ? 8 : i ? 2 : 0), this.setTypeAndReset(n, i, s), void 0 != e.preset && (this.preset = e.preset >>> 0), void 0 != e.volume ? this.volume = r(-t.Config.volumeRange / 2, t.Config.volumeRange / 2, 0 | e.volume) : this.volume = 0, void 0 != e.pan ? this.pan = r(0, t.Config.panMax + 1, Math.round(t.Config.panCenter + (0 | e.pan) * t.Config.panCenter / 100)) : this.pan = t.Config.panCenter, void 0 != e.detune ? this.detune = r(t.Config.detuneMin, t.Config.detuneMax + 1, 0 | e.detune) : this.detune = 0;
            const o = {
                    binary: 0,
                    sudden: 1,
                    smooth: 2
                },
                h = e.transition || e.envelope;
            if (this.transition = void 0 != o[h] ? o[h] : t.Config.transitions.findIndex(t => t.name == h), -1 == this.transition && (this.transition = 1), this.effects = t.Config.effectsNames.indexOf(e.effects), -1 == this.effects && (this.effects = 2 == this.type ? 0 : 1), void 0 != e.filterCutoffHz ? this.filterCutoff = r(0, t.Config.filterCutoffRange, Math.round(t.Config.filterCutoffRange - 1 + 2 * Math.log((0 | e.filterCutoffHz) / t.Config.filterCutoffMaxHz) / Math.LN2)) : this.filterCutoff = 0 == this.type ? 6 : 10, void 0 != e.filterResonance ? this.filterResonance = r(0, t.Config.filterResonanceRange, Math.round((t.Config.filterResonanceRange - 1) * (0 | e.filterResonance) / 100)) : this.filterResonance = 0, this.filterEnvelope = t.Config.envelopes.findIndex(t => t.name == e.filterEnvelope), -1 == this.filterEnvelope && (this.filterEnvelope = t.Config.envelopes.dictionary.steady.index), void 0 != e.filter) {
                const t = [20, 12, 6, 0, 16, 10, 4],
                    i = [1, 1, 1, 1, 18, 19, 20],
                    s = ["none", "bright", "medium", "soft", "decay bright", "decay medium", "decay soft"],
                    n = {
                        "sustain sharp": 1,
                        "sustain medium": 2,
                        "sustain soft": 3,
                        "decay sharp": 4
                    };
                let o = void 0 != n[e.filter] ? n[e.filter] : s.indexOf(e.filter); - 1 == o && (o = 0), this.filterCutoff = t[o], this.filterEnvelope = i[o], this.filterResonance = 0
            }
            const a = ["none", "vibrato light", "vibrato delayed", "vibrato heavy"];
            if (2 == this.type) this.chipNoise = t.Config.chipNoises.findIndex(t => t.name == e.wave), -1 == this.chipNoise && (this.chipNoise = 1), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 2);
            else if (3 == this.type) {
                if (void 0 != e.spectrum)
                    for (let i = 0; i < t.Config.spectrumControlPoints; i++) this.spectrumWave.spectrum[i] = Math.max(0, Math.min(t.Config.spectrumMax, Math.round(t.Config.spectrumMax * +e.spectrum[i] / 100)));
                this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 0)
            } else if (4 == this.type) {
                if (void 0 != e.drums)
                    for (let i = 0; i < t.Config.drumCount; i++) {
                        const s = e.drums[i];
                        if (void 0 != s && (void 0 != s.filterEnvelope && (this.drumsetEnvelopes[i] = t.Config.envelopes.findIndex(t => t.name == s.filterEnvelope), -1 == this.drumsetEnvelopes[i] && (this.drumsetEnvelopes[i] = t.Config.envelopes.dictionary["twang 2"].index)), void 0 != s.spectrum))
                            for (let e = 0; e < t.Config.spectrumControlPoints; e++) this.drumsetSpectrumWaves[i].spectrum[e] = Math.max(0, Math.min(t.Config.spectrumMax, Math.round(t.Config.spectrumMax * +s.spectrum[e] / 100)))
                    }
            } else if (5 == this.type) {
                if (void 0 != e.harmonics)
                    for (let i = 0; i < t.Config.harmonicsControlPoints; i++) this.harmonicsWave.harmonics[i] = Math.max(0, Math.min(t.Config.harmonicsMax, Math.round(t.Config.harmonicsMax * +e.harmonics[i] / 100)));
                void 0 != e.interval && (this.interval = t.Config.intervals.findIndex(t => t.name == e.interval), -1 == this.interval && (this.interval = 0)), void 0 != e.vibrato && (this.vibrato = t.Config.vibratos.findIndex(t => t.name == e.vibrato), -1 == this.vibrato && (this.vibrato = 0)), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 0)
            } else if (6 == this.type) void 0 != e.pulseWidth ? this.pulseWidth = r(0, t.Config.pulseWidthRange + 1, e.pulseWidth) : this.pulseWidth = t.Config.pulseWidthRange, void 0 != e.pulseEnvelope && (this.pulseEnvelope = t.Config.envelopes.findIndex(t => t.name == e.pulseEnvelope), -1 == this.pulseEnvelope && (this.pulseEnvelope = t.Config.envelopes.dictionary.steady.index)), void 0 != e.vibrato && (this.vibrato = t.Config.vibratos.findIndex(t => t.name == e.vibrato), -1 == this.vibrato && (this.vibrato = 0)), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 0);
            else if (0 == this.type) {
                const i = {
                    triangle: 1,
                    square: 2,
                    "pulse wide": 3,
                    "pulse narrow": 4,
                    sawtooth: 5,
                    "double saw": 6,
                    "double pulse": 7,
                    spiky: 8,
                    plateau: 0
                };
                if (this.chipWave = void 0 != i[e.wave] ? i[e.wave] : t.Config.chipWaves.findIndex(t => t.name == e.wave), -1 == this.chipWave && (this.chipWave = 1), void 0 != e.interval) this.interval = t.Config.intervals.findIndex(t => t.name == e.interval), -1 == this.interval && (this.interval = 0);
                else if (void 0 != e.chorus) {
                    const i = {
                        fifths: 5,
                        octaves: 6
                    };
                    this.interval = void 0 != i[e.chorus] ? i[e.chorus] : t.Config.intervals.findIndex(t => t.name == e.chorus), -1 == this.interval && (this.interval = 0)
                }
                void 0 != e.vibrato ? (this.vibrato = t.Config.vibratos.findIndex(t => t.name == e.vibrato), -1 == this.vibrato && (this.vibrato = 0)) : void 0 != e.effect && (this.vibrato = a.indexOf(e.effect), -1 == this.vibrato && (this.vibrato = 0)), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 2), "custom harmony" == e.chorus && (this.interval = 2, this.chord = 3)
            } else if (1 == this.type) {
                void 0 != e.vibrato ? (this.vibrato = t.Config.vibratos.findIndex(t => t.name == e.vibrato), -1 == this.vibrato && (this.vibrato = 0)) : void 0 != e.effect && (this.vibrato = a.indexOf(e.effect), -1 == this.vibrato && (this.vibrato = 0)), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 3), this.algorithm = t.Config.algorithms.findIndex(t => t.name == e.algorithm), -1 == this.algorithm && (this.algorithm = 0), this.feedbackType = t.Config.feedbacks.findIndex(t => t.name == e.feedbackType), -1 == this.feedbackType && (this.feedbackType = 0), void 0 != e.feedbackAmplitude ? this.feedbackAmplitude = r(0, t.Config.operatorAmplitudeMax + 1, 0 | e.feedbackAmplitude) : this.feedbackAmplitude = 0;
                const i = {
                    "pluck 1": 6,
                    "pluck 2": 7,
                    "pluck 3": 8
                };
                this.feedbackEnvelope = void 0 != i[e.feedbackEnvelope] ? i[e.feedbackEnvelope] : t.Config.envelopes.findIndex(t => t.name == e.feedbackEnvelope), -1 == this.feedbackEnvelope && (this.feedbackEnvelope = 0);
                for (let s = 0; s < t.Config.operatorCount; s++) {
                    const n = this.operators[s];
                    let o = void 0;
                    e.operators && (o = e.operators[s]), void 0 == o && (o = {}), n.frequency = t.Config.operatorFrequencies.findIndex(t => t.name == o.frequency), -1 == n.frequency && (n.frequency = 0), void 0 != o.amplitude ? n.amplitude = r(0, t.Config.operatorAmplitudeMax + 1, 0 | o.amplitude) : n.amplitude = 0, n.envelope = void 0 != i[o.envelope] ? i[o.envelope] : t.Config.envelopes.findIndex(t => t.name == o.envelope), -1 == n.envelope && (n.envelope = 0)
                }
            } else if (7 == this.type) {
                if (void 0 != e.interval) this.interval = t.Config.intervals.findIndex(t => t.name == e.interval), -1 == this.interval && (this.interval = 0);
                else if (void 0 != e.chorus) {
                    const i = {
                        fifths: 5,
                        octaves: 6
                    };
                    this.interval = void 0 != i[e.chorus] ? i[e.chorus] : t.Config.intervals.findIndex(t => t.name == e.chorus), -1 == this.interval && (this.interval = 0)
                }
                if (void 0 != e.vibrato ? (this.vibrato = t.Config.vibratos.findIndex(t => t.name == e.vibrato), -1 == this.vibrato && (this.vibrato = 0)) : void 0 != e.effect && (this.vibrato = a.indexOf(e.effect), -1 == this.vibrato && (this.vibrato = 0)), this.chord = t.Config.chords.findIndex(t => t.name == e.chord), -1 == this.chord && (this.chord = 2), "custom harmony" == e.chorus && (this.interval = 2, this.chord = 3), e.customChipWave) {
                    for (let t = 0; t < 64; t++) this.customChipWave[t] = e.customChipWave[t];
                    let t = 0;
                    for (let e = 0; e < this.customChipWave.length; e++) t += this.customChipWave[e];
                    const i = t / this.customChipWave.length;
                    let s = 0,
                        n = 0;
                    for (let t = 0; t < this.customChipWave.length; t++) s += n, n = this.customChipWave[t] - i, this.customChipWaveIntegral[t] = s;
                    this.customChipWaveIntegral[64] = 0
                }
            } else {
                if (8 != this.type) throw new Error("Unrecognized instrument type.");
                if (void 0 != e.modChannels)
                    for (let i = 0; i < t.Config.modCount; i++) this.modChannels[i] = e.modChannels[i], this.modInstruments[i] = e.modInstruments[i], this.modSettings[i] = e.modSettings[i], this.modStatuses[i] = e.modStatuses[i]
            }
        }
        static frequencyFromPitch(t) {
            return 440 * Math.pow(2, (t - 69) / 12)
        }
        static drumsetIndexReferenceDelta(e) {
            return f.frequencyFromPitch(t.Config.spectrumBasePitch + 6 * e) / 44100
        }
        static T(t) {
            return 15 + Math.log(f.drumsetIndexReferenceDelta(t)) / Math.LN2
        }
        warmUp() {
            if (2 == this.type) t.getDrumWave(this.chipNoise);
            else if (5 == this.type) this.harmonicsWave.getCustomWave();
            else if (3 == this.type) this.spectrumWave.getCustomWave(8);
            else if (4 == this.type)
                for (let e = 0; e < t.Config.drumCount; e++) this.drumsetSpectrumWaves[e].getCustomWave(f.T(e))
        }
        getDrumWave() {
            if (2 == this.type) return t.getDrumWave(this.chipNoise);
            if (3 == this.type) return this.spectrumWave.getCustomWave(8);
            throw new Error("Unhandled instrument type in getDrumWave")
        }
        getDrumsetWave(t) {
            if (4 == this.type) return this.drumsetSpectrumWaves[t].getCustomWave(f.T(t));
            throw new Error("Unhandled instrument type in getDrumWave")
        }
        getTransition() {
            return 4 == this.type ? t.Config.transitions.dictionary["hard fade"] : 8 == this.type ? t.Config.transitions.dictionary.seamless : t.Config.transitions[this.transition]
        }
        getChord() {
            return 4 == this.type ? t.Config.chords.dictionary.harmony : t.Config.chords[this.chord]
        }
        getFilterCutoffOctaves() {
            return 4 == this.type ? 0 : .5 * (this.filterCutoff - (t.Config.filterCutoffRange - 1))
        }
        getFilterIsFirstOrder() {
            return 4 != this.type && 0 == this.filterResonance
        }
        getFilterResonance() {
            return 4 == this.type ? 1 : this.filterResonance
        }
        getFilterEnvelope() {
            if (4 == this.type) throw new Error("Can't getFilterEnvelope() for drumset.");
            return t.Config.envelopes[this.filterEnvelope]
        }
        getDrumsetEnvelope(e) {
            if (4 != this.type) throw new Error("Can't getDrumsetEnvelope() for non-drumset.");
            return t.Config.envelopes[this.drumsetEnvelopes[e]]
        }
    }
    let u, p;
    t.Instrument = f,
        function(t) {
            t[t.msForPitch = 0] = "msForPitch", t[t.msForNoise = 1] = "msForNoise", t[t.msForSong = 2] = "msForSong", t[t.msNone = 3] = "msNone"
        }(u = t.ModStatus || (t.ModStatus = {})),
        function(t) {
            t[t.mstNone = 0] = "mstNone", t[t.mstSongVolume = 1] = "mstSongVolume", t[t.mstTempo = 2] = "mstTempo", t[t.mstReverb = 3] = "mstReverb", t[t.mstNextBar = 4] = "mstNextBar", t[t.mstInsVolume = 5] = "mstInsVolume", t[t.mstPan = 6] = "mstPan", t[t.mstFilterCut = 7] = "mstFilterCut", t[t.mstFilterPeak = 8] = "mstFilterPeak", t[t.mstFMSlider1 = 9] = "mstFMSlider1", t[t.mstFMSlider2 = 10] = "mstFMSlider2", t[t.mstFMSlider3 = 11] = "mstFMSlider3", t[t.mstFMSlider4 = 12] = "mstFMSlider4", t[t.mstFMFeedback = 13] = "mstFMFeedback", t[t.mstPulseWidth = 14] = "mstPulseWidth", t[t.mstDetune = 15] = "mstDetune", t[t.mstVibratoDepth = 16] = "mstVibratoDepth", t[t.mstSongDetune = 17] = "mstSongDetune", t[t.mstMaxValue = 18] = "mstMaxValue"
        }(p = t.ModSetting || (t.ModSetting = {}));
    class y {
        constructor() {
            this.octave = 0, this.instruments = [], this.patterns = [], this.bars = [], this.muted = !1
        }
    }
    t.Channel = y;
    class b {
        constructor(e) {
            this.channels = [], this.mstMaxVols = new Map([
                [p.mstNone, 6],
                [p.mstSongVolume, 100],
                [p.mstTempo, t.Config.tempoMax - t.Config.tempoMin],
                [p.mstReverb, t.Config.reverbRange - 1],
                [p.mstNextBar, 1],
                [p.mstInsVolume, t.Config.volumeRange],
                [p.mstPan, t.Config.panMax],
                [p.mstFilterCut, t.Config.filterCutoffRange - 1],
                [p.mstFilterPeak, t.Config.filterResonanceRange - 1],
                [p.mstFMSlider1, 15],
                [p.mstFMSlider2, 15],
                [p.mstFMSlider3, 15],
                [p.mstFMSlider4, 15],
                [p.mstFMFeedback, 15],
                [p.mstPulseWidth, t.Config.pulseWidthRange],
                [p.mstDetune, t.Config.detuneMax - t.Config.detuneMin],
                [p.mstVibratoDepth, 50],
                [p.mstSongDetune, t.Config.songDetuneMax - t.Config.songDetuneMin]
            ]), this.getVolumeCap = ((e, i, s, n) => {
                if (e && void 0 != i && void 0 != s && void 0 != n) {
                    n = t.Config.modCount - n - 1;
                    let e = this.mstMaxVols.get(this.channels[i].instruments[s].modSettings[n]);
                    return void 0 != e ? e : 6
                }
                return 6
            }), this.getVolumeCapForSetting = ((t, e) => {
                if (t) {
                    let t = this.mstMaxVols.get(e);
                    return void 0 != t ? t : 6
                }
                return 6
            }), void 0 != e ? this.fromBase64String(e) : this.initToDefault(!0)
        }
        modValueToReal(e, i) {
            switch (i) {
                case p.mstTempo:
                    e += t.Config.tempoMin;
                    break;
                case p.mstInsVolume:
                    e -= t.Config.volumeRange / 2;
                    break;
                case p.mstDetune:
                    e += t.Config.detuneMin;
                    break;
                case p.mstSongDetune:
                    e += t.Config.songDetuneMin;
                    break;
                case p.mstFilterCut:
                case p.mstFilterPeak:
                case p.mstSongVolume:
                case p.mstPan:
                case p.mstReverb:
                case p.mstNextBar:
                case p.mstFMSlider1:
                case p.mstFMSlider2:
                case p.mstFMSlider3:
                case p.mstFMSlider4:
                case p.mstFMFeedback:
                case p.mstPulseWidth:
                case p.mstVibratoDepth:
                case p.mstNone:
            }
            return e
        }
        isSettingForSong(t) {
            switch (t) {
                case p.mstTempo:
                case p.mstReverb:
                case p.mstSongVolume:
                case p.mstNextBar:
                    return !0;
                default:
                    return !1
            }
        }
        realToModValue(e, i) {
            switch (i) {
                case p.mstTempo:
                    e -= t.Config.tempoMin;
                    break;
                case p.mstInsVolume:
                    e += t.Config.volumeRange / 2;
                    break;
                case p.mstDetune:
                    e -= t.Config.detuneMin;
                    break;
                case p.mstSongDetune:
                    e -= t.Config.songDetuneMin;
                    break;
                case p.mstFilterCut:
                case p.mstFilterPeak:
                case p.mstSongVolume:
                case p.mstPan:
                case p.mstReverb:
                case p.mstNextBar:
                case p.mstFMSlider1:
                case p.mstFMSlider2:
                case p.mstFMSlider3:
                case p.mstFMSlider4:
                case p.mstFMFeedback:
                case p.mstPulseWidth:
                case p.mstVibratoDepth:
                case p.mstNone:
            }
            return e
        }
        getChannelCount() {
            return this.pitchChannelCount + this.noiseChannelCount + this.modChannelCount
        }
        getChannelIsNoise(t) {
            return t >= this.pitchChannelCount && t < this.pitchChannelCount + this.noiseChannelCount
        }
        getChannelIsMod(t) {
            return t >= this.pitchChannelCount + this.noiseChannelCount
        }
        initToDefault(e = !0) {
            if (this.scale = 0, this.key = 0, this.loopStart = 0, this.loopLength = 4, this.tempo = 150, this.reverb = 0, this.beatsPerBar = 8, this.barCount = 16, this.patternsPerChannel = 8, this.rhythm = 1, this.instrumentsPerChannel = 1, this.title = "Unnamed", document.title = t.Config.versionDisplayName, e) {
                this.pitchChannelCount = 3, this.noiseChannelCount = 1, this.modChannelCount = 0;
                for (let t = 0; t < this.getChannelCount(); t++) {
                    this.channels.length <= t && (this.channels[t] = new y);
                    const e = this.channels[t];
                    e.octave = Math.max(3 - t, 0);
                    for (let t = 0; t < this.patternsPerChannel; t++) e.patterns.length <= t ? e.patterns[t] = new l : e.patterns[t].reset();
                    e.patterns.length = this.patternsPerChannel;
                    const i = t >= this.pitchChannelCount && t < this.pitchChannelCount + this.noiseChannelCount,
                        s = t >= this.pitchChannelCount + this.noiseChannelCount;
                    for (let t = 0; t < this.instrumentsPerChannel; t++) e.instruments.length <= t && (e.instruments[t] = new f(i, s)), e.instruments[t].setTypeAndReset(s ? 8 : i ? 2 : 0, i, s);
                    e.instruments.length = this.instrumentsPerChannel;
                    for (let t = 0; t < this.barCount; t++) e.bars[t] = t < 4 ? 1 : 0;
                    e.bars.length = this.barCount
                }
                this.channels.length = this.getChannelCount()
            }
        }
        toBase64String() {
            let i, s = [];
            s.push(b.R), s.push(e[b.L]), s.push(78);
            var o = encodeURIComponent(this.title);
            s.push(e[o.length >> 6], e[63 & o.length]);
            for (let t = 0; t < o.length; t++) s.push(o.charCodeAt(t));
            s.push(110, e[this.pitchChannelCount], e[this.noiseChannelCount], e[this.modChannelCount]), s.push(115, e[this.scale]), s.push(107, e[this.key]), s.push(108, e[this.loopStart >> 6], e[63 & this.loopStart]), s.push(101, e[this.loopLength - 1 >> 6], e[this.loopLength - 1 & 63]), s.push(116, e[this.tempo >> 6], e[63 & this.tempo]), s.push(109, e[this.reverb]), s.push(97, e[this.beatsPerBar - 1]), s.push(103, e[this.barCount - 1 >> 6], e[this.barCount - 1 & 63]), s.push(106, e[this.patternsPerChannel - 1 >> 6], e[this.patternsPerChannel - 1 & 63]), s.push(105, e[this.instrumentsPerChannel - 1]), s.push(114, e[this.rhythm]), s.push(111);
            for (let t = 0; t < this.getChannelCount(); t++) s.push(e[this.channels[t].octave]);
            for (let i = 0; i < this.getChannelCount(); i++)
                for (let o = 0; o < this.instrumentsPerChannel; o++) {
                    const r = this.channels[i].instruments[o];
                    if (s.push(84, e[r.type]), s.push(118, e[r.volume + t.Config.volumeRange / 2 >> 6], e[r.volume + t.Config.volumeRange / 2 & 63]), s.push(76, e[r.pan >> 6], e[63 & r.pan]), s.push(68, e[r.detune - t.Config.detuneMin >> 6], e[r.detune - t.Config.detuneMin & 63]), s.push(117, e[r.preset >> 6], e[63 & r.preset]), s.push(113, e[r.effects]), 4 != r.type && (s.push(100, e[r.transition]), s.push(102, e[r.filterCutoff]), s.push(121, e[r.filterResonance]), s.push(122, e[r.filterEnvelope]), s.push(67, e[r.chord])), 0 == r.type) s.push(119, e[r.chipWave]), s.push(99, e[r.vibrato]), s.push(104, e[r.interval]);
                    else if (1 == r.type) {
                        s.push(99, e[r.vibrato]), s.push(65, e[r.algorithm]), s.push(70, e[r.feedbackType]), s.push(66, e[r.feedbackAmplitude]), s.push(86, e[r.feedbackEnvelope]), s.push(81);
                        for (let i = 0; i < t.Config.operatorCount; i++) s.push(e[r.operators[i].frequency]);
                        s.push(80);
                        for (let i = 0; i < t.Config.operatorCount; i++) s.push(e[r.operators[i].amplitude]);
                        s.push(69);
                        for (let i = 0; i < t.Config.operatorCount; i++) s.push(e[r.operators[i].envelope])
                    } else if (7 == r.type) {
                        s.push(119, e[r.chipWave]), s.push(99, e[r.vibrato]), s.push(104, e[r.interval]), s.push(77);
                        for (let t = 0; t < 64; t++) s.push(e[r.customChipWave[t] + 24])
                    } else if (2 == r.type) s.push(119, e[r.chipNoise]);
                    else if (3 == r.type) {
                        s.push(83);
                        const e = new n;
                        for (let i = 0; i < t.Config.spectrumControlPoints; i++) e.write(t.Config.spectrumControlPointBits, r.spectrumWave.spectrum[i]);
                        e.encodeBase64(s)
                    } else if (4 == r.type) {
                        s.push(122);
                        for (let i = 0; i < t.Config.drumCount; i++) s.push(e[r.drumsetEnvelopes[i]]);
                        s.push(83);
                        const i = new n;
                        for (let e = 0; e < t.Config.drumCount; e++)
                            for (let s = 0; s < t.Config.spectrumControlPoints; s++) i.write(t.Config.spectrumControlPointBits, r.drumsetSpectrumWaves[e].spectrum[s]);
                        i.encodeBase64(s)
                    } else if (5 == r.type) {
                        s.push(99, e[r.vibrato]), s.push(104, e[r.interval]), s.push(72);
                        const i = new n;
                        for (let e = 0; e < t.Config.harmonicsControlPoints; e++) i.write(t.Config.harmonicsControlPointBits, r.harmonicsWave.harmonics[e]);
                        i.encodeBase64(s)
                    } else if (6 == r.type) s.push(99, e[r.vibrato]), s.push(87, e[r.pulseWidth], e[r.pulseEnvelope]);
                    else if (8 != r.type) throw new Error("Unknown instrument type.")
                }
            s.push(98), i = new n;
            let r = 0;
            for (; 1 << r < this.patternsPerChannel + 1;) r++;
            for (let t = 0; t < this.getChannelCount(); t++)
                for (let e = 0; e < this.barCount; e++) i.write(r, this.channels[t].bars[e]);
            i.encodeBase64(s), s.push(112), i = new n;
            const h = new n;
            let a = 0;
            for (; 1 << a < this.instrumentsPerChannel;) a++;
            for (let e = 0; e < this.getChannelCount(); e++) {
                const s = this.getChannelIsNoise(e),
                    n = this.getChannelIsMod(e);
                if (n)
                    for (let s = 0; s < this.instrumentsPerChannel; s++) {
                        let n = this.channels[e].instruments[s];
                        for (let e = 0; e < t.Config.modCount; e++) {
                            const t = n.modStatuses[e],
                                s = n.modChannels[e],
                                o = n.modInstruments[e],
                                r = n.modSettings[e];
                            i.write(2, t), t != u.msForPitch && t != u.msForNoise || (i.write(8, s), i.write(a, o)), t != u.msNone && i.write(6, r)
                        }
                    }
                const o = s || n ? 0 : 12 * this.channels[e].octave;
                let r = (s || n ? 4 : 12) + o;
                const l = n ? [0, 1, 2, 3, 4, 5] : s ? [4, 6, 7, 2, 3, 8, 0, 10] : [12, 19, 24, 31, 36, 7, 0],
                    c = [];
                for (let t = 0; t < l.length; t++) l[t] += o;
                for (const s of this.channels[e].patterns)
                    if (i.write(a, s.instrument), s.notes.length > 0) {
                        i.write(1, 1);
                        let e = 0;
                        for (const o of s.notes) {
                            o.start < e && n && (i.write(2, 0), i.write(1, 1), i.writePartDuration(e - o.start)), o.start > e && (i.write(2, 0), n && i.write(1, 0), i.writePartDuration(o.start - e)), h.clear();
                            for (let t = 1; t < o.pitches.length; t++) h.write(1, 1);
                            o.pitches.length < t.Config.maxChordSize && h.write(1, 0), h.writePinCount(o.pins.length - 1), n ? h.write(9, o.pins[0].volume) : h.write(3, o.pins[0].volume);
                            let s = 0,
                                a = o.pitches[0],
                                d = a;
                            const m = [];
                            for (let t = 1; t < o.pins.length; t++) {
                                const e = o.pins[t],
                                    i = a + e.interval;
                                d != i ? (h.write(1, 1), m.push(i), d = i) : h.write(1, 0), h.writePartDuration(e.time - s), s = e.time, n ? h.write(9, e.volume) : h.write(3, e.volume)
                            }
                            const f = String.fromCharCode.apply(null, h.encodeBase64([])),
                                u = c.indexOf(f); - 1 == u ? (i.write(2, 1), i.concat(h)) : (i.write(1, 1), i.writeLongTail(0, 0, u), c.splice(u, 1)), c.unshift(f), c.length > 10 && c.pop();
                            const p = o.pitches.concat(m);
                            for (let t = 0; t < p.length; t++) {
                                const e = p[t],
                                    s = l.indexOf(e);
                                if (-1 == s) {
                                    let t = 0,
                                        s = r;
                                    if (s < e)
                                        for (; s != e;) s++, -1 == l.indexOf(s) && t++;
                                    else
                                        for (; s != e;) s--, -1 == l.indexOf(s) && t--;
                                    i.write(1, 0), i.writePitchInterval(t)
                                } else i.write(1, 1), i.write(3, s), l.splice(s, 1);
                                l.unshift(e), l.length > 8 && l.pop(), r = t == o.pitches.length - 1 ? o.pitches[0] : e
                            }
                            e = o.end
                        }
                        e < this.beatsPerBar * t.Config.partsPerBeat + +n && (i.write(2, 0), n && i.write(1, 0), i.writePartDuration(this.beatsPerBar * t.Config.partsPerBeat + +n - e))
                    } else i.write(1, 0)
            }
            let l = i.lengthBase64(),
                c = [];
            for (; l > 0;) c.unshift(e[63 & l]), l >>= 6;
            s.push(e[c.length]), Array.prototype.push.apply(s, c), i.encodeBase64(s);
            if (s.length < 64e3) return String.fromCharCode.apply(null, s); {
                let t = "";
                for (let e = 0; e < s.length; e += 64e3) t += String.fromCharCode.apply(null, s.slice(e, e + 64e3));
                return t
            }
        }
        fromBase64String(e) {
            if (null == e || "" == e) return void this.initToDefault(!0);
            let n = 0;
            for (; e.charCodeAt(n) <= 32;) n++;
            if (35 == e.charCodeAt(n) && n++, 123 == e.charCodeAt(n)) return void this.fromJsonObject(JSON.parse(0 == n ? e : e.substring(n)));
            var c = "";
            106 == e.charCodeAt(n) ? (c = "jummbox", n++) : c = "beepbox";
            const d = i[e.charCodeAt(n++)];
            if ("beepbox" == c && (-1 == d || d > b.H || d < b.$)) return;
            if ("jummbox" == c && (-1 == d || d > b.L || d < b.I)) return;
            const m = d < 2,
                p = d < 3,
                g = d < 4,
                v = d < 5,
                w = d < 6,
                k = d < 7,
                x = d < 8;
            if (this.initToDefault("beepbox" == c && w), p && "beepbox" == c) {
                for (const t of this.channels) t.instruments[0].transition = 0;
                this.channels[3].instruments[0].chipNoise = 0
            }
            let M, E, C = 0,
                S = -1,
                q = [];
            for (; n < e.length;) switch (M = e.charCodeAt(n++)) {
                case 78:
                    var P = (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)];
                    this.title = decodeURIComponent(e.substring(n, n + P)), document.title = this.title + " - " + t.Config.versionDisplayName, n += P;
                    break;
                case 110:
                    this.pitchChannelCount = i[e.charCodeAt(n++)], this.noiseChannelCount = i[e.charCodeAt(n++)], this.modChannelCount = "beepbox" == c || m ? 0 : i[e.charCodeAt(n++)], this.pitchChannelCount = h(t.Config.pitchChannelCountMin, t.Config.pitchChannelCountMax, this.pitchChannelCount), this.noiseChannelCount = h(t.Config.noiseChannelCountMin, t.Config.noiseChannelCountMax, this.noiseChannelCount), this.modChannelCount = h(t.Config.modChannelCountMin, t.Config.modChannelCountMax, this.modChannelCount);
                    for (let t = this.channels.length; t < this.getChannelCount(); t++) this.channels[t] = new y;
                    this.channels.length = this.getChannelCount();
                    break;
                case 115:
                    this.scale = i[e.charCodeAt(n++)], "beepbox" == c && (this.scale = 0);
                    break;
                case 107:
                    this.key = r(0, t.Config.keys.length, k && "beepbox" == c ? 11 - i[e.charCodeAt(n++)] : i[e.charCodeAt(n++)]);
                    break;
                case 108:
                    this.loopStart = v && "beepbox" == c ? i[e.charCodeAt(n++)] : (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)];
                    break;
                case 101:
                    this.loopLength = v && "beepbox" == c ? i[e.charCodeAt(n++)] : (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)] + 1;
                    break;
                case 116:
                    this.tempo = g && "beepbox" == c ? [95, 120, 151, 190][i[e.charCodeAt(n++)]] : k && "beepbox" == c ? [88, 95, 103, 111, 120, 130, 140, 151, 163, 176, 190, 206, 222, 240, 259][i[e.charCodeAt(n++)]] : i[e.charCodeAt(n++)] << 6 | i[e.charCodeAt(n++)], this.tempo = r(t.Config.tempoMin, t.Config.tempoMax + 1, this.tempo);
                    break;
                case 109:
                    "beepbox" == c ? (this.reverb = 8 * i[e.charCodeAt(n++)], this.reverb = r(0, t.Config.reverbRange, this.reverb)) : (this.reverb = i[e.charCodeAt(n++)], this.reverb = r(0, t.Config.reverbRange, this.reverb));
                    break;
                case 97:
                    this.beatsPerBar = p && "beepbox" == c ? [6, 7, 8, 9, 10][i[e.charCodeAt(n++)]] : i[e.charCodeAt(n++)] + 1, this.beatsPerBar = Math.max(t.Config.beatsPerBarMin, Math.min(t.Config.beatsPerBarMax, this.beatsPerBar));
                    break;
                case 103: {
                    const s = (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)] + 1;
                    this.barCount = h(t.Config.barCountMin, t.Config.barCountMax, s);
                    for (let t = 0; t < this.getChannelCount(); t++) {
                        for (let e = this.channels[t].bars.length; e < this.barCount; e++) this.channels[t].bars[e] = e < 4 ? 1 : 0;
                        this.channels[t].bars.length = this.barCount
                    }
                }
                break;
            case 106:
                this.patternsPerChannel = "beepbox" == c && x ? i[e.charCodeAt(n++)] + 1 : (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)] + 1, this.patternsPerChannel = h(1, t.Config.barCountMax, this.patternsPerChannel);
                for (let t = 0; t < this.getChannelCount(); t++) {
                    for (let e = this.channels[t].patterns.length; e < this.patternsPerChannel; e++) this.channels[t].patterns[e] = new l;
                    this.channels[t].patterns.length = this.patternsPerChannel
                }
                break;
            case 105: {
                const s = i[e.charCodeAt(n++)] + 1;
                this.instrumentsPerChannel = h(t.Config.instrumentsPerChannelMin, t.Config.instrumentsPerChannelMax, s);
                for (let t = 0; t < this.getChannelCount(); t++) {
                    const e = t >= this.pitchChannelCount && t < this.pitchChannelCount + this.noiseChannelCount,
                        i = t >= this.pitchChannelCount + this.noiseChannelCount;
                    for (let s = this.channels[t].instruments.length; s < this.instrumentsPerChannel; s++) this.channels[t].instruments[s] = new f(e, i);
                    if (this.channels[t].instruments.length = this.instrumentsPerChannel, w && "beepbox" == c)
                        for (let s = 0; s < this.instrumentsPerChannel; s++) this.channels[t].instruments[s].setTypeAndReset(e ? 2 : 0, e, i)
                }
            }
            break;
            case 114:
                this.rhythm = i[e.charCodeAt(n++)];
                break;
            case 111:
                if (p && "beepbox" == c) E = i[e.charCodeAt(n++)], this.channels[E].octave = r(0, t.Config.maxScrollableOctaves + 1, i[e.charCodeAt(n++)]), q[E] = r(0, t.Config.maxScrollableOctaves - +(window.localStorage.getItem("extraOctaves") || "0") + 1, this.channels[E].octave);
                else
                    for (E = 0; E < this.getChannelCount(); E++) this.channels[E].octave = r(0, t.Config.maxScrollableOctaves + 1, i[e.charCodeAt(n++)]), q[E] = r(0, t.Config.maxScrollableOctaves - +(window.localStorage.getItem("extraOctaves") || "0") + 1, this.channels[E].octave);
                break;
            case 84: {
                ++S >= this.instrumentsPerChannel && (C++, S = 0), h(0, this.channels.length - 1, C);
                const t = this.channels[C].instruments[S],
                    s = r(0, 9, i[e.charCodeAt(n++)]);
                t.setTypeAndReset(s, C >= this.pitchChannelCount && C < this.pitchChannelCount + this.noiseChannelCount, C >= this.pitchChannelCount + this.noiseChannelCount)
            }
            break;
            case 117: {
                const t = i[e.charCodeAt(n++)] << 6 | i[e.charCodeAt(n++)];
                this.channels[C].instruments[S].preset = t
            }
            break;
            case 119:
                if (p && "beepbox" == c) {
                    const s = [1, 2, 3, 4, 5, 6, 7, 8, 0],
                        o = i[e.charCodeAt(n++)];
                    this.channels[o].instruments[0].chipWave = r(0, t.Config.chipWaves.length, 0 | s[i[e.charCodeAt(n++)]])
                } else if (w && "beepbox" == c) {
                    const s = [1, 2, 3, 4, 5, 6, 7, 8, 0];
                    for (let o = 0; o < this.getChannelCount(); o++)
                        for (let h = 0; h < this.instrumentsPerChannel; h++) o >= this.pitchChannelCount ? this.channels[o].instruments[h].chipNoise = r(0, t.Config.chipNoises.length, i[e.charCodeAt(n++)]) : this.channels[o].instruments[h].chipWave = r(0, t.Config.chipWaves.length, 0 | s[i[e.charCodeAt(n++)]])
                } else if (k && "beepbox" == c) {
                    const s = [1, 2, 3, 4, 5, 6, 7, 8, 0];
                    C >= this.pitchChannelCount ? this.channels[C].instruments[S].chipNoise = r(0, t.Config.chipNoises.length, i[e.charCodeAt(n++)]) : this.channels[C].instruments[S].chipWave = r(0, t.Config.chipWaves.length, 0 | s[i[e.charCodeAt(n++)]])
                } else C >= this.pitchChannelCount ? this.channels[C].instruments[S].chipNoise = r(0, t.Config.chipNoises.length, i[e.charCodeAt(n++)]) : this.channels[C].instruments[S].chipWave = r(0, t.Config.chipWaves.length, i[e.charCodeAt(n++)]);
                break;
            case 102:
                if (k && "beepbox" == c) {
                    const t = [10, 6, 3, 0, 8, 5, 2],
                        s = [1, 1, 1, 1, 18, 19, 20],
                        o = ["none", "bright", "medium", "soft", "decay bright", "decay medium", "decay soft"];
                    if (p && "beepbox" == c) {
                        E = i[e.charCodeAt(n++)];
                        const h = this.channels[E].instruments[0],
                            a = [1, 3, 4, 5][r(0, o.length, i[e.charCodeAt(n++)])];
                        h.filterCutoff = t[a], h.filterEnvelope = s[a], h.filterResonance = 0
                    } else if (w && "beepbox" == c)
                        for (E = 0; E < this.getChannelCount(); E++)
                            for (let h = 0; h < this.instrumentsPerChannel; h++) {
                                const a = this.channels[E].instruments[h],
                                    l = r(0, o.length, i[e.charCodeAt(n++)] + 1);
                                E < this.pitchChannelCount ? (a.filterCutoff = t[l], a.filterEnvelope = s[l], a.filterResonance = 0) : (a.filterCutoff = 10, a.filterEnvelope = 1, a.filterResonance = 0)
                            } else {
                                const h = r(0, o.length, i[e.charCodeAt(n++)]),
                                    a = this.channels[C].instruments[S];
                                a.filterCutoff = t[h], a.filterEnvelope = s[h], a.filterResonance = 0
                            }
                } else {
                    this.channels[C].instruments[S].filterCutoff = r(0, t.Config.filterCutoffRange, i[e.charCodeAt(n++)])
                }
                break;
            case 121:
                this.channels[C].instruments[S].filterResonance = r(0, t.Config.filterResonanceRange, i[e.charCodeAt(n++)]);
                break;
            case 122: {
                const s = this.channels[C].instruments[S];
                if (4 == s.type)
                    for (let o = 0; o < t.Config.drumCount; o++) s.drumsetEnvelopes[o] = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)]);
                else s.filterEnvelope = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)])
            }
            break;
            case 87:
                if ("beepbox" == c) {
                    const s = this.channels[C].instruments[S];
                    s.pulseWidth = Math.round(r(0, t.Config.pulseWidthRange + 1, 50 * Math.pow(.5, .5 * (7 - i[e.charCodeAt(n++)])))), s.pulseEnvelope = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)])
                } else {
                    const s = this.channels[C].instruments[S];
                    s.pulseWidth = r(0, t.Config.pulseWidthRange + 1, i[e.charCodeAt(n++)]), s.pulseEnvelope = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)])
                }
                break;
            case 100:
                if (p && "beepbox" == c) E = i[e.charCodeAt(n++)], this.channels[E].instruments[0].transition = r(0, t.Config.transitions.length, i[e.charCodeAt(n++)]);
                else if (w && "beepbox" == c)
                    for (E = 0; E < this.getChannelCount(); E++)
                        for (let s = 0; s < this.instrumentsPerChannel; s++) this.channels[E].instruments[s].transition = r(0, t.Config.transitions.length, i[e.charCodeAt(n++)]);
                else this.channels[C].instruments[S].transition = r(0, t.Config.transitions.length, i[e.charCodeAt(n++)]);
                break;
            case 99:
                if (p && "beepbox" == c) {
                    const t = [0, 3, 2, 0],
                        s = [1, 1, 1, 13],
                        o = i[e.charCodeAt(n++)],
                        h = r(0, t.length, i[e.charCodeAt(n++)]),
                        a = this.channels[o].instruments[0];
                    a.vibrato = t[h], a.filterEnvelope = 1 == a.filterEnvelope ? s[h] : a.filterEnvelope
                } else if (w && "beepbox" == c) {
                    const t = [0, 1, 2, 3, 0, 0],
                        s = [1, 1, 1, 1, 16, 13];
                    for (let o = 0; o < this.getChannelCount(); o++)
                        for (let h = 0; h < this.instrumentsPerChannel; h++) {
                            const a = r(0, t.length, i[e.charCodeAt(n++)]),
                                l = this.channels[o].instruments[h];
                            l.vibrato = t[a], l.filterEnvelope = 1 == l.filterEnvelope ? s[a] : l.filterEnvelope
                        }
                } else if (k && "beepbox" == c) {
                    const t = [0, 1, 2, 3, 0, 0],
                        s = [1, 1, 1, 1, 16, 13],
                        o = r(0, t.length, i[e.charCodeAt(n++)]),
                        h = this.channels[C].instruments[S];
                    h.vibrato = t[o], h.filterEnvelope = 1 == h.filterEnvelope ? s[o] : h.filterEnvelope
                } else {
                    const s = r(0, t.Config.vibratos.length, i[e.charCodeAt(n++)]);
                    this.channels[C].instruments[S].vibrato = s
                }
                break;
            case 104:
                if (p && "beepbox" == c) E = i[e.charCodeAt(n++)], this.channels[E].instruments[0].interval = r(0, t.Config.intervals.length, i[e.charCodeAt(n++)]);
                else if (w && "beepbox" == c)
                    for (E = 0; E < this.getChannelCount(); E++)
                        for (let s = 0; s < this.instrumentsPerChannel; s++) {
                            const o = i[e.charCodeAt(n++)];
                            let h = r(0, t.Config.intervals.length, o);
                            8 == o && (h = 2, this.channels[E].instruments[s].chord = 3), this.channels[E].instruments[s].interval = h
                        } else if (k && "beepbox" == c) {
                            const s = i[e.charCodeAt(n++)];
                            let o = r(0, t.Config.intervals.length, s);
                            8 == s && (o = 2, this.channels[C].instruments[S].chord = 3), this.channels[C].instruments[S].interval = o
                        } else this.channels[C].instruments[S].interval = r(0, t.Config.intervals.length, i[e.charCodeAt(n++)]);
                break;
            case 67:
                this.channels[C].instruments[S].chord = r(0, t.Config.chords.length, i[e.charCodeAt(n++)]);
                break;
            case 113:
                this.channels[C].instruments[S].effects = r(0, t.Config.effectsNames.length, i[e.charCodeAt(n++)]);
                break;
            case 118:
                if (p && "beepbox" == c) {
                    E = i[e.charCodeAt(n++)], this.channels[E].instruments[0].volume = Math.round(r(-t.Config.volumeRange, 1, 5 * -i[e.charCodeAt(n++)]))
                } else if (w && "beepbox" == c)
                    for (E = 0; E < this.getChannelCount(); E++)
                        for (let s = 0; s < this.instrumentsPerChannel; s++) {
                            this.channels[E].instruments[s].volume = Math.round(r(-t.Config.volumeRange, 1, 5 * -i[e.charCodeAt(n++)]))
                        } else if (k && "beepbox" == c) {
                            this.channels[C].instruments[S].volume = Math.round(r(-t.Config.volumeRange, 1, 5 * -i[e.charCodeAt(n++)]))
                        } else if ("beepbox" == c) {
                    this.channels[C].instruments[S].volume = Math.round(r(-t.Config.volumeRange / 2, 1, 25 * -i[e.charCodeAt(n++)] / 7))
                } else {
                    this.channels[C].instruments[S].volume = Math.round(r(-t.Config.volumeRange / 2, t.Config.volumeRange / 2 + 1, (i[e.charCodeAt(n++)] << 6 | i[e.charCodeAt(n++)]) - t.Config.volumeRange / 2))
                }
                break;
            case 76: {
                const s = this.channels[C].instruments[S];
                s.pan = r(0, t.Config.panMax + 1, "beepbox" == c ? Math.round(i[e.charCodeAt(n++)] * (t.Config.panMax / 8)) : (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)])
            }
            break;
            case 68:
                this.channels[C].instruments[S].detune = r(t.Config.detuneMin, t.Config.detuneMax + 1, (i[e.charCodeAt(n++)] << 6) + i[e.charCodeAt(n++)] + t.Config.detuneMin);
                break;
            case 77: {
                let t = this.channels[C].instruments[S];
                for (let s = 0; s < 64; s++) t.customChipWave[s] = r(-24, 25, i[e.charCodeAt(n++)] - 24);
                let s = 0;
                for (let e = 0; e < t.customChipWave.length; e++) s += t.customChipWave[e];
                const o = s / t.customChipWave.length;
                let h = 0,
                    a = 0;
                for (let e = 0; e < t.customChipWave.length; e++) h += a, a = t.customChipWave[e] - o, t.customChipWaveIntegral[e] = h;
                t.customChipWaveIntegral[64] = 0
            }
            break;
            case 65:
                this.channels[C].instruments[S].algorithm = r(0, t.Config.algorithms.length, i[e.charCodeAt(n++)]);
                break;
            case 70:
                this.channels[C].instruments[S].feedbackType = r(0, t.Config.feedbacks.length, i[e.charCodeAt(n++)]);
                break;
            case 66:
                this.channels[C].instruments[S].feedbackAmplitude = r(0, t.Config.operatorAmplitudeMax + 1, i[e.charCodeAt(n++)]);
                break;
            case 86:
                this.channels[C].instruments[S].feedbackEnvelope = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)]);
                break;
            case 81:
                for (let s = 0; s < t.Config.operatorCount; s++) this.channels[C].instruments[S].operators[s].frequency = r(0, t.Config.operatorFrequencies.length, i[e.charCodeAt(n++)]);
                break;
            case 80:
                for (let s = 0; s < t.Config.operatorCount; s++) this.channels[C].instruments[S].operators[s].amplitude = r(0, t.Config.operatorAmplitudeMax + 1, i[e.charCodeAt(n++)]);
                break;
            case 69:
                for (let s = 0; s < t.Config.operatorCount; s++) this.channels[C].instruments[S].operators[s].envelope = r(0, t.Config.envelopes.length, i[e.charCodeAt(n++)]);
                break;
            case 83: {
                const i = this.channels[C].instruments[S];
                if (3 == i.type) {
                    const o = Math.ceil(t.Config.spectrumControlPoints * t.Config.spectrumControlPointBits / 6),
                        r = new s(e, n, n + o);
                    for (let e = 0; e < t.Config.spectrumControlPoints; e++) i.spectrumWave.spectrum[e] = r.read(t.Config.spectrumControlPointBits);
                    i.spectrumWave.markCustomWaveDirty(), n += o
                } else {
                    if (4 != i.type) throw new Error("Unhandled instrument type for spectrum song tag code."); {
                        const o = Math.ceil(t.Config.drumCount * t.Config.spectrumControlPoints * t.Config.spectrumControlPointBits / 6),
                            r = new s(e, n, n + o);
                        for (let e = 0; e < t.Config.drumCount; e++) {
                            for (let s = 0; s < t.Config.spectrumControlPoints; s++) i.drumsetSpectrumWaves[e].spectrum[s] = r.read(t.Config.spectrumControlPointBits);
                            i.drumsetSpectrumWaves[e].markCustomWaveDirty()
                        }
                        n += o
                    }
                }
            }
            break;
            case 72: {
                const i = this.channels[C].instruments[S],
                    o = Math.ceil(t.Config.harmonicsControlPoints * t.Config.harmonicsControlPointBits / 6),
                    r = new s(e, n, n + o);
                for (let e = 0; e < t.Config.harmonicsControlPoints; e++) i.harmonicsWave.harmonics[e] = r.read(t.Config.harmonicsControlPointBits);
                i.harmonicsWave.markCustomWaveDirty(), n += o
            }
            break;
            case 98: {
                let t;
                if (p && "beepbox" == c) {
                    E = i[e.charCodeAt(n++)];
                    const o = i[e.charCodeAt(n++)];
                    t = Math.ceil(.5 * o);
                    const r = new s(e, n, n + t);
                    for (let t = 0; t < o; t++) this.channels[E].bars[t] = r.read(3) + 1
                } else if (v && "beepbox" == c) {
                    let i = 0;
                    for (; 1 << i < this.patternsPerChannel;) i++;
                    t = Math.ceil(this.getChannelCount() * this.barCount * i / 6);
                    const o = new s(e, n, n + t);
                    for (let t = 0; t < this.getChannelCount(); t++)
                        for (let e = 0; e < this.barCount; e++) this.channels[t].bars[e] = o.read(i) + 1
                } else {
                    let i = 0;
                    for (; 1 << i < this.patternsPerChannel + 1;) i++;
                    t = Math.ceil(this.getChannelCount() * this.barCount * i / 6);
                    const o = new s(e, n, n + t);
                    for (let t = 0; t < this.getChannelCount(); t++)
                        for (let e = 0; e < this.barCount; e++) this.channels[t].bars[e] = o.read(i)
                }
                n += t
            }
            break;
            case 112: {
                let l, d = 0;
                if (p && "beepbox" == c) l = i[e.charCodeAt(n++)], n++, d = i[e.charCodeAt(n++)], d <<= 6, d += i[e.charCodeAt(n++)];
                else {
                    l = 0;
                    let t = h(1, 4, i[e.charCodeAt(n++)]);
                    for (; t > 0;) d <<= 6, d += i[e.charCodeAt(n++)], t--
                }
                const m = new s(e, n, n + d);
                n += d;
                let f = 0;
                for (; 1 << f < this.instrumentsPerChannel;) f++;
                for (;;) {
                    const e = this.getChannelIsNoise(l),
                        i = this.getChannelIsMod(l);
                    if (i)
                        for (let e = 0; e < this.instrumentsPerChannel; e++) {
                            let i = this.channels[l].instruments[e];
                            for (let e = 0; e < t.Config.modCount; e++) i.modStatuses[e] = m.read(2), i.modStatuses[e] != u.msForPitch && i.modStatuses[e] != u.msForNoise || (i.modStatuses[e] == u.msForPitch ? i.modChannels[e] = r(0, this.pitchChannelCount + 1, m.read(8)) : i.modChannels[e] = r(0, this.noiseChannelCount + 1, m.read(8)), i.modInstruments[e] = r(0, this.instrumentsPerChannel + 1, m.read(f))), i.modStatuses[e] != u.msNone && (i.modSettings[e] = m.read(6))
                        }
                    const s = e || i ? 0 : 12 * this.channels[l].octave;
                    let n = null,
                        d = null,
                        y = (e || i ? 4 : 12) + s;
                    const b = i ? [0, 1, 2, 3, 4, 5] : e ? [4, 6, 7, 2, 3, 8, 0, 10] : [12, 19, 24, 31, 36, 7, 0],
                        g = [];
                    for (let t = 0; t < b.length; t++) b[t] += s;
                    for (let e = 0; e < this.patternsPerChannel; e++) {
                        const s = this.channels[l].patterns[e];
                        if (s.reset(), s.instrument = m.read(f), ("beepbox" != c || !p) && 0 == m.read(1)) continue;
                        let r = 0;
                        const u = s.notes;
                        for (; r < this.beatsPerBar * t.Config.partsPerBeat + +i;) {
                            const e = 1 == m.read(1);
                            let s = !1,
                                l = 0;
                            if (e ? l = h(0, g.length - 1, m.readLongTail(0, 0)) : s = 1 == m.read(1), e || s) {
                                let s, f, p;
                                if (e) s = g[l], g.splice(l, 1);
                                else {
                                    for ((s = {}).pitchCount = 1; s.pitchCount < t.Config.maxChordSize && 1 == m.read(1);) s.pitchCount++;
                                    s.pinCount = m.readPinCount(), s.initialVolume = "beepbox" == c ? 2 * m.read(2) : i ? m.read(9) : m.read(3), s.pins = [], s.length = 0, s.bendCount = 0;
                                    for (let e = 0; e < s.pinCount; e++)(f = {}).pitchBend = 1 == m.read(1), f.pitchBend && s.bendCount++, s.length += k && "beepbox" == c ? m.readLegacyPartDuration() * t.Config.partsPerBeat / t.Config.rhythms[this.rhythm].stepsPerBeat : m.readPartDuration(), f.time = s.length, f.volume = "beepbox" == c ? 2 * m.read(2) : i ? m.read(9) : m.read(3), s.pins.push(f)
                                }
                                g.unshift(s), g.length > 10 && g.pop(), (n = new a(0, r, r + s.length, s.initialVolume)).pitches = [], n.pins.length = 1;
                                const v = [];
                                for (let t = 0; t < s.pitchCount + s.bendCount; t++) {
                                    if (1 == m.read(1)) {
                                        const t = h(0, b.length - 1, m.read(3));
                                        p = b[t], b.splice(t, 1)
                                    } else {
                                        const t = m.readPitchInterval();
                                        p = y;
                                        let e = t;
                                        for (; e > 0;) {
                                            for (p++; - 1 != b.indexOf(p);) p++;
                                            e--
                                        }
                                        for (; e < 0;) {
                                            for (p--; - 1 != b.indexOf(p);) p--;
                                            e++
                                        }
                                    }
                                    b.unshift(p), b.length > 8 && b.pop(), t < s.pitchCount ? n.pitches.push(p) : v.push(p), y = t == s.pitchCount - 1 ? n.pitches[0] : p
                                }
                                v.unshift(n.pitches[0]);
                                for (const t of s.pins) t.pitchBend && v.shift(), d = o(v[0] - n.pitches[0], t.time, t.volume), n.pins.push(d);
                                r = h(0, this.beatsPerBar * t.Config.partsPerBeat, n.end), u.push(n)
                            } else if (i) {
                                const t = 1 == m.read(1),
                                    e = m.readPartDuration();
                                t ? r -= e : r += e
                            } else {
                                r += k && "beepbox" == c ? m.readLegacyPartDuration() * t.Config.partsPerBeat / t.Config.rhythms[this.rhythm].stepsPerBeat : m.readPartDuration()
                            }
                        }
                    }
                    if (p && "beepbox" == c) break;
                    if (++l >= this.getChannelCount()) break
                }
            }
            break;
            default:
                throw new Error("Unrecognized song tag code " + String.fromCharCode(M) + " at index " + (n - 1))
            }
            for (let t = 0; t < this.getChannelCount(); t++) null != q[t] && (this.channels[t].octave = q[t])
        }
        toJsonObject(e = !0, i = 1, s = !0) {
            const n = [];
            for (let o = 0; o < this.getChannelCount(); o++) {
                const r = [],
                    h = this.getChannelIsNoise(o),
                    a = this.getChannelIsMod(o);
                for (let t = 0; t < this.instrumentsPerChannel; t++) r.push(this.channels[o].instruments[t].toJsonObject());
                const l = [];
                for (const e of this.channels[o].patterns) {
                    const i = [];
                    for (const s of e.notes) {
                        let n = this.getVolumeCapForSetting(a, this.channels[o].instruments[e.instrument].modSettings[t.Config.modCount - s.pitches[0] - 1]);
                        const r = [];
                        for (const e of s.pins) r.push({
                            tick: (e.time + s.start) * t.Config.rhythms[this.rhythm].stepsPerBeat / t.Config.partsPerBeat,
                            pitchBend: e.interval,
                            volume: Math.round(100 * e.volume / n)
                        });
                        i.push({
                            pitches: s.pitches,
                            points: r
                        })
                    }
                    l.push({
                        instrument: e.instrument + 1,
                        notes: i
                    })
                }
                const c = [];
                if (e)
                    for (let t = 0; t < this.loopStart; t++) c.push(this.channels[o].bars[t]);
                for (let t = 0; t < i; t++)
                    for (let t = this.loopStart; t < this.loopStart + this.loopLength; t++) c.push(this.channels[o].bars[t]);
                if (s)
                    for (let t = this.loopStart + this.loopLength; t < this.barCount; t++) c.push(this.channels[o].bars[t]);
                n.push({
                    type: a ? "mod" : h ? "drum" : "pitch",
                    octaveScrollBar: this.channels[o].octave,
                    instruments: r,
                    patterns: l,
                    sequence: c
                })
            }
            return {
                name: this.title,
                format: b._,
                version: b.L,
                scale: t.Config.scales[this.scale].name,
                key: t.Config.keys[this.key].name,
                introBars: this.loopStart,
                loopBars: this.loopLength,
                beatsPerBar: this.beatsPerBar,
                ticksPerBeat: t.Config.rhythms[this.rhythm].stepsPerBeat,
                beatsPerMinute: this.tempo,
                reverb: this.reverb,
                channels: n
            }
        }
        fromJsonObject(e) {
            if (this.initToDefault(!0), !e) return;
            if (void 0 != e.name && (this.title = e.name), this.scale = 0, void 0 != e.scale) {
                const i = {
                        "romani :)": "dbl harmonic :)",
                        "romani :(": "dbl harmonic :(",
                        enigma: "strange"
                    },
                    s = void 0 != i[e.scale] ? i[e.scale] : e.scale,
                    n = t.Config.scales.findIndex(t => t.name == s); - 1 != n && (this.scale = n)
            }
            if (void 0 != e.key)
                if ("number" == typeof e.key) this.key = (e.key + 1200 >>> 0) % t.Config.keys.length;
                else if ("string" == typeof e.key) {
                const t = e.key,
                    i = t.charAt(0).toUpperCase(),
                    s = t.charAt(1).toLowerCase();
                let n = {
                    C: 0,
                    D: 2,
                    E: 4,
                    F: 5,
                    G: 7,
                    A: 9,
                    B: 11
                } [i];
                const o = {
                    "#": 1,
                    "♯": 1,
                    b: -1,
                    "♭": -1
                } [s];
                void 0 != n && (void 0 != o && (n += o), n < 0 && (n += 12), n %= 12, this.key = n)
            }
            void 0 != e.beatsPerMinute && (this.tempo = r(t.Config.tempoMin, t.Config.tempoMax + 1, 0 | e.beatsPerMinute)), void 0 != e.reverb && (this.reverb = r(0, t.Config.reverbRange, 0 | e.reverb)), void 0 != e.beatsPerBar && (this.beatsPerBar = Math.max(t.Config.beatsPerBarMin, Math.min(t.Config.beatsPerBarMax, 0 | e.beatsPerBar)));
            let i = 4;
            void 0 != e.ticksPerBeat && (i = 0 | e.ticksPerBeat || 4, this.rhythm = t.Config.rhythms.findIndex(t => t.stepsPerBeat == i), -1 == this.rhythm && (this.rhythm = 1));
            let s = 1,
                n = 1,
                h = 1;
            if (e.channels)
                for (const t of e.channels) t.instruments && (s = Math.max(s, 0 | t.instruments.length)), t.patterns && (n = Math.max(n, 0 | t.patterns.length)), t.sequence && (h = Math.max(h, 0 | t.sequence.length));
            this.instrumentsPerChannel = Math.min(s, t.Config.instrumentsPerChannelMax), this.patternsPerChannel = Math.min(n, t.Config.barCountMax), this.barCount = Math.min(h, t.Config.barCountMax), void 0 != e.introBars && (this.loopStart = r(0, this.barCount, 0 | e.introBars)), void 0 != e.loopBars && (this.loopLength = r(1, this.barCount - this.loopStart + 1, 0 | e.loopBars));
            const c = [],
                d = [],
                m = [];
            if (e.channels)
                for (let s = 0; s < e.channels.length; s++) {
                    let n = e.channels[s];
                    const h = new y;
                    let u = !1,
                        p = !1;
                    void 0 != n.type ? (u = "drum" == n.type, p = "mod" == n.type) : u = s >= 3, u ? d.push(h) : p ? m.push(h) : c.push(h), void 0 != n.octaveScrollBar && (h.octave = r(0, t.Config.maxScrollableOctaves - +(window.localStorage.getItem("extraOctaves") || "0") + 1, 0 | n.octaveScrollBar));
                    for (let t = h.instruments.length; t < this.instrumentsPerChannel; t++) h.instruments[t] = new f(u, p);
                    h.instruments.length = this.instrumentsPerChannel;
                    for (let t = h.patterns.length; t < this.patternsPerChannel; t++) h.patterns[t] = new l;
                    h.patterns.length = this.patternsPerChannel;
                    for (let t = 0; t < this.barCount; t++) h.bars[t] = 1;
                    h.bars.length = this.barCount;
                    for (let t = 0; t < this.instrumentsPerChannel; t++) {
                        h.instruments[t].fromJsonObject(n.instruments[t], u, p)
                    }
                    for (let e = 0; e < this.patternsPerChannel; e++) {
                        const s = h.patterns[e];
                        let l = void 0;
                        if (n.patterns && (l = n.patterns[e]), void 0 != l && (s.instrument = r(0, this.instrumentsPerChannel, (0 | l.instrument) - 1), l.notes && l.notes.length > 0)) {
                            const e = Math.min(this.beatsPerBar * t.Config.partsPerBeat, l.notes.length >>> 0);
                            for (let n = 0; n < l.notes.length && !(n >= e); n++) {
                                const e = l.notes[n];
                                if (!(e && e.pitches && e.pitches.length >= 1 && e.points && e.points.length >= 2)) continue;
                                const r = new a(0, 0, 0, 0);
                                r.pitches = [], r.pins = [];
                                for (let i = 0; i < e.pitches.length; i++) {
                                    const s = 0 | e.pitches[i];
                                    if (-1 == r.pitches.indexOf(s) && (r.pitches.push(s), r.pitches.length >= t.Config.maxChordSize)) break
                                }
                                if (r.pitches.length < 1) continue;
                                let c = 0;
                                for (let n = 0; n < e.points.length; n++) {
                                    const a = e.points[n];
                                    if (void 0 == a || void 0 == a.tick) continue;
                                    const l = void 0 == a.pitchBend ? 0 : 0 | a.pitchBend,
                                        d = Math.round(+a.tick * t.Config.partsPerBeat / i);
                                    let m = this.getVolumeCapForSetting(p, h.instruments[s.instrument].modSettings[t.Config.modCount - r.pitches[0] - 1]);
                                    const f = void 0 == a.volume ? m : Math.max(0, Math.min(m, Math.round((0 | a.volume) * m / 100)));
                                    d > this.beatsPerBar * t.Config.partsPerBeat || (0 == r.pins.length && (r.start = d, c = l), r.pins.push(o(l - c, d - r.start, f)))
                                }
                                if (r.pins.length < 2) continue;
                                r.end = r.pins[r.pins.length - 1].time + r.start;
                                const d = u ? t.Config.drumCount - 1 : t.Config.maxPitch;
                                let m = d,
                                    f = 0;
                                for (let t = 0; t < r.pitches.length; t++) r.pitches[t] += c, (r.pitches[t] < 0 || r.pitches[t] > d) && (r.pitches.splice(t, 1), t--), r.pitches[t] < m && (m = r.pitches[t]), r.pitches[t] > f && (f = r.pitches[t]);
                                if (!(r.pitches.length < 1)) {
                                    for (let t = 0; t < r.pins.length; t++) {
                                        const e = r.pins[t];
                                        e.interval + m < 0 && (e.interval = -m), e.interval + f > d && (e.interval = d - f), t >= 2 && e.interval == r.pins[t - 1].interval && e.interval == r.pins[t - 2].interval && e.volume == r.pins[t - 1].volume && e.volume == r.pins[t - 2].volume && (r.pins.splice(t - 1, 1), t--)
                                    }
                                    s.notes.push(r)
                                }
                            }
                        }
                    }
                    for (let t = 0; t < this.barCount; t++) h.bars[t] = n.sequence ? Math.min(this.patternsPerChannel, n.sequence[t] >>> 0) : 0
                }
            c.length > t.Config.pitchChannelCountMax && (c.length = t.Config.pitchChannelCountMax), d.length > t.Config.noiseChannelCountMax && (d.length = t.Config.noiseChannelCountMax), m.length > t.Config.modChannelCountMax && (m.length = t.Config.modChannelCountMax), this.pitchChannelCount = c.length, this.noiseChannelCount = d.length, this.modChannelCount = m.length, this.channels.length = 0, Array.prototype.push.apply(this.channels, c), Array.prototype.push.apply(this.channels, d), Array.prototype.push.apply(this.channels, m)
        }
        getPattern(t, e) {
            if (e < 0 || e >= this.barCount) return null;
            const i = this.channels[t].bars[e];
            return 0 == i ? null : this.channels[t].patterns[i - 1]
        }
        getPatternInstrument(t, e) {
            const i = this.getPattern(t, e);
            return null == i ? 0 : i.instrument
        }
        getBeatsPerMinute() {
            return this.tempo
        }
    }
    b._ = "BeepBox", b.$ = 2, b.H = 8, b.I = 1, b.L = 2, b.R = 106, t.Song = b;
    class g {
        constructor() {
            this.pitches = [0, 0, 0, 0], this.pitchCount = 0, this.chordSize = 0, this.drumsetPitch = 0, this.note = null, this.prevNote = null, this.nextNote = null, this.prevNotePitchIndex = 0, this.nextNotePitchIndex = 0, this.active = !1, this.noteStart = 0, this.noteEnd = 0, this.noteLengthTicks = 0, this.ticksSinceReleased = 0, this.liveInputSamplesHeld = 0, this.lastInterval = 0, this.lastVolume = 0, this.stereoVolume1 = 0, this.stereoVolume2 = 0, this.stereoOffset = 0, this.stereoDelay = 0, this.sample = 0, this.phases = [], this.phaseDeltas = [], this.volumeStarts = [], this.volumeDeltas = [], this.volumeStart = 0, this.volumeDelta = 0, this.phaseDeltaScale = 0, this.pulseWidth = 0, this.pulseWidthDelta = 0, this.filter = 0, this.filterScale = 0, this.filterSample0 = 0, this.filterSample1 = 0, this.vibratoScale = 0, this.intervalMult = 0, this.intervalVolumeMult = 1, this.feedbackOutputs = [], this.feedbackMult = 0, this.feedbackDelta = 0, this.stereoVolumeLStart = 0, this.stereoVolumeRStart = 0, this.stereoVolumeLDelta = 0, this.stereoVolumeRDelta = 0, this.stereoDelayStart = 0, this.stereoDelayEnd = 0, this.stereoDelayDelta = 0, this.customVolumeStart = 0, this.customVolumeEnd = 0, this.filterResonanceStart = 0, this.filterResonanceDelta = 0, this.isFirstOrder = !1, this.reset()
        }
        reset() {
            for (let e = 0; e < t.Config.operatorCount; e++) this.phases[e] = 0, this.feedbackOutputs[e] = 0;
            this.sample = 0, this.filterSample0 = 0, this.filterSample1 = 0, this.liveInputSamplesHeld = 0
        }
    }
    class v {
        constructor(e = null) {
            this.samplesPerSecond = 44100, this.song = null, this.liveInputDuration = 0, this.liveInputStarted = !1, this.liveInputPitches = [], this.liveInputChannel = 0, this.loopRepeatCount = -1, this.volume = 1, this.playheadInternal = 0, this.bar = 0, this.beat = 0, this.part = 0, this.tick = 0, this.tickSampleCountdown = 0, this.isPlayingSong = !1, this.liveInputEndTime = 0, this.tonePool = new t.Deque, this.activeTones = [], this.activeModTones = [], this.releasedTones = [], this.liveInputTones = new t.Deque, this.limit = 0, this.stereoBufferIndex = 0, this.samplesForNone = null, this.samplesForReverb = null, this.samplesForChorus = null, this.samplesForChorusReverb = null, this.chorusDelayLine = new Float32Array(2048), this.chorusDelayPos = 0, this.chorusPhase = 0, this.reverbDelayLine = new Float32Array(16384), this.reverbDelayPos = 0, this.reverbFeedback0 = 0, this.reverbFeedback1 = 0, this.reverbFeedback2 = 0, this.reverbFeedback3 = 0, this.audioCtx = null, this.scriptNode = null, this.audioProcessCallback = (t => {
                const e = t.outputBuffer,
                    i = e.getChannelData(0),
                    s = e.getChannelData(1);
                if (performance.now() < this.liveInputEndTime || this.isPlayingSong) this.synthesize(i, s, e.length, this.isPlayingSong);
                else {
                    for (let t = 0; t < e.length; t++) i[t] = 0, s[t] = 0;
                    this.deactivateAudio()
                }
            }), null != e && this.setSong(e)
        }
        warmUpSynthesizer(t) {
            if (null != t)
                for (let e = 0; e < t.getChannelCount(); e++)
                    for (let i = 0; i < t.instrumentsPerChannel; i++) v.getInstrumentSynthFunction(t.channels[e].instruments[i]), t.channels[e].instruments[i].warmUp()
        }
        computeLatestModValues() {
            if (null != this.song && this.song.modChannelCount > 0) {
                let e = [],
                    i = [];
                this.modValues = [], this.nextModValues = [], this.modInsValues = [], this.nextModInsValues = [];
                for (let t = 0; t < this.song.pitchChannelCount + this.song.noiseChannelCount; t++) {
                    i[t] = [], this.modInsValues[t] = [], this.nextModInsValues[t] = [];
                    for (let e = 0; e < this.song.instrumentsPerChannel; e++) this.modInsValues[t][e] = [], this.nextModInsValues[t][e] = [], i[t][e] = []
                }
                let s = this.beat * t.Config.partsPerBeat + this.part;
                for (let n = this.song.pitchChannelCount + this.song.noiseChannelCount; n < this.song.getChannelCount(); n++)
                    if (!this.song.channels[n].muted) {
                        let o;
                        for (let r = this.bar; r >= 0; r--)
                            if (null != (o = this.song.getPattern(n, r))) {
                                let h = this.song.getPatternInstrument(n, r),
                                    a = this.song.channels[n].instruments[h],
                                    l = [],
                                    c = [],
                                    d = r == this.bar ? s : this.findPartsInBar(r);
                                for (const e of o.notes)
                                    if (e.start < d && (null == l[t.Config.modCount - 1 - e.pitches[0]] || e.end > l[t.Config.modCount - 1 - e.pitches[0]]))
                                        if (e.end <= d) l[t.Config.modCount - 1 - e.pitches[0]] = e.end, c[t.Config.modCount - 1 - e.pitches[0]] = e.pins[e.pins.length - 1].volume;
                                        else {
                                            l[t.Config.modCount - 1 - e.pitches[0]] = d;
                                            for (let i = 0; i < e.pins.length; i++)
                                                if (e.pins[i].time + e.start > d) {
                                                    const s = e.pins[i].time - e.pins[i - 1].time,
                                                        n = d - e.pins[i - 1].time,
                                                        o = e.pins[i].volume - e.pins[i - 1].volume;
                                                    c[t.Config.modCount - 1 - e.pitches[0]] = Math.round(e.pins[i - 1].volume + o * n / s)
                                                }
                                        } for (let s = 0; s < t.Config.modCount; s++) null != l[s] && (a.modStatuses[s] == u.msForSong ? (null == e[a.modSettings[s]] || r * t.Config.partsPerBeat * this.song.beatsPerBar + l[s] > e[a.modSettings[s]]) && (this.setModValue(c[s], c[s], s, a, a.modSettings[s]), e[a.modSettings[s]] = r * t.Config.partsPerBeat * this.song.beatsPerBar + l[s]) : (null == i[a.modChannels[s]][a.modInstruments[s]][a.modSettings[s]] || r * t.Config.partsPerBeat * this.song.beatsPerBar + l[s] > i[a.modChannels[s]][a.modInstruments[s]][a.modSettings[s]]) && (this.setModValue(c[s], c[s], s, a, a.modSettings[s]), i[a.modChannels[s]][a.modInstruments[s]][a.modSettings[s]] = r * t.Config.partsPerBeat * this.song.beatsPerBar + l[s]))
                            }
                    }
            }
        }
        static operatorAmplitudeCurve(t) {
            return (Math.pow(16, t / 15) - 1) / 15
        }
        get playing() {
            return this.isPlayingSong
        }
        get playhead() {
            return this.playheadInternal
        }
        set playhead(e) {
            if (null != this.song) {
                this.playheadInternal = Math.max(0, Math.min(this.song.barCount, e));
                let i = this.playheadInternal;
                this.bar = Math.floor(i), i = this.song.beatsPerBar * (i - this.bar), this.beat = Math.floor(i), i = t.Config.partsPerBeat * (i - this.beat), this.part = Math.floor(i), i = t.Config.ticksPerPart * (i - this.part), this.tick = Math.floor(i);
                const s = this.getSamplesPerTick();
                i = s * (i - this.tick), this.tickSampleCountdown = Math.floor(s - i)
            }
        }
        getSamplesPerBar() {
            if (null == this.song) throw new Error;
            return this.getSamplesPerTick() * t.Config.ticksPerPart * t.Config.partsPerBeat * this.song.beatsPerBar
        }
        findPartsInBar(e) {
            if (null == this.song) return 0;
            let i = t.Config.partsPerBeat * this.song.beatsPerBar;
            for (let s = this.song.pitchChannelCount + this.song.noiseChannelCount; s < this.song.getChannelCount(); s++) {
                let n = this.song.getPattern(s, e);
                if (null != n) {
                    let e = this.song.channels[s].instruments[n.instrument];
                    for (let s = 0; s < t.Config.modCount; s++)
                        if (e.modSettings[s] == p.mstNextBar && e.modStatuses[s] == u.msForSong)
                            for (const e of n.notes) e.pitches[0] == t.Config.modCount - 1 - s && i > e.start && (i = e.start)
                }
            }
            return i
        }
        getTotalSamples(e, i, s) {
            if (null == this.song) return -1;
            let n = e ? 0 : this.song.loopStart,
                o = i ? this.song.barCount : this.song.loopStart + this.song.loopLength,
                r = !1,
                h = !1;
            for (let e = this.song.pitchChannelCount + this.song.noiseChannelCount; e < this.song.getChannelCount(); e++)
                for (let i = n; i < o; i++) {
                    let s = this.song.getPattern(e, i);
                    if (null != s) {
                        let i = this.song.channels[e].instruments[s.instrument];
                        for (let e = 0; e < t.Config.modCount; e++) i.modSettings[e] == p.mstTempo && i.modStatuses[e] == u.msForSong && (r = !0), i.modSettings[e] == p.mstNextBar && i.modStatuses[e] == u.msForSong && (h = !0)
                    }
                }
            if (r || h) {
                let e = n,
                    i = !1,
                    a = this.song.tempo,
                    l = 0;
                for (; !i;) {
                    let n = t.Config.partsPerBeat * this.song.beatsPerBar,
                        c = 0;
                    if (h && (n = this.findPartsInBar(e)), r) {
                        let i = !1;
                        for (let s = this.song.pitchChannelCount + this.song.noiseChannelCount; s < this.song.getChannelCount(); s++)
                            if (0 == i) {
                                let o = this.song.getPattern(s, e);
                                if (null != o) {
                                    let e = this.song.channels[s].instruments[o.instrument];
                                    for (let s = 0; s < t.Config.modCount; s++)
                                        if (0 == i && e.modSettings[s] == p.mstTempo && e.modStatuses[s] == u.msForSong && o.notes.find(e => e.pitches[0] == t.Config.modCount - 1 - s)) {
                                            i = !0, o.notes.sort(function(t, e) {
                                                return t.start == e.start ? t.pitches[0] - e.pitches[0] : t.start - e.start
                                            });
                                            for (const e of o.notes)
                                                if (e.pitches[0] == t.Config.modCount - 1 - s && (l += Math.min(n - c, e.start - c) * t.Config.ticksPerPart * this.getSamplesPerTickSpecificBPM(a), e.start < n))
                                                    for (let i = 1; i < e.pins.length; i++) {
                                                        if (e.pins[i - 1].time + e.start <= n) {
                                                            const s = t.Config.ticksPerPart * Math.min(n - (e.start + e.pins[i - 1].time), e.pins[i].time - e.pins[i - 1].time),
                                                                o = this.song.modValueToReal(e.pins[i - 1].volume, p.mstTempo);
                                                            let r = this.song.modValueToReal(e.pins[i].volume, p.mstTempo);
                                                            e.pins[i].time + e.start > n && (r = this.song.modValueToReal(e.pins[i - 1].volume + (e.pins[i].volume - e.pins[i - 1].volume) * (n - (e.start + e.pins[i - 1].time)) / (e.pins[i].time - e.pins[i - 1].time), p.mstTempo));
                                                            let h = t.Config.partsPerBeat * t.Config.ticksPerPart / 60;
                                                            l += r != o ? -this.samplesPerSecond * s * (Math.log(h * r * s) - Math.log(h * o * s)) / (h * (o - r)) : s * this.getSamplesPerTickSpecificBPM(r), a = r
                                                        }
                                                        c = Math.min(e.start + e.pins[i].time, n)
                                                    }
                                        }
                                }
                            }
                    }
                    l += (n - c) * t.Config.ticksPerPart * this.getSamplesPerTickSpecificBPM(a), e++, 0 != s && e == this.song.loopStart + this.song.loopLength && (e = this.song.loopStart, s > 0 && s--), e >= o && (i = !0)
                }
                return Math.ceil(l)
            }
            return this.getSamplesPerBar() * this.getTotalBars(e, i, s)
        }
        getTotalBars(t, e, i = this.loopRepeatCount) {
            if (null == this.song) throw new Error;
            let s = this.song.loopLength * (i + 1);
            return t && (s += this.song.loopStart), e && (s += this.song.barCount - (this.song.loopStart + this.song.loopLength)), s
        }
        setSong(t) {
            "string" == typeof t ? this.song = new b(t) : t instanceof b && (this.song = t)
        }
        setModValue(t, e, i, s, n) {
            let o, r;
            switch (n) {
                case p.mstSongVolume:
                case p.mstReverb:
                case p.mstTempo:
                case p.mstSongDetune:
                    o = this.song.modValueToReal(t, n), r = this.song.modValueToReal(e, n), null != this.modValues[n] && this.modValues[n] == o && this.nextModValues[n] == r || (this.modValues[n] = o, this.nextModValues[n] = r);
                    break;
                case p.mstInsVolume:
                case p.mstPan:
                case p.mstPulseWidth:
                case p.mstFilterCut:
                case p.mstFilterPeak:
                case p.mstFMSlider1:
                case p.mstFMSlider2:
                case p.mstFMSlider3:
                case p.mstFMSlider4:
                case p.mstFMFeedback:
                case p.mstVibratoDepth:
                case p.mstDetune:
                    o = this.song.modValueToReal(t, n), r = this.song.modValueToReal(e, n);
                    let h = s.modChannels[i] + (s.modStatuses[i] == u.msForNoise ? this.song.pitchChannelCount : 0);
                    null != this.modInsValues[h][s.modInstruments[i]][n] && this.modInsValues[h][s.modInstruments[i]][n] == o && this.nextModInsValues[h][s.modInstruments[i]][n] == r || (this.modInsValues[h][s.modInstruments[i]][n] = o, this.nextModInsValues[h][s.modInstruments[i]][n] = r);
                    break;
                case p.mstNextBar:
                    o = this.song.modValueToReal(t, n);
                    break;
                case p.mstNone:
                default:
                    o = -1
            }
            return o
        }
        getModValue(t, e, i, s, n) {
            if (e) {
                if (null != this.modValues[t] && null != this.nextModValues[t]) return n ? this.nextModValues[t] : this.modValues[t]
            } else if (void 0 != i && void 0 != s && null != this.modInsValues[i][s][t] && null != this.nextModInsValues[i][s][t]) return n ? this.nextModInsValues[i][s][t] : this.modInsValues[i][s][t];
            return -1
        }
        isAnyModActive(t, e) {
            for (let i = 0; i < p.mstMaxValue; i++)
                if (void 0 != this.modValues && null != this.modValues[i] || void 0 != this.modInsValues && void 0 != this.modInsValues[t] && void 0 != this.modInsValues[t][e] && null != this.modInsValues[t][e][i]) return !0;
            return !1
        }
        unsetMod(t, e, i) {
            (this.isModActive(t, !0) || void 0 != e && void 0 != i && this.isModActive(t, !1, e, i)) && (this.modValues[t] = null, this.nextModValues[t] = null, void 0 != e && void 0 != i && (this.modInsValues[e][i][t] = null, this.nextModInsValues[e][i][t] = null))
        }
        isModActive(t, e, i, s) {
            return e ? void 0 != this.modValues && null != this.modValues[t] : void 0 != i && void 0 != s && void 0 != this.modInsValues && null != this.modInsValues[i] && null != this.modInsValues[i][s] && null != this.modInsValues[i][s][t] && null != this.modInsValues[i][s][t]
        }
        activateAudio() {
            null != this.audioCtx && null != this.scriptNode || (this.audioCtx = this.audioCtx || new(window.AudioContext || window.webkitAudioContext), this.samplesPerSecond = this.audioCtx.sampleRate, this.scriptNode = this.audioCtx.createScriptProcessor ? this.audioCtx.createScriptProcessor(2048, 0, 2) : this.audioCtx.createJavaScriptNode(2048, 0, 2), this.scriptNode.onaudioprocess = this.audioProcessCallback, this.scriptNode.channelCountMode = "explicit", this.scriptNode.channelInterpretation = "speakers", this.scriptNode.connect(this.audioCtx.destination)), this.audioCtx.resume()
        }
        deactivateAudio() {
            null != this.audioCtx && null != this.scriptNode && (this.scriptNode.disconnect(this.audioCtx.destination), this.scriptNode = null, this.audioCtx.close && this.audioCtx.close(), this.audioCtx = null)
        }
        maintainLiveInput() {
            this.activateAudio(), this.liveInputEndTime = performance.now() + 1e4
        }
        play() {
            this.isPlayingSong || (this.isPlayingSong = !0, this.warmUpSynthesizer(this.song), this.computeLatestModValues(), this.activateAudio())
        }
        pause() {
            this.isPlayingSong && (this.isPlayingSong = !1, this.modValues = [], this.modInsValues = [], this.nextModValues = [], this.nextModInsValues = [])
        }
        snapToStart() {
            this.bar = 0, this.snapToBar()
        }
        goToBar(t) {
            this.bar = t, this.playheadInternal = this.bar
        }
        snapToBar() {
            this.playheadInternal = this.bar, this.beat = 0, this.part = 0, this.tick = 0, this.tickSampleCountdown = 0
        }
        resetEffects() {
            this.reverbDelayPos = 0, this.reverbFeedback0 = 0, this.reverbFeedback1 = 0, this.reverbFeedback2 = 0, this.reverbFeedback3 = 0, this.freeAllTones();
            for (let t = 0; t < this.reverbDelayLine.length; t++) this.reverbDelayLine[t] = 0;
            for (let t = 0; t < this.chorusDelayLine.length; t++) this.chorusDelayLine[t] = 0;
            if (null != this.samplesForNone)
                for (let t = 0; t < this.samplesForNone.length; t++) this.samplesForNone[t] = 0;
            if (null != this.samplesForReverb)
                for (let t = 0; t < this.samplesForReverb.length; t++) this.samplesForReverb[t] = 0;
            if (null != this.samplesForChorus)
                for (let t = 0; t < this.samplesForChorus.length; t++) this.samplesForChorus[t] = 0;
            if (null != this.samplesForChorusReverb)
                for (let t = 0; t < this.samplesForChorusReverb.length; t++) this.samplesForChorusReverb[t] = 0
        }
        jumpIntoLoop() {
            if (this.song && (this.bar < this.song.loopStart || this.bar >= this.song.loopStart + this.song.loopLength)) {
                const t = this.bar;
                this.bar = this.song.loopStart, this.playheadInternal += this.bar - t, this.playing && this.computeLatestModValues()
            }
        }
        nextBar() {
            if (!this.song) return;
            const t = this.bar;
            this.bar++, this.bar >= this.song.barCount && (this.bar = 0), this.playheadInternal += this.bar - t, this.playing && this.computeLatestModValues()
        }
        skipBar() {
            if (!this.song) return;
            const t = this.getSamplesPerTick();
            this.bar++, this.beat = 0, this.part = 0, this.tick = 0, this.tickSampleCountdown = t, 0 != this.loopRepeatCount && this.bar == this.song.loopStart + this.song.loopLength && (this.bar = this.song.loopStart, this.loopRepeatCount > 0 && this.loopRepeatCount--)
        }
        firstBar() {
            this.song && (this.bar = 0, this.playheadInternal = 0, this.beat = 0, this.part = 0, this.playing && this.computeLatestModValues())
        }
        jumpToEditingBar(t) {
            this.song && (this.bar = t, this.playheadInternal = t, this.beat = 0, this.part = 0, this.playing && this.computeLatestModValues())
        }
        prevBar() {
            if (!this.song) return;
            const t = this.bar;
            this.bar--, (this.bar < 0 || this.bar >= this.song.barCount) && (this.bar = this.song.barCount - 1), this.playheadInternal += this.bar - t, this.playing && this.computeLatestModValues()
        }
        synthesize(e, i, s, n = !0) {
            if (null == this.song) {
                for (let t = 0; t < s; t++) e[t] = 0, i[t] = 0;
                return void this.deactivateAudio()
            }
            const o = this.song.pitchChannelCount + this.song.noiseChannelCount;
            for (let e = this.activeTones.length; e < o; e++) this.activeTones[e] = new t.Deque, this.releasedTones[e] = new t.Deque;
            this.activeTones.length = o, this.releasedTones.length = o;
            for (let e = this.activeModTones.length; e < this.song.modChannelCount; e++) {
                this.activeModTones[e] = [];
                for (let i = 0; i < t.Config.modCount; i++) this.activeModTones[e][i] = new t.Deque;
                this.activeModTones[e].length = t.Config.modCount
            }
            this.activeModTones.length = this.song.modChannelCount;
            let r = this.getSamplesPerTick(),
                h = 0,
                a = !1;
            (0 == this.tickSampleCountdown || this.tickSampleCountdown > r) && (this.tickSampleCountdown = r), n && (this.beat >= this.song.beatsPerBar && (this.bar++, this.beat = 0, this.part = 0, this.tick = 0, this.tickSampleCountdown = r, 0 != this.loopRepeatCount && this.bar == this.song.loopStart + this.song.loopLength && (this.bar = this.song.loopStart, this.loopRepeatCount > 0 && this.loopRepeatCount--)), this.bar >= this.song.barCount && (this.bar = 0, -1 != this.loopRepeatCount && (a = !0, this.pause())));
            const l = 4 * s;
            null != this.samplesForNone && this.samplesForNone.length == l && null != this.samplesForReverb && this.samplesForReverb.length == l && null != this.samplesForChorus && this.samplesForChorus.length == l && null != this.samplesForChorusReverb && this.samplesForChorusReverb.length == l || (this.samplesForNone = new Float32Array(l), this.samplesForReverb = new Float32Array(l), this.samplesForChorus = new Float32Array(l), this.samplesForChorusReverb = new Float32Array(l), this.stereoBufferIndex = 0);
            let c = this.stereoBufferIndex;
            const d = this.samplesForNone,
                m = this.samplesForReverb,
                f = this.samplesForChorus,
                u = this.samplesForChorusReverb,
                y = +this.volume,
                b = this.chorusDelayLine,
                g = this.reverbDelayLine,
                v = 2 * Math.PI / (2 * this.samplesPerSecond),
                w = 150 * this.samplesPerSecond / 44100,
                k = 2048 - 1.51 * w,
                x = 2048 - 2.1 * w,
                M = 2048 - 3.35 * w,
                E = 2048 - 1.47 * w,
                C = 2048 - 2.15 * w,
                S = 2048 - 3.25 * w;
            let q = this.chorusPhase % (2 * Math.PI),
                P = 2047 & this.chorusDelayPos,
                N = 16383 & this.reverbDelayPos,
                T = +this.reverbFeedback0,
                F = +this.reverbFeedback1,
                B = +this.reverbFeedback2,
                z = +this.reverbFeedback3,
                R = this.song.reverb;
            this.isModActive(p.mstReverb, !0) && (R = this.getModValue(p.mstReverb, !0));
            let L = .425 * Math.pow(R / t.Config.reverbRange, .667);
            const A = 1 - Math.pow(.5, 4 / this.samplesPerSecond),
                H = 1 - Math.pow(.5, 4e3 / this.samplesPerSecond);
            let $ = +this.limit;
            for (; h < s && !a;) {
                const R = s - h,
                    D = this.tickSampleCountdown <= R ? this.tickSampleCountdown : R;
                for (let e = 0, i = this.song.pitchChannelCount + this.song.noiseChannelCount; e < this.song.modChannelCount; e++, i++) {
                    this.determineCurrentActiveTones(this.song, i, n);
                    for (let s = 0; s < t.Config.modCount; s++)
                        for (let t = 0; t < this.activeModTones[e][s].count(); t++) {
                            const n = this.activeModTones[e][s].get(t);
                            0 == this.song.channels[i].muted && this.playTone(this.song, c, l, i, r, D, n, !1, !1)
                        }
                }
                for (let e = 0; e < this.song.pitchChannelCount + this.song.noiseChannelCount; e++) {
                    if (e == this.liveInputChannel) {
                        this.determineLiveInputTones(this.song);
                        for (let t = 0; t < this.liveInputTones.count(); t++) {
                            const i = this.liveInputTones.get(t);
                            this.playTone(this.song, c, l, e, r, D, i, !1, !1)
                        }
                    }
                    this.isModActive(p.mstReverb, !0) && (L = .425 * Math.pow(this.getModValue(p.mstReverb, !0) / t.Config.reverbRange, .667)), this.determineCurrentActiveTones(this.song, e, n);
                    for (let t = 0; t < this.activeTones[e].count(); t++) {
                        const i = this.activeTones[e].get(t);
                        this.playTone(this.song, c, l, e, r, D, i, !1, !1)
                    }
                    for (let i = 0; i < this.releasedTones[e].count(); i++) {
                        const s = this.releasedTones[e].get(i);
                        if (s.ticksSinceReleased >= s.instrument.getTransition().releaseTicks) {
                            this.freeReleasedTone(e, i), i--;
                            continue
                        }
                        const n = i + this.activeTones[e].count() >= t.Config.maximumTonesPerChannel;
                        this.playTone(this.song, c, l, e, r, D, s, !0, n)
                    }
                }
                let I = P + k - w * Math.sin(q + 0),
                    _ = P + x - w * Math.sin(q + 2.1),
                    O = P + M - w * Math.sin(q + 4.2),
                    U = P + 1024 + E - w * Math.sin(q + 3.2),
                    V = P + 1024 + C - w * Math.sin(q + 5.3),
                    j = P + 1024 + S - w * Math.sin(q + 1);
                q += v * D;
                const W = (P + D + k - w * Math.sin(q + 0) - I) / D,
                    G = (P + D + x - w * Math.sin(q + 2.1) - _) / D,
                    K = (P + D + M - w * Math.sin(q + 4.2) - O) / D,
                    J = (P + D + 1024 + E - w * Math.sin(q + 3.2) - U) / D,
                    Y = (P + D + 1024 + C - w * Math.sin(q + 5.3) - V) / D,
                    Z = (P + D + 1024 + S - w * Math.sin(q + 1) - j) / D,
                    Q = h + D;
                for (let t = h; t < Q; t++) {
                    const s = c,
                        n = c + 1,
                        o = d[s];
                    d[s] = 0;
                    const r = d[n];
                    d[n] = 0;
                    const h = m[s];
                    m[s] = 0;
                    const a = m[n];
                    m[n] = 0;
                    const l = f[s];
                    f[s] = 0;
                    const p = f[n];
                    f[n] = 0;
                    const v = u[s];
                    u[s] = 0;
                    const w = u[n];
                    u[n] = 0, c += 2;
                    const k = l + v,
                        x = p + w,
                        M = I % 1,
                        E = _ % 1,
                        C = O % 1,
                        S = U % 1,
                        q = V % 1,
                        R = j % 1,
                        D = b[2047 & I],
                        Q = b[I + 1 & 2047],
                        X = b[2047 & _],
                        tt = b[_ + 1 & 2047],
                        et = b[2047 & O],
                        it = b[O + 1 & 2047],
                        st = b[2047 & U],
                        nt = b[U + 1 & 2047],
                        ot = b[2047 & V],
                        rt = b[V + 1 & 2047],
                        ht = b[2047 & j],
                        at = .5 * (k - (D + (Q - D) * M) + (X + (tt - X) * E) - (et + (it - et) * C)),
                        lt = .5 * (x - (st + (nt - st) * S) + (ot + (rt - ot) * q) - (ht + (b[j + 1 & 2047] - ht) * R));
                    b[P] = k, b[P + 1024 & 2047] = x, P = P + 1 & 2047, I += W, _ += G, O += K, U += J, V += Y, j += Z;
                    const ct = N + 3041 & 16383,
                        dt = N + 6426 & 16383,
                        mt = N + 10907 & 16383,
                        ft = g[N],
                        ut = g[ct],
                        pt = g[dt],
                        yt = g[mt],
                        bt = -(ft + v + h) + ut,
                        gt = -(ft + w + a) - ut,
                        vt = -pt + yt,
                        wt = -pt - yt;
                    T += .5 * ((bt + vt) * L - T), F += .5 * ((gt + wt) * L - F), B += .5 * ((bt - vt) * L - B), z += .5 * ((gt - wt) * L - z), g[ct] = T, g[dt] = F, g[mt] = B, g[N] = z, N = N + 1 & 16383;
                    const kt = o + at + h + ut + pt + yt,
                        xt = r + lt + a + ft + pt - yt,
                        Mt = kt < 0 ? -kt : kt,
                        Et = xt < 0 ? -xt : xt,
                        Ct = Mt > Et ? Mt : Et,
                        St = y / (($ += (Ct - $) * ($ < Ct ? H : A)) >= 1 ? 1.05 * $ : .8 * $ + .25);
                    e[t] = kt * St, i[t] = xt * St
                }
                if (h += D, this.tickSampleCountdown -= D, this.tickSampleCountdown <= 0) {
                    for (let e = 0; e < this.song.pitchChannelCount + this.song.noiseChannelCount; e++)
                        for (let i = 0; i < this.releasedTones[e].count(); i++) {
                            this.releasedTones[e].get(i).ticksSinceReleased++, i + this.activeTones[e].count() >= t.Config.maximumTonesPerChannel && (this.freeReleasedTone(e, i), i--)
                        }
                    if (this.tick++, this.tickSampleCountdown = r, this.tick == t.Config.ticksPerPart) {
                        this.tick = 0, this.part++, this.liveInputDuration--;
                        for (let e = 0; e < this.song.pitchChannelCount + this.song.noiseChannelCount; e++)
                            for (let i = 0; i < this.activeTones[e].count(); i++) {
                                const s = this.activeTones[e].get(i),
                                    n = s.instrument.getTransition();
                                n.isSeamless || null == s.note || s.note.end != this.part + this.beat * t.Config.partsPerBeat || (n.releases ? this.releaseTone(e, s) : this.freeTone(s), this.activeTones[e].remove(i), i--)
                            }
                        for (let e = 0; e < this.song.modChannelCount; e++)
                            for (let i = 0; i < t.Config.modCount; i++)
                                for (let s = 0; s < this.activeModTones[e][i].count(); s++) {
                                    const n = this.activeModTones[e][i].get(s);
                                    n.instrument.getTransition().isSeamless || null == n.note || n.note.end != this.part + this.beat * t.Config.partsPerBeat || (this.freeTone(n), this.activeModTones[e][i].remove(s), s--)
                                }
                        this.part == t.Config.partsPerBeat && (this.part = 0, n && (this.beat++, this.beat == this.song.beatsPerBar && (this.beat = 0, this.bar++, 0 != this.loopRepeatCount && this.bar == this.song.loopStart + this.song.loopLength && (this.bar = this.song.loopStart, this.loopRepeatCount > 0 && this.loopRepeatCount--), this.bar >= this.song.barCount && (this.bar = 0, -1 != this.loopRepeatCount && (a = !0, this.resetEffects(), this.pause())))))
                    }
                }
                for (let t = 0; t < p.mstMaxValue; t++) null != this.nextModValues && null != this.nextModValues[t] && (this.modValues[t] = this.nextModValues[t]);
                this.isModActive(p.mstTempo, !0) && (r = this.getSamplesPerTick());
                for (let t = 0; t < p.mstMaxValue; t++)
                    for (let e = 0; e < o; e++)
                        for (let i = 0; i < this.song.instrumentsPerChannel; i++) null != this.nextModInsValues && null != this.nextModInsValues[e] && null != this.nextModInsValues[e][i] && null != this.nextModInsValues[e][i][t] && (this.modInsValues[e][i][t] = this.nextModInsValues[e][i][t])
            } - 1e-24 < T && T < 1e-24 && (T = 0), -1e-24 < F && F < 1e-24 && (F = 0), -1e-24 < B && B < 1e-24 && (B = 0), -1e-24 < z && z < 1e-24 && (z = 0), -1e-24 < $ && $ < 1e-24 && ($ = 0), this.stereoBufferIndex = (this.stereoBufferIndex + 2 * s) % l, this.chorusPhase = q, this.chorusDelayPos = P, this.reverbDelayPos = N, this.reverbFeedback0 = T, this.reverbFeedback1 = F, this.reverbFeedback2 = B, this.reverbFeedback3 = z, this.limit = $, n && (this.playheadInternal = (((this.tick + 1 - this.tickSampleCountdown / r) / 2 + this.part) / t.Config.partsPerBeat + this.beat) / this.song.beatsPerBar + this.bar)
        }
        freeTone(t) {
            this.tonePool.pushBack(t)
        }
        newTone() {
            if (this.tonePool.count() > 0) {
                const t = this.tonePool.popBack();
                return t.reset(), t.active = !1, t
            }
            return new g
        }
        releaseTone(t, e) {
            null != this.song && this.song.getChannelIsMod(t) || this.releasedTones[t].pushFront(e)
        }
        freeReleasedTone(t, e) {
            null != this.song && this.song.getChannelIsMod(t) || (this.freeTone(this.releasedTones[t].get(e)), this.releasedTones[t].remove(e))
        }
        freeAllTones() {
            for (; this.liveInputTones.count() > 0;) this.freeTone(this.liveInputTones.popBack());
            for (let t = 0; t < this.activeTones.length; t++)
                for (; this.activeTones[t].count() > 0;) this.freeTone(this.activeTones[t].popBack());
            for (let t = 0; t < this.releasedTones.length; t++)
                for (; this.releasedTones[t].count() > 0;) this.freeTone(this.releasedTones[t].popBack());
            for (let t = 0; t < this.activeModTones.length; t++)
                for (let e = 0; e < this.activeModTones[t].length; e++)
                    for (; this.activeModTones[t][e].count() > 0;) this.freeTone(this.activeModTones[t][e].popBack())
        }
        determineLiveInputTones(t) {
            const e = this.liveInputTones,
                i = this.liveInputPitches;
            let s = 0;
            if (this.liveInputDuration > 0) {
                const n = t.channels[this.liveInputChannel].instruments[t.getPatternInstrument(this.liveInputChannel, this.bar)];
                if (n.getChord().arpeggiates) {
                    let t;
                    0 == e.count() ? (t = this.newTone(), e.pushBack(t)) : !n.getTransition().isSeamless && this.liveInputStarted ? (this.releaseTone(this.liveInputChannel, e.popFront()), t = this.newTone(), e.pushBack(t)) : t = e.get(0), s = 1;
                    for (let e = 0; e < i.length; e++) t.pitches[e] = i[e];
                    t.pitchCount = i.length, t.chordSize = 1, t.instrument = n, t.note = t.prevNote = t.nextNote = null
                } else
                    for (let t = 0; t < i.length; t++) {
                        let o;
                        e.count() <= t ? (o = this.newTone(), e.pushBack(o)) : !n.getTransition().isSeamless && this.liveInputStarted ? (this.releaseTone(this.liveInputChannel, e.get(t)), o = this.newTone(), e.set(t, o)) : o = e.get(t), s++, o.pitches[0] = i[t], o.pitchCount = 1, o.chordSize = i.length, o.instrument = n, o.note = o.prevNote = o.nextNote = null
                    }
            }
            for (; e.count() > s;) this.releaseTone(this.liveInputChannel, e.popBack());
            this.liveInputStarted = !1
        }
        determineCurrentActiveTones(e, i, s) {
            const n = e.channels[i].instruments[e.getPatternInstrument(i, this.bar)],
                o = e.getPattern(i, this.bar),
                r = this.part + this.beat * t.Config.partsPerBeat;
            if (s && e.getChannelIsMod(i) && !e.channels[i].muted) {
                let s = i - (e.pitchChannelCount + e.noiseChannelCount),
                    h = [],
                    a = [],
                    l = [],
                    c = t.Config.modCount;
                for (; c--;) h.push(null), a.push(null), l.push(null);
                if (null != o)
                    for (let t = 0; t < o.notes.length; t++) o.notes[t].end <= r ? (null == a[o.notes[t].pitches[0]] || o.notes[t].end > a[o.notes[t].pitches[0]].start) && (a[o.notes[t].pitches[0]] = o.notes[t]) : o.notes[t].start <= r && o.notes[t].end > r ? h[o.notes[t].pitches[0]] = o.notes[t] : o.notes[t].start > r && (null == l[o.notes[t].pitches[0]] || o.notes[t].start < l[o.notes[t].pitches[0]].start) && (l[o.notes[t].pitches[0]] = o.notes[t]);
                for (let e = 0; e < t.Config.modCount; e++) {
                    const t = this.activeModTones[s][e];
                    if (null != h[e]) null != a[e] && a[e].end != h[e].start && (a[e] = null), null != l[e] && l[e].start != h[e].end && (l[e] = null), this.syncTones(i, t, n, h[e].pitches, h[e], a[e], l[e], r);
                    else
                        for (; t.count() > 0;) t.peakBack().instrument.getTransition().releases ? this.releaseTone(i, t.popBack()) : this.freeTone(t.popBack())
                }
            } else if (!e.getChannelIsMod(i)) {
                let t = null,
                    h = null,
                    a = null;
                if (s && null != o && !e.channels[i].muted)
                    for (let e = 0; e < o.notes.length; e++)
                        if (o.notes[e].end <= r) h = o.notes[e];
                        else if (o.notes[e].start <= r && o.notes[e].end > r) t = o.notes[e];
                else if (o.notes[e].start > r) {
                    a = o.notes[e];
                    break
                }
                const l = this.activeTones[i];
                if (null != t) null != h && h.end != t.start && (h = null), null != a && a.start != t.end && (a = null), this.syncTones(i, l, n, t.pitches, t, h, a, r);
                else
                    for (; l.count() > 0;) l.peakBack().instrument.getTransition().releases ? this.releaseTone(i, l.popBack()) : this.freeTone(l.popBack())
            }
        }
        syncTones(e, i, s, n, o, r, h, a) {
            let l = 0;
            if (s.getChord().arpeggiates) {
                let t;
                0 == i.count() ? (t = this.newTone(), i.pushBack(t)) : t = i.get(0), l = 1;
                for (let e = 0; e < n.length; e++) t.pitches[e] = n[e];
                t.pitchCount = n.length, t.chordSize = 1, t.instrument = s, t.note = o, t.noteStart = o.start, t.noteEnd = o.end, t.prevNote = r, t.nextNote = h, t.prevNotePitchIndex = 0, t.nextNotePitchIndex = 0
            } else {
                const e = s.getTransition();
                for (let c = 0; c < n.length; c++) {
                    const n = c * s.getChord().strumParts;
                    let d = r && r.pitches.length > c ? r : null,
                        m = o,
                        f = h && h.pitches.length > c ? h : null,
                        u = m.start + n;
                    if (u > a) {
                        if (!(i.count() > c && e.isSeamless && null != d)) break;
                        f = m, m = d, d = null, u = m.start + n
                    }
                    let p, y = m.end;
                    e.isSeamless && null != f && (y = Math.min(t.Config.partsPerBeat * this.song.beatsPerBar, y + n)), i.count() <= c ? (p = this.newTone(), i.pushBack(p)) : p = i.get(c), l++, p.pitches[0] = m.pitches[c], p.pitchCount = 1, p.chordSize = m.pitches.length, p.instrument = s, p.note = m, p.noteStart = u, p.noteEnd = y, p.prevNote = d, p.nextNote = f, p.prevNotePitchIndex = c, p.nextNotePitchIndex = c
                }
            }
            for (; i.count() > l;) i.peakBack().instrument.getTransition().releases ? this.releaseTone(e, i.popBack()) : this.freeTone(i.popBack())
        }
        playTone(t, e, i, s, n, o, r, h, a) {
            let l;
            switch (v.computeTone(this, t, s, n, o, r, h, a), r.instrument.effects) {
                case 0:
                    l = this.samplesForNone;
                    break;
                case 1:
                    l = this.samplesForReverb;
                    break;
                case 2:
                    l = this.samplesForChorus;
                    break;
                case 3:
                    l = this.samplesForChorusReverb;
                    break;
                default:
                    throw new Error
            }
            v.getInstrumentSynthFunction(r.instrument)(this, l, e, i, 2 * o, r, r.instrument)
        }
        static computeEnvelope(t, e, i, s) {
            switch (t.type) {
                case 0:
                    return s;
                case 1:
                    return 1;
                case 4:
                    return 1 / (1 + e * t.speed);
                case 5:
                    return 1 - 1 / (1 + e * t.speed);
                case 6:
                    return .5 - .5 * Math.cos(2 * i * Math.PI * t.speed);
                case 7:
                    return .75 - .25 * Math.cos(2 * i * Math.PI * t.speed);
                case 2:
                    return Math.max(1, 2 - 10 * e);
                case 3:
                    const n = t.speed,
                        o = .25 / Math.sqrt(n);
                    return e < o ? e / o : 1 / (1 + (e - o) * n);
                case 8:
                    return Math.pow(2, -t.speed * e);
                default:
                    throw new Error("Unrecognized operator envelope type.")
            }
        }
        static computeChordVolume(t) {
            return 1 / (.25 * (t - 1) + 1)
        }
        static computeTone(e, i, s, n, o, r, h, a) {
            const l = r.instrument,
                c = l.getTransition(),
                d = l.getChord(),
                m = d.arpeggiates ? 1 : v.computeChordVolume(r.chordSize),
                u = i.getChannelIsNoise(s),
                y = u ? t.Config.noiseInterval : 1,
                b = t.Config.ticksPerPart * n / e.samplesPerSecond,
                g = 1 / t.Config.partsPerBeat,
                w = r.active,
                k = e.tickSampleCountdown,
                x = 1 - k / n,
                M = 1 - (k - o) / n,
                E = (e.beat * t.Config.partsPerBeat + e.part) * t.Config.ticksPerPart + e.tick,
                C = E / t.Config.ticksPerPart,
                S = (E + 1) / t.Config.ticksPerPart,
                q = C + (S - C) * x,
                P = C + (S - C) * M,
                N = e.song.channels[s].instruments.findIndex(t => t == l);
            r.phaseDeltaScale = 0, r.filter = 1, r.filterScale = 1, r.vibratoScale = 0, r.intervalMult = 1, r.intervalVolumeMult = 1, r.active = !1;
            let T = l.pan,
                F = l.pan;
            e.isModActive(p.mstPan, !1, s, N) && (T = e.getModValue(p.mstPan, !1, s, N, !1), F = e.getModValue(p.mstPan, !1, s, N, !0));
            const B = (T - t.Config.panCenter) / t.Config.panCenter,
                z = (F - t.Config.panCenter) / t.Config.panCenter,
                R = .0013 * e.samplesPerSecond;
            r.stereoDelayStart = -B * R;
            const L = -z * R;
            r.stereoDelayDelta = (L - r.stereoDelayStart) / o, r.stereoVolumeLStart = 1.414 * Math.cos((1 + B) * Math.PI * .25), r.stereoVolumeRStart = 1.414 * Math.cos((1 - B) * Math.PI * .25);
            const A = 1.414 * Math.cos((1 + z) * Math.PI * .25),
                H = 1.414 * Math.cos((1 - z) * Math.PI * .25);
            r.stereoVolumeLDelta = (A - r.stereoVolumeLStart) / o, r.stereoVolumeRDelta = (H - r.stereoVolumeRStart) / o;
            let $, D, I, _, O = !0,
                U = 0,
                V = 0,
                j = 0,
                W = 1,
                G = 1,
                K = m,
                J = m,
                Y = 0,
                Z = 0,
                Q = 0,
                X = 0;
            if (3 == l.type) u ? (D = t.Config.spectrumBasePitch, I = .6) : (D = t.Config.keys[i.key].basePitch, I = .3), $ = t.Config.spectrumBasePitch, _ = 28;
            else if (4 == l.type) I = .45, $ = D = t.Config.spectrumBasePitch, _ = 48;
            else if (2 == l.type) I = .19, $ = D = t.Config.chipNoises[l.chipNoise].basePitch, _ = t.Config.chipNoises[l.chipNoise].isSoft ? 24 : 60;
            else if (1 == l.type) D = t.Config.keys[i.key].basePitch, I = .03, $ = 16, _ = 48;
            else if (0 == l.type || 7 == l.type) D = t.Config.keys[i.key].basePitch, I = .03375, $ = 16, _ = 48;
            else if (5 == l.type) D = t.Config.keys[i.key].basePitch, I = .025, $ = 16, _ = 48;
            else if (6 == l.type) D = t.Config.keys[i.key].basePitch, I = .04725, $ = 16, _ = 48;
            else {
                if (8 != l.type) throw new Error("Unknown instrument type in computeTone.");
                I = 1, $ = 0, _ = 1, D = 0
            }
            for (let e = 0; e < t.Config.operatorCount; e++) r.phaseDeltas[e] = 0, r.volumeStarts[e] = 0, r.volumeDeltas[e] = 0;
            if (h) {
                const e = r.noteLengthTicks + r.ticksSinceReleased,
                    i = r.ticksSinceReleased + x,
                    s = r.ticksSinceReleased + M,
                    n = r.noteLengthTicks + i,
                    o = r.noteLengthTicks + s,
                    h = r.instrument.getTransition();
                O = !1, U = Math.floor(e / t.Config.ticksPerPart), V = j = r.lastInterval, Y = Z = v.expressionToVolumeMult(r.lastVolume), W = v.expressionToVolumeMult(6 * (1 - i / h.releaseTicks)), G = v.expressionToVolumeMult(6 * (1 - s / h.releaseTicks)), Q = n / t.Config.ticksPerPart, X = o / t.Config.ticksPerPart, a && (W *= 1 - x, G *= 1 - M)
            } else if (null == r.note) {
                W = G = 1, Y = Z = 1, r.lastInterval = 0, r.lastVolume = 6, r.ticksSinceReleased = 0, O = !1;
                const e = r.liveInputSamplesHeld / n;
                r.liveInputSamplesHeld += o;
                const i = r.liveInputSamplesHeld / n;
                r.noteLengthTicks = i;
                const s = e / t.Config.ticksPerPart,
                    h = i / t.Config.ticksPerPart;
                U = Math.floor(s), Q = s, X = h
            } else {
                const s = r.note,
                    n = r.prevNote,
                    o = r.nextNote,
                    h = e.part + e.beat * t.Config.partsPerBeat,
                    a = t.Config.partsPerBeat * i.beatsPerBar,
                    f = r.noteStart,
                    u = r.noteEnd;
                let p;
                for (U = h - f, p = 1; p < s.pins.length - 1 && !(s.pins[p].time + s.start > h); p++);
                const y = s.pins[p - 1],
                    b = s.pins[p],
                    g = f * t.Config.ticksPerPart,
                    k = u * t.Config.ticksPerPart - g,
                    E = (s.start + y.time) * t.Config.ticksPerPart,
                    q = (s.start + b.time) * t.Config.ticksPerPart;
                r.lastInterval = s.pins[s.pins.length - 1].interval, r.lastVolume = s.pins[s.pins.length - 1].volume, r.ticksSinceReleased = 0, r.noteLengthTicks = k;
                const P = h * t.Config.ticksPerPart + e.tick,
                    N = h * t.Config.ticksPerPart + e.tick + 1,
                    T = P - g,
                    F = N - g,
                    B = Math.min(1, (P - E) / (q - E)),
                    z = Math.min(1, (N - E) / (q - E));
                let R = y.volume + (b.volume - y.volume) * B,
                    L = y.volume + (b.volume - y.volume) * z,
                    A = 1,
                    H = 1,
                    $ = m,
                    D = m,
                    I = y.interval + (b.interval - y.interval) * B,
                    _ = y.interval + (b.interval - y.interval) * z,
                    tt = C - f,
                    et = S - f;
                O = P + x - g == 0 || !w;
                const it = .5 * k;
                if (c.isSeamless && !c.slides && 0 == s.start) O = !w;
                else if (c.isSeamless && null != n && (O = !w, c.slides)) {
                    const t = Math.min(it, c.slideTicks),
                        e = Math.max(0, 1 - T / t),
                        i = Math.max(0, 1 - F / t),
                        o = .5 * (n.pitches[r.prevNotePitchIndex] + n.pins[n.pins.length - 1].interval - r.pitches[0]),
                        h = .5 * (n.pins[n.pins.length - 1].volume - s.pins[0].volume),
                        a = .5 * (n.end - n.start);
                    if (I += e * o, _ += i * o, R += e * h, L += i * h, tt += e * a, et += i * a, !d.arpeggiates) {
                        const t = .5 * (n.pitches.length - r.chordSize);
                        $ = v.computeChordVolume(r.chordSize + e * t), D = v.computeChordVolume(r.chordSize + i * t)
                    }
                }
                if (c.isSeamless && !c.slides && s.end == a);
                else if (c.isSeamless && null != o) {
                    if (c.slides) {
                        const t = Math.min(it, c.slideTicks),
                            e = Math.max(0, 1 - (k - T) / t),
                            i = Math.max(0, 1 - (k - F) / t),
                            n = .5 * (o.pitches[r.nextNotePitchIndex] - (r.pitches[0] + s.pins[s.pins.length - 1].interval)),
                            h = .5 * (o.pins[0].volume - s.pins[s.pins.length - 1].volume),
                            a = .5 * -(u - f);
                        if (I += e * n, _ += i * n, R += e * h, L += i * h, tt += e * a, et += i * a, !d.arpeggiates) {
                            const t = .5 * (o.pitches.length - r.chordSize);
                            $ = v.computeChordVolume(r.chordSize + e * t), D = v.computeChordVolume(r.chordSize + i * t)
                        }
                    }
                } else if (!c.releases) {
                    const t = c.releaseTicks;
                    t > 0 && (A *= Math.min(1, (k - T) / t), H *= Math.min(1, (k - F) / t))
                }
                V = I + (_ - I) * x, j = I + (_ - I) * M, 8 != l.type ? (Y = v.expressionToVolumeMult(R + (L - R) * x), Z = v.expressionToVolumeMult(R + (L - R) * M)) : (Y = R + (L - R) * x, Z = R + (L - R) * M, r.customVolumeStart = Y, r.customVolumeEnd = Z), W = A + (H - A) * x, G = A + (H - A) * M, K = $ + (D - $) * x, J = $ + (D - $) * M, Q = tt + (et - tt) * x, X = tt + (et - tt) * M
            }
            const tt = 1 / e.samplesPerSecond;
            if (r.active = !0, 0 == l.type || 1 == l.type || 5 == l.type || 6 == l.type || 7 == l.type) {
                const i = v.getLFOAmplitude(l, b * q),
                    n = v.getLFOAmplitude(l, b * P);
                let o = t.Config.vibratos[l.vibrato].amplitude,
                    r = t.Config.vibratos[l.vibrato].amplitude;
                e.isModActive(p.mstVibratoDepth, !1, s, N) && (o = e.getModValue(p.mstVibratoDepth, !1, s, N, !1) / 25, r = e.getModValue(p.mstVibratoDepth, !1, s, N, !0) / 25), V += (U < t.Config.vibratos[l.vibrato].delayParts ? 0 : o) * i, j += (U < t.Config.vibratos[l.vibrato].delayParts ? 0 : r) * n
            }
            if (!c.isSeamless || (c.slides || null == r.note || 0 != r.note.start) && null == r.prevNote) {
                const t = c.attackSeconds;
                t > 0 && (W *= Math.min(1, b * Q / t), G *= Math.min(1, b * X / t))
            }
            const et = v.instrumentVolumeToVolumeMult(l.volume);
            4 == l.type && (r.drumsetPitch = r.pitches[0], null != r.note && (r.drumsetPitch += r.note.pickMainInterval()), r.drumsetPitch = Math.max(0, Math.min(t.Config.drumCount - 1, r.drumsetPitch)));
            let it, st, nt = l.filterCutoff,
                ot = l.filterCutoff;
            e.isModActive(p.mstFilterCut, !1, s, N) && (nt = i.modValueToReal(e.getModValue(p.mstFilterCut, !1, s, N, !1), p.mstFilterCut), ot = i.modValueToReal(e.getModValue(p.mstFilterCut, !1, s, N, !0), p.mstFilterCut)), 4 == l.type ? (it = 0, st = 0) : (it = .5 * (nt - (t.Config.filterCutoffRange - 1)), st = .5 * (ot - (t.Config.filterCutoffRange - 1)));
            const rt = 4 == l.type ? l.getDrumsetEnvelope(r.drumsetPitch) : l.getFilterEnvelope(),
                ht = t.Config.filterCutoffMaxHz * Math.pow(2, it),
                at = t.Config.filterCutoffMaxHz * Math.pow(2, st),
                lt = 2 * Math.sin(Math.PI * ht / e.samplesPerSecond),
                ct = 2 * Math.sin(Math.PI * at / e.samplesPerSecond),
                dt = 2 * Math.sin(Math.PI * t.Config.filterCutoffMinHz / e.samplesPerSecond);
            r.filter = lt * v.computeEnvelope(rt, b * Q, g * q, Y);
            let mt = ct * v.computeEnvelope(rt, b * X, g * P, Z);
            r.filter = Math.min(t.Config.filterMax, Math.max(dt, r.filter)), mt = Math.min(t.Config.filterMax, Math.max(dt, mt)), r.filterScale = Math.pow(mt / r.filter, 1 / o);
            let ft = Math.pow(.5, .35 * it),
                ut = Math.pow(.5, .35 * st);
            r.filterResonanceStart = l.getFilterResonance(), r.filterResonanceDelta = 0;
            let pt = l.filterResonance,
                yt = l.filterResonance;
            if (r.isFirstOrder = 4 != l.type && 0 == pt, e.isModActive(p.mstFilterPeak, !1, s, N)) {
                r.isFirstOrder = !1, pt = i.modValueToReal(e.getModValue(p.mstFilterPeak, !1, s, N, !1), p.mstFilterPeak), yt = i.modValueToReal(e.getModValue(p.mstFilterPeak, !1, s, N, !0), p.mstFilterPeak), r.filterResonanceStart = t.Config.filterMaxResonance * Math.pow(Math.max(0, pt - 1) / (t.Config.filterResonanceRange - 2), .5);
                const n = t.Config.filterMaxResonance * Math.pow(Math.max(0, yt - 1) / (t.Config.filterResonanceRange - 2), .5);
                r.filterResonanceDelta = (n - r.filterResonanceStart) / o
            } else r.filterResonanceStart = t.Config.filterMaxResonance * Math.pow(Math.max(0, pt - 1) / (t.Config.filterResonanceRange - 2), .5);
            if (0 == r.isFirstOrder && (ft = Math.pow(ft, 1.7) * Math.pow(.5, .125 * (pt - 1)), ut = Math.pow(ut, 1.7) * Math.pow(.5, .125 * (yt - 1))), 8 == rt.type ? (ft *= 1.25 + .025 * rt.speed, ut *= 1.25 + .025 * rt.speed) : 4 == rt.type && (ft *= 1 + .02 * rt.speed, ut *= 1 + .02 * rt.speed), O && r.reset(), 1 == l.type) {
                let n = 1,
                    h = 1,
                    a = 0,
                    c = 0,
                    m = 0;
                if (r.pitchCount > 1 && !d.harmonizes) {
                    const s = Math.floor((e.tick + e.part * t.Config.ticksPerPart) / t.Config.rhythms[i.rhythm].ticksPerArpeggio);
                    m = r.pitches[t.getArpeggioPitchIndex(r.pitchCount, i.rhythm, s)] - r.pitches[0]
                }
                let u = l.detune / 25,
                    w = l.detune / 25;
                e.isModActive(p.mstDetune, !1, s, N) && (u = e.getModValue(p.mstDetune, !1, s, N, !1) / 25, w = e.getModValue(p.mstDetune, !1, s, N, !0) / 25), e.isModActive(p.mstSongDetune, !0) && (u += e.getModValue(p.mstSongDetune, !0, null, null, !1) / 25, w += e.getModValue(p.mstSongDetune, !0, null, null, !0) / 25);
                const k = t.Config.algorithms[l.algorithm].carrierCount;
                for (let i = 0; i < t.Config.operatorCount; i++) {
                    const x = t.Config.algorithms[l.algorithm].associatedCarrier[i] - 1,
                        M = r.pitches[d.harmonizes ? i < r.pitchCount ? i : x < r.pitchCount ? x : 0 : 0],
                        E = t.Config.operatorFrequencies[l.operators[i].frequency].mult,
                        C = t.Config.operatorCarrierInterval[x] + m,
                        S = D + (M + V + u) * y + C,
                        T = E * f.frequencyFromPitch(S) + t.Config.operatorFrequencies[l.operators[i].frequency].hzOffset;
                    r.phaseDeltas[i] = T * tt * t.Config.sineWaveLength;
                    let F = l.operators[i].amplitude,
                        B = l.operators[i].amplitude;
                    e.isModActive(p.mstFMSlider1 + i, !1, s, N) && (F *= e.getModValue(p.mstFMSlider1 + i, !1, s, N, !1) / 15, B *= e.getModValue(p.mstFMSlider1 + i, !1, s, N, !0) / 15);
                    const z = v.operatorAmplitudeCurve(F),
                        R = v.operatorAmplitudeCurve(B);
                    let L = z * t.Config.operatorFrequencies[l.operators[i].frequency].amplitudeSign,
                        A = R * t.Config.operatorFrequencies[l.operators[i].frequency].amplitudeSign;
                    if (e.isModActive(p.mstInsVolume, !1, s, N)) {
                        const i = e.getModValue(p.mstInsVolume, !1, s, N, !1),
                            n = e.getModValue(p.mstInsVolume, !1, s, N, !0);
                        L *= i <= 0 ? (i + t.Config.volumeRange / 2) / (t.Config.volumeRange / 2) : this.instrumentVolumeToVolumeMult(i), A *= n <= 0 ? (n + t.Config.volumeRange / 2) / (t.Config.volumeRange / 2) : this.instrumentVolumeToVolumeMult(n)
                    }
                    if (e.isModActive(p.mstSongVolume, !0) && (L *= e.getModValue(p.mstSongVolume, !0, void 0, void 0, !1) / 100, A *= e.getModValue(p.mstSongVolume, !0, void 0, void 0, !0) / 100), i < k) {
                        const t = D + (M + j + w) * y + C,
                            e = Math.pow(2, -(S - $) / _),
                            i = Math.pow(2, -(t - $) / _);
                        L *= e, A *= i, a += z, c += R
                    } else L *= 1.5 * t.Config.sineWaveLength, A *= 1.5 * t.Config.sineWaveLength, n *= 1 - Math.min(1, F / 15), h *= 1 - Math.min(1, B / 15);
                    const H = t.Config.envelopes[l.operators[i].envelope];
                    L *= v.computeEnvelope(H, b * Q, g * q, Y), A *= v.computeEnvelope(H, b * X, g * P, Z), r.volumeStarts[i] = L, r.volumeDeltas[i] = (A - L) / o
                }
                let x = l.feedbackAmplitude,
                    M = l.feedbackAmplitude;
                e.isModActive(p.mstFMFeedback, !1, s, N) && (x *= e.getModValue(p.mstFMFeedback, !1, s, N, !1) / 15, M *= e.getModValue(p.mstFMFeedback, !1, s, N, !0) / 15);
                const E = .3 * t.Config.sineWaveLength * x / 15,
                    C = .3 * t.Config.sineWaveLength * M / 15,
                    S = t.Config.envelopes[l.feedbackEnvelope];
                let T = E * v.computeEnvelope(S, b * Q, g * q, Y),
                    F = C * v.computeEnvelope(S, b * X, g * P, Z);
                r.feedbackMult = T, r.feedbackDelta = (F - r.feedbackMult) / o;
                const B = I * et;
                r.volumeStart = ft * B * W * K;
                const z = ut * B * G * J;
                r.volumeDelta = (z - r.volumeStart) / o, n *= (Math.pow(2, 2 - 1.4 * x / 15) - 1) / 3, h *= (Math.pow(2, 2 - 1.4 * M / 15) - 1) / 3, n *= 1 - Math.min(1, Math.max(0, a - 1) / 2), h *= 1 - Math.min(1, Math.max(0, c - 1) / 2), r.volumeStart *= 1 + 3 * n, r.volumeDelta *= 1 + 1.5 * (n + h)
            } else if (8 == l.type) {
                r.volumeStart = W;
                let t = G;
                r.volumeStart *= Y, t *= Z, r.volumeDelta = (t - r.volumeStart) / o
            } else {
                let n = l.detune / 25,
                    h = l.detune / 25;
                e.isModActive(p.mstDetune, !1, s, N) && (n = e.getModValue(p.mstDetune, !1, s, N, !1) / 25, h = e.getModValue(p.mstDetune, !1, s, N, !0) / 25), e.isModActive(p.mstSongDetune, !0) && (n += e.getModValue(p.mstSongDetune, !0, null, null, !1) / 25, h += e.getModValue(p.mstSongDetune, !0, null, null, !0) / 25);
                let a = r.pitches[0];
                if (r.pitchCount > 1) {
                    const s = Math.floor((e.tick + e.part * t.Config.ticksPerPart) / t.Config.rhythms[i.rhythm].ticksPerArpeggio);
                    if (d.harmonizes) {
                        const e = r.pitches[1 + t.getArpeggioPitchIndex(r.pitchCount - 1, i.rhythm, s)] - r.pitches[0];
                        r.intervalMult = Math.pow(2, e / 12), r.intervalVolumeMult = Math.pow(2, -e / _)
                    } else a = r.pitches[t.getArpeggioPitchIndex(r.pitchCount, i.rhythm, s)]
                }
                const c = D + (a + V + n) * y,
                    m = D + (a + j + h) * y,
                    u = f.frequencyFromPitch(c),
                    w = Math.pow(2, -(c - $) / _),
                    k = Math.pow(2, -(m - $) / _);
                let x = I * ft,
                    M = I * ut;
                if (2 == l.type && (x *= t.Config.chipNoises[l.chipNoise].volume, M *= t.Config.chipNoises[l.chipNoise].volume), 0 != l.type && 7 != l.type || (x *= t.Config.chipWaves[l.chipWave].volume, M *= t.Config.chipWaves[l.chipWave].volume), 0 != l.type && 5 != l.type && 7 != l.type || (x *= t.Config.intervals[l.interval].volume, M *= t.Config.intervals[l.interval].volume), 6 == l.type) {
                    let i = l.pulseWidth / (2 * t.Config.pulseWidthRange),
                        n = l.pulseWidth / (2 * t.Config.pulseWidthRange);
                    e.isModActive(p.mstPulseWidth, !1, s, N) && (i = e.getModValue(p.mstPulseWidth, !1, s, N, !1) / (2 * t.Config.pulseWidthRange), n = e.getModValue(p.mstPulseWidth, !1, s, N, !0) / (2 * t.Config.pulseWidthRange));
                    const h = t.Config.envelopes[l.pulseEnvelope],
                        a = i * v.computeEnvelope(h, b * Q, g * q, Y),
                        c = n * v.computeEnvelope(h, b * X, g * P, Z);
                    r.pulseWidth = a, r.pulseWidthDelta = (c - a) / o
                }
                r.phaseDeltas[0] = u * tt, r.volumeStart = W * K * w * x * et;
                let E = G * J * k * M * et;
                if (0 == rt.type || 6 == l.type && 0 == t.Config.envelopes[l.pulseEnvelope].type || (r.volumeStart *= Y, E *= Z), e.isModActive(p.mstInsVolume, !1, s, N)) {
                    const i = e.getModValue(p.mstInsVolume, !1, s, N, !1),
                        n = e.getModValue(p.mstInsVolume, !1, s, N, !0);
                    r.volumeStart *= i <= 0 ? (i + t.Config.volumeRange / 2) / (t.Config.volumeRange / 2) : this.instrumentVolumeToVolumeMult(i), E *= n <= 0 ? (n + t.Config.volumeRange / 2) / (t.Config.volumeRange / 2) : this.instrumentVolumeToVolumeMult(n)
                }
                e.isModActive(p.mstSongVolume, !0) && (r.volumeStart *= e.getModValue(p.mstSongVolume, !0, void 0, void 0, !1) / 100, E *= e.getModValue(p.mstSongVolume, !0, void 0, void 0, !0) / 100), r.volumeDelta = (E - r.volumeStart) / o
            }
            r.phaseDeltaScale = Math.pow(2, (j - V) * y / 12 / o)
        }
        static getLFOAmplitude(e, i) {
            let s = 0;
            for (const n of t.Config.vibratos[e.vibrato].periodsSeconds) s += Math.sin(2 * Math.PI * i / n);
            return s
        }
        static getInstrumentSynthFunction(e) {
            if (1 == e.type) {
                const i = e.algorithm + "_" + e.feedbackType;
                if (void 0 == v.fmSynthFunctionCache[i]) {
                    const s = [];
                    for (const i of v.fmSourceTemplate)
                        if (-1 != i.indexOf("// CARRIER OUTPUTS")) {
                            const n = [];
                            for (let i = 0; i < t.Config.algorithms[e.algorithm].carrierCount; i++) n.push("operator" + i + "Scaled");
                            s.push(i.replace("/*operator#Scaled*/", n.join(" + ")))
                        } else if (-1 != i.indexOf("// INSERT OPERATOR COMPUTATION HERE"))
                        for (let i = t.Config.operatorCount - 1; i >= 0; i--)
                            for (const n of v.operatorSourceTemplate)
                                if (-1 != n.indexOf("/* + operator@Scaled*/")) {
                                    let o = "";
                                    for (const s of t.Config.algorithms[e.algorithm].modulatedBy[i]) o += " + operator" + (s - 1) + "Scaled";
                                    const r = t.Config.feedbacks[e.feedbackType].indices[i];
                                    if (r.length > 0) {
                                        o += " + feedbackMult * (";
                                        const t = [];
                                        for (const e of r) t.push("operator" + (e - 1) + "Output");
                                        o += t.join(" + ") + ")"
                                    }
                                    s.push(n.replace(/\#/g, i + "").replace("/* + operator@Scaled*/", o))
                                } else s.push(n.replace(/\#/g, i + ""));
                    else if (-1 != i.indexOf("#"))
                        for (let e = 0; e < t.Config.operatorCount; e++) s.push(i.replace(/\#/g, e + ""));
                    else s.push(i);
                    v.fmSynthFunctionCache[i] = new Function("synth", "data", "stereoBufferIndex", "stereoBufferLength", "runLength", "tone", "instrument", s.join("\n"))
                }
                return v.fmSynthFunctionCache[i]
            }
            if (0 == e.type) return v.chipSynth;
            if (7 == e.type) return v.chipSynth;
            if (5 == e.type) return v.harmonicsSynth;
            if (6 == e.type) return v.pulseWidthSynth;
            if (2 == e.type) return v.noiseSynth;
            if (3 == e.type) return v.spectrumSynth;
            if (4 == e.type) return v.drumsetSynth;
            if (8 == e.type) return v.modSynth;
            throw new Error("Unrecognized instrument type: " + e.type)
        }
        static chipSynth(e, i, s, n, o, r, h) {
            var a, l;
            7 == h.type ? (a = h.customChipWaveIntegral, l = .1) : (a = t.Config.chipWaves[h.chipWave].samples, l = 1);
            const c = +a.length - 1,
                d = +Math.pow(2, (t.Config.intervals[h.interval].offset + t.Config.intervals[h.interval].spread) / 12),
                m = Math.pow(2, (t.Config.intervals[h.interval].offset - t.Config.intervals[h.interval].spread) / 12) * r.intervalMult,
                f = r.intervalVolumeMult * t.Config.intervals[h.interval].sign;
            0 != h.interval || h.getChord().customInterval || (r.phases[1] = r.phases[0]);
            const u = m / d;
            let p = r.phaseDeltas[0] * d * c,
                y = p * u;
            const b = +r.phaseDeltaScale;
            let g = +r.volumeStart;
            const v = +r.volumeDelta;
            let w = r.phases[0] % 1 * c,
                k = r.phases[1] % 1 * c;
            const x = r.isFirstOrder;
            let M = +r.filter,
                E = x ? 1 : M;
            const C = +r.filterScale,
                S = x ? 1 : C;
            let q = r.filterResonanceStart,
                P = r.filterResonanceDelta,
                N = +r.filterSample0,
                T = +r.filterSample1;
            const F = 0 | w,
                B = 0 | k,
                z = F % c,
                R = B % c,
                L = w - F,
                A = k - B;
            let H = a[z],
                $ = a[R];
            H += (a[z + 1] - H) * L, $ += (a[R + 1] - $) * A;
            const D = s + o;
            s += r.stereoOffset;
            let I, _ = r.stereoVolumeLStart,
                O = r.stereoVolumeLDelta,
                U = r.stereoVolumeRStart,
                V = r.stereoVolumeRDelta,
                j = r.stereoDelayStart,
                W = r.stereoDelayDelta;
            for (; s < D;) {
                const t = 0 | (w += p),
                    e = 0 | (k += y),
                    o = t % c,
                    r = e % c;
                let h = a[o],
                    d = a[r];
                const m = w - t,
                    u = k - e;
                let x = ((h += (a[o + 1] - h) * m) - H) / p,
                    F = ((d += (a[r + 1] - d) * u) - $) / y;
                H = h, $ = d, T += E * ((N += M * (x + F * f - N + (q + q / (1 - M)) * (N - T))) - T), M *= C, E *= S, p *= b, y *= b, q += P;
                const B = T * g * l;
                g += v, i[(s + (I = j < 0 ? [0, 0, 2 * (0 | -j), -j % 1] : [2 * (0 | j), j % 1, 0, 0])[0]) % n] += B * _ * (1 - I[1]), i[(s + I[0] + 2) % n] += B * _ * I[1], i[(s + I[2] + 1) % n] += B * U * (1 - I[3]), i[(s + I[2] + 3) % n] += B * U * I[3], _ += O, U += V, j += W, s += 2
            }
            r.phases[0] = w / c, r.phases[1] = k / c; - 1e-24 < N && N < 1e-24 && (N = 0), -1e-24 < T && T < 1e-24 && (T = 0), r.filterSample0 = N, r.filterSample1 = T
        }
        static harmonicsSynth(e, i, s, n, o, r, h) {
            const a = h.harmonicsWave.getCustomWave(),
                l = +a.length - 1,
                c = +Math.pow(2, (t.Config.intervals[h.interval].offset + t.Config.intervals[h.interval].spread) / 12),
                d = Math.pow(2, (t.Config.intervals[h.interval].offset - t.Config.intervals[h.interval].spread) / 12) * r.intervalMult,
                m = r.intervalVolumeMult * t.Config.intervals[h.interval].sign;
            0 != h.interval || h.getChord().customInterval || (r.phases[1] = r.phases[0]);
            const f = d / c;
            let u = r.phaseDeltas[0] * c * l,
                p = u * f;
            const y = +r.phaseDeltaScale;
            let b = +r.volumeStart;
            const g = +r.volumeDelta;
            let v = r.phases[0] % 1 * l,
                w = r.phases[1] % 1 * l;
            const k = r.isFirstOrder;
            let x = +r.filter,
                M = k ? 1 : x;
            const E = +r.filterScale,
                C = k ? 1 : E;
            let S = r.filterResonanceStart,
                q = r.filterResonanceDelta,
                P = +r.filterSample0,
                N = +r.filterSample1;
            const T = 0 | v,
                F = 0 | w,
                B = T % l,
                z = F % l,
                R = v - T,
                L = w - F;
            let A = a[B],
                H = a[z];
            A += (a[B + 1] - A) * R, H += (a[z + 1] - H) * L;
            const $ = s + o;
            s += r.stereoOffset;
            let D, I = r.stereoVolumeLStart,
                _ = r.stereoVolumeLDelta,
                O = r.stereoVolumeRStart,
                U = r.stereoVolumeRDelta,
                V = r.stereoDelayStart,
                j = r.stereoDelayDelta;
            for (; s < $;) {
                const t = 0 | (v += u),
                    e = 0 | (w += p),
                    o = t % l,
                    r = e % l;
                let h = a[o],
                    c = a[r];
                const d = v - t,
                    f = w - e;
                let k = ((h += (a[o + 1] - h) * d) - A) / u,
                    T = ((c += (a[r + 1] - c) * f) - H) / p;
                A = h, H = c, N += M * ((P += x * (k + T * m - P + (S + S / (1 - x)) * (P - N))) - N), x *= E, M *= C, u *= y, p *= y, S += q;
                const F = N * b;
                b += g, i[(s + (D = V < 0 ? [0, 0, 2 * (0 | -V), -V % 1] : [2 * (0 | V), V % 1, 0, 0])[0]) % n] += F * I * (1 - D[1]), i[(s + D[0] + 2) % n] += F * I * D[1], i[(s + D[2] + 1) % n] += F * O * (1 - D[3]), i[(s + D[2] + 3) % n] += F * O * D[3], I += _, O += U, V += j, s += 2
            }
            r.phases[0] = v / l, r.phases[1] = w / l; - 1e-24 < P && P < 1e-24 && (P = 0), -1e-24 < N && N < 1e-24 && (N = 0), r.filterSample0 = P, r.filterSample1 = N
        }
        static pulseWidthSynth(t, e, i, s, n, o, r) {
            let h = o.phaseDeltas[0];
            const a = +o.phaseDeltaScale;
            let l = +o.volumeStart;
            const c = +o.volumeDelta;
            let d = o.phases[0] % 1,
                m = o.pulseWidth;
            const f = o.pulseWidthDelta,
                u = o.isFirstOrder;
            let p = +o.filter,
                y = u ? 1 : p;
            const b = +o.filterScale,
                g = u ? 1 : b;
            let v = o.filterResonanceStart,
                w = o.filterResonanceDelta,
                k = +o.filterSample0,
                x = +o.filterSample1;
            const M = i + n;
            i += o.stereoOffset;
            let E, C = o.stereoVolumeLStart,
                S = o.stereoVolumeLDelta,
                q = o.stereoVolumeRStart,
                P = o.stereoVolumeRDelta,
                N = o.stereoDelayStart,
                T = o.stereoDelayDelta;
            for (; i < M;) {
                const t = d % 1,
                    n = (d + m) % 1;
                let o = n - t;
                if (t < h) o += .5 * ((F = t / h) + F - F * F - 1);
                else if (t > 1 - h) {
                    o += .5 * ((F = (t - 1) / h) + F + F * F + 1)
                }
                if (n < h) o -= .5 * ((F = n / h) + F - F * F - 1);
                else if (n > 1 - h) {
                    var F;
                    o -= .5 * ((F = (n - 1) / h) + F + F * F + 1)
                }
                x += y * ((k += p * (o - k + (v + v / (1 - p)) * (k - x))) - x), p *= b, y *= g, d += h, h *= a, m += f, v += w;
                const r = x * l;
                l += c, e[(i + (E = N < 0 ? [0, 0, 2 * (0 | -N), -N % 1] : [2 * (0 | N), N % 1, 0, 0])[0]) % s] += r * C * (1 - E[1]), e[(i + E[0] + 2) % s] += r * C * E[1], e[(i + E[2] + 1) % s] += r * q * (1 - E[3]), e[(i + E[2] + 3) % s] += r * q * E[3], C += S, q += P, N += T, i += 2
            }
            o.phases[0] = d; - 1e-24 < k && k < 1e-24 && (k = 0), -1e-24 < x && x < 1e-24 && (x = 0), o.filterSample0 = k, o.filterSample1 = x
        }
        static noiseSynth(e, i, s, n, o, r, h) {
            let a = h.getDrumWave(),
                l = +r.phaseDeltas[0];
            const c = +r.phaseDeltaScale;
            let d = +r.volumeStart;
            const m = +r.volumeDelta;
            let f = r.phases[0] % 1 * t.Config.chipNoiseLength;
            0 == r.phases[0] && (f = Math.random() * t.Config.chipNoiseLength);
            let u = +r.sample;
            const p = r.isFirstOrder;
            let y = +r.filter,
                b = p ? 1 : y;
            const g = +r.filterScale,
                v = p ? 1 : g;
            let w = r.filterResonanceStart,
                k = r.filterResonanceDelta,
                x = +r.filterSample0,
                M = +r.filterSample1;
            const E = Math.min(1, r.phaseDeltas[0] * t.Config.chipNoises[h.chipNoise].pitchFilterMult),
                C = s + o;
            s += r.stereoOffset;
            let S, q = r.stereoVolumeLStart,
                P = r.stereoVolumeLDelta,
                N = r.stereoVolumeRStart,
                T = r.stereoVolumeRDelta,
                F = r.stereoDelayStart,
                B = r.stereoDelayDelta;
            for (; s < C;) {
                M += b * ((x += y * ((u += (a[32767 & f] - u) * E) - x + (w + w / (1 - y)) * (x - M))) - M), f += l, y *= g, b *= v, l *= c, w += k;
                const t = M * d;
                d += m, i[(s + (S = F < 0 ? [0, 0, 2 * (0 | -F), -F % 1] : [2 * (0 | F), F % 1, 0, 0])[0]) % n] += t * q * (1 - S[1]), i[(s + S[0] + 2) % n] += t * q * S[1], i[(s + S[2] + 1) % n] += t * N * (1 - S[3]), i[(s + S[2] + 3) % n] += t * N * S[3], q += P, N += T, F += B, s += 2
            }
            r.phases[0] = f / t.Config.chipNoiseLength, r.sample = u; - 1e-24 < x && x < 1e-24 && (x = 0), -1e-24 < M && M < 1e-24 && (M = 0), r.filterSample0 = x, r.filterSample1 = M
        }
        static spectrumSynth(e, i, s, n, o, r, h) {
            let a = h.getDrumWave(),
                l = 128 * r.phaseDeltas[0];
            const c = +r.phaseDeltaScale;
            let d = +r.volumeStart;
            const m = +r.volumeDelta;
            let f = +r.sample;
            const u = r.isFirstOrder;
            let p = +r.filter,
                y = u ? 1 : p;
            const b = +r.filterScale,
                g = u ? 1 : b;
            let w = r.filterResonanceStart,
                k = r.filterResonanceDelta,
                x = +r.filterSample0,
                M = +r.filterSample1,
                E = r.phases[0] % 1 * t.Config.chipNoiseLength;
            0 == r.phases[0] && (E = v.findRandomZeroCrossing(a) + l);
            const C = Math.min(1, l),
                S = s + o;
            s += r.stereoOffset;
            let q, P = r.stereoVolumeLStart,
                N = r.stereoVolumeLDelta,
                T = r.stereoVolumeRStart,
                F = r.stereoVolumeRDelta,
                B = r.stereoDelayStart,
                z = r.stereoDelayDelta;
            for (; s < S;) {
                const t = 0 | E,
                    e = 32767 & t;
                let o = a[e];
                const r = E - t;
                M += y * ((x += p * ((f += ((o += (a[e + 1] - o) * r) - f) * C) - x + (w + w / (1 - p)) * (x - M))) - M), E += l, p *= b, y *= g, l *= c, w += k;
                const h = M * d;
                d += m, i[(s + (q = B < 0 ? [0, 0, 2 * (0 | -B), -B % 1] : [2 * (0 | B), B % 1, 0, 0])[0]) % n] += h * P * (1 - q[1]), i[(s + q[0] + 2) % n] += h * P * q[1], i[(s + q[2] + 1) % n] += h * T * (1 - q[3]), i[(s + q[2] + 3) % n] += h * T * q[3], P += N, T += F, B += z, s += 2
            }
            r.phases[0] = E / t.Config.chipNoiseLength, r.sample = f; - 1e-24 < x && x < 1e-24 && (x = 0), -1e-24 < M && M < 1e-24 && (M = 0), r.filterSample0 = x, r.filterSample1 = M
        }
        static drumsetSynth(e, i, s, n, o, r, h) {
            let a = h.getDrumsetWave(r.drumsetPitch),
                l = r.phaseDeltas[0] / f.drumsetIndexReferenceDelta(r.drumsetPitch);
            const c = +r.phaseDeltaScale;
            let d = +r.volumeStart;
            const m = +r.volumeDelta;
            let u = +r.sample;
            const p = r.isFirstOrder;
            let y = +r.filter,
                b = p ? 1 : y;
            const g = +r.filterScale,
                w = p ? 1 : g;
            let k = r.filterResonanceStart,
                x = r.filterResonanceDelta,
                M = +r.filterSample0,
                E = +r.filterSample1,
                C = r.phases[0] % 1 * t.Config.chipNoiseLength;
            0 == r.phases[0] && (C = v.findRandomZeroCrossing(a) + l);
            const S = s + o;
            s += r.stereoOffset;
            let q, P = r.stereoVolumeLStart,
                N = r.stereoVolumeLDelta,
                T = r.stereoVolumeRStart,
                F = r.stereoVolumeRDelta,
                B = r.stereoDelayStart,
                z = r.stereoDelayDelta;
            for (; s < S;) {
                const t = 0 | C,
                    e = 32767 & t;
                u = a[e];
                const o = C - t;
                E += b * ((M += y * ((u += (a[e + 1] - u) * o) - M + (k + k / (1 - y)) * (M - E))) - E), C += l, y *= g, b *= w, l *= c, k += x;
                const r = E * d;
                d += m, i[(s + (q = B < 0 ? [0, 0, 2 * (0 | -B), -B % 1] : [2 * (0 | B), B % 1, 0, 0])[0]) % n] += r * P * (1 - q[1]), i[(s + q[0] + 2) % n] += r * P * q[1], i[(s + q[2] + 1) % n] += r * T * (1 - q[3]), i[(s + q[2] + 3) % n] += r * T * q[3], P += N, T += F, B += z, s += 2
            }
            r.phases[0] = C / t.Config.chipNoiseLength, r.sample = u; - 1e-24 < M && M < 1e-24 && (M = 0), -1e-24 < E && E < 1e-24 && (E = 0), r.filterSample0 = M, r.filterSample1 = E
        }
        static modSynth(e, i, s, n, o, r, h) {
            if (!e.song) return;
            let a = t.Config.modCount - 1 - r.pitches[0],
                l = h.modSettings[a];
            e.setModValue(r.customVolumeStart, r.customVolumeEnd, a, h, l), l == p.mstNextBar && e.skipBar()
        }
        static findRandomZeroCrossing(e) {
            let i = Math.random() * t.Config.chipNoiseLength,
                s = 32767 & i,
                n = e[s];
            for (let o = 128; o > 0; o--) {
                const o = s + 16 & 32767,
                    r = e[o];
                if (n * r <= 0) {
                    for (let o = 0; o < 16; o++) {
                        const o = s + 1 & 32767,
                            r = e[o];
                        if (n * r <= 0) {
                            const e = r - n;
                            i = s, Math.abs(e) > 1e-8 && (i += -n / e), i = Math.max(0, i) % t.Config.chipNoiseLength;
                            break
                        }
                        s = o, n = r
                    }
                    break
                }
                s = o, n = r
            }
            return i
        }
        static instrumentVolumeToVolumeMult(e) {
            return e == -t.Config.volumeRange / 2 ? 0 : Math.pow(2, t.Config.volumeLogScale * e)
        }
        static volumeMultToInstrumentVolume(e) {
            return e <= 0 ? -t.Config.volumeRange / 2 : Math.min(t.Config.volumeRange, Math.log(e) / Math.LN2 / t.Config.volumeLogScale)
        }
        static expressionToVolumeMult(t) {
            return Math.pow(Math.max(0, t) / 6, 1.5)
        }
        static volumeMultToExpression(t) {
            return 6 * Math.pow(Math.max(0, t), 1 / 1.5)
        }
        getSamplesPerTick() {
            if (null == this.song) return 0;
            let t = this.song.getBeatsPerMinute();
            return this.isModActive(p.mstTempo, !0) && (t = this.getModValue(p.mstTempo, !0)), this.getSamplesPerTickSpecificBPM(t)
        }
        getSamplesPerTickSpecificBPM(e) {
            const i = e / 60 * t.Config.partsPerBeat * t.Config.ticksPerPart;
            return Math.floor(this.samplesPerSecond / i)
        }
    }
    v.fmSynthFunctionCache = {}, v.fmSourceTemplate = ("\n\t\t\tconst sineWave = beepbox.Config.sineWave;\n\t\t\t\n\t\t\tlet phaseDeltaScale = +tone.phaseDeltaScale;\n\t\t\t// I'm adding 1000 to the phase to ensure that it's never negative even when modulated by other waves because negative numbers don't work with the modulus operator very well.\n\t\t\tlet operator#Phase       = +((tone.phases[#] % 1) + 1000) * beepbox.Config.sineWaveLength;\n\t\t\tlet operator#PhaseDelta  = +tone.phaseDeltas[#];\n\t\t\tlet operator#OutputMult  = +tone.volumeStarts[#];\n\t\t\tconst operator#OutputDelta = +tone.volumeDeltas[#];\n\t\t\tlet operator#Output      = +tone.feedbackOutputs[#];\n\t\t\tlet feedbackMult         = +tone.feedbackMult;\n\t\t\tconst feedbackDelta        = +tone.feedbackDelta;\n\t\t\tlet volume = +tone.volumeStart;\n\t\t\tconst volumeDelta = +tone.volumeDelta;\n\t\t\t\n\t\t\tconst isFirstOrder = tone.isFirstOrder;\n\t\t\tlet filter1 = +tone.filter;\n\t\t\tlet filter2 = isFirstOrder ? 1.0 : filter1;\n\t\t\tconst filterScale1 = +tone.filterScale;\n\t\t\tconst filterScale2 = isFirstOrder ? 1.0 : filterScale1;\n\t\t\tlet filterResonance = tone.filterResonanceStart;\n\t\t\tlet filterResonanceDelta = tone.filterResonanceDelta;\n\t\t\tlet filterSample0 = +tone.filterSample0;\n\t\t\tlet filterSample1 = +tone.filterSample1;\n\t\t\t\n\t\t\tconst stopIndex = stereoBufferIndex + runLength;\n\t\t\tstereoBufferIndex += tone.stereoOffset;\n\t\t\tlet stereoVolumeL = tone.stereoVolumeLStart;\n\t\t\tlet stereoVolumeLDelta = tone.stereoVolumeLDelta;\n\t\t\tlet stereoVolumeR = tone.stereoVolumeRStart;\n\t\t\tlet stereoVolumeRDelta = tone.stereoVolumeRDelta;\n\t\t\tlet stereoDelay = tone.stereoDelayStart;\n\t\t\tlet stereoDelayDelta = tone.stereoDelayDelta;\n\t\t\tlet delays = [];\n\t\t\twhile (stereoBufferIndex < stopIndex) {\n\t\t\t\t// INSERT OPERATOR COMPUTATION HERE\n\t\t\t\tconst fmOutput = (/*operator#Scaled*/); // CARRIER OUTPUTS\n\t\t\t\t\n\t\t\t\tconst feedback = filterResonance + filterResonance / (1.0 - filter1);\n\t\t\t\tfilterSample0 += filter1 * (fmOutput - filterSample0 + feedback * (filterSample0 - filterSample1));\n\t\t\t\tfilterSample1 += filter2 * (filterSample0 - filterSample1);\n\t\t\t\t\n\t\t\t\tfeedbackMult += feedbackDelta;\n\t\t\t\toperator#OutputMult += operator#OutputDelta;\n\t\t\t\toperator#Phase += operator#PhaseDelta;\n\t\t\t\toperator#PhaseDelta *= phaseDeltaScale;\n\t\t\t\tfilter1 *= filterScale1;\n\t\t\t\tfilter2 *= filterScale2;\n\t\t\t\tfilterResonance += filterResonanceDelta;\n\t\t\t\t\n\t\t\t\tconst output = filterSample1 * volume;\n\t\t\t\tvolume += volumeDelta;\n\n\t\t\t\t//const absStereoDelay: number = Math.abs(stereoDelay);\n\t\t\t\t//const fracStereoDelay: number = absStereoDelay % 1;\n\t\t\t\t//const floorStereoDelay: number = absStereoDelay | 0;\n\n\t\t\t\t//delays = stereoDelay < 0 ? [0, 0, floorStereoDelay * 2, fracStereoDelay] : [floorStereoDelay * 2, fracStereoDelay, 0, 0];\n\n\t\t\t\t// Optimized ver: can remove the above three declarations, but muddier conceptually. Still has that conditional, too...\n\t\t\t\tdelays = stereoDelay < 0 ? [0, 0, ((-stereoDelay) | 0) * 2, (-stereoDelay) % 1] : [(stereoDelay | 0) * 2, stereoDelay % 1, 0, 0];\n\n\t\t\t\tdata[(stereoBufferIndex + delays[0]) % stereoBufferLength] += output * stereoVolumeL * (1 - delays[1]);\n\t\t\t\tdata[(stereoBufferIndex + delays[0] + 2) % stereoBufferLength] += output * stereoVolumeL * delays[1];\n\t\t\t\tdata[(stereoBufferIndex + delays[2] + 1) % stereoBufferLength] += output * stereoVolumeR * (1 - delays[3]);\n\t\t\t\tdata[(stereoBufferIndex + delays[2] + 3) % stereoBufferLength] += output * stereoVolumeR * delays[3];\n\n\t\t\t\tstereoVolumeL += stereoVolumeLDelta;\n\t\t\t\tstereoVolumeR += stereoVolumeRDelta;\n\t\t\t\tstereoDelay += stereoDelayDelta;\n\n\t\t\t\tstereoBufferIndex += 2;\n\t\t\t}\n\t\t\t\n\t\t\ttone.phases[#] = operator#Phase / " + t.Config.sineWaveLength + ";\n\t\t\ttone.feedbackOutputs[#] = operator#Output;\n\t\t\t\n\t\t\tconst epsilon = (1.0e-24);\n\t\t\tif (-epsilon < filterSample0 && filterSample0 < epsilon) filterSample0 = 0.0;\n\t\t\tif (-epsilon < filterSample1 && filterSample1 < epsilon) filterSample1 = 0.0;\n\t\t\ttone.filterSample0 = filterSample0;\n\t\t\ttone.filterSample1 = filterSample1;\n\t\t").split("\n"), v.operatorSourceTemplate = ("\n\t\t\t\tconst operator#PhaseMix = operator#Phase/* + operator@Scaled*/;\n\t\t\t\tconst operator#PhaseInt = operator#PhaseMix|0;\n\t\t\t\tconst operator#Index    = operator#PhaseInt & " + t.Config.sineWaveMask + ";\n\t\t\t\tconst operator#Sample   = sineWave[operator#Index];\n\t\t\t\toperator#Output       = operator#Sample + (sineWave[operator#Index + 1] - operator#Sample) * (operator#PhaseMix - operator#PhaseInt);\n\t\t\t\tconst operator#Scaled   = operator#OutputMult * operator#Output;\n\t\t").split("\n"), t.Synth = v
}(beepbox || (beepbox = {})),
function(t) {
    const e = "songVersion: ",
        i = 8,
        s = 18e4,
        n = 6e4;

    function o(t) {
        return JSON.parse(t.substring(e.length))
    }

    function r(t) {
        return e + JSON.stringify(t)
    }

    function h(t, e) {
        return e.versions[0].time - t.versions[0].time
    }

    function a(t, e) {
        return e.time - t.time
    }
    t.versionToKey = r, t.generateUid = function() {
        return ("00000" + (Math.random() * (-1 >>> 0) >>> 0).toString(32)).slice(-6)
    };
    class l {
        constructor() {
            this.O = 0, this.U = new t.Song
        }
        static getAllRecoveredSongs() {
            const t = [],
                i = {};
            for (let s = 0; s < localStorage.length; s++) {
                const n = localStorage.key(s);
                if (0 == n.indexOf(e)) {
                    const e = o(n);
                    let s = i[e.uid];
                    void 0 == s && (s = {
                        versions: []
                    }, i[e.uid] = s, t.push(s)), s.versions.push(e)
                }
            }
            for (const e of t) e.versions.sort(a);
            return t.sort(h), t
        }
        saveVersion(t, e) {
            const o = Math.round(Date.now());
            clearTimeout(this.O), this.O = setTimeout(() => {
                try {
                    this.U.fromBase64String(e)
                } catch (t) {
                    return void window.alert('Whoops, the song data appears to have been corrupted! Please try to recover the last working version of the song from the "Recover Recent Song..." option in BeepBox\'s "File" menu.')
                }
                const h = l.getAllRecoveredSongs();
                let a = null;
                for (const e of h) e.versions[0].uid == t && (a = e);
                null == a && (a = {
                    versions: []
                }, h.unshift(a));
                let c = a.versions,
                    d = 1e3;
                if (c.length > 0) {
                    const t = c[0].time;
                    d = c[0].work + Math.min(s, o - t)
                }
                const m = {
                        uid: t,
                        time: o,
                        work: d
                    },
                    f = r(m);
                c.unshift(m), localStorage.setItem(f, e);
                let u = n;
                const p = Math.pow(2, .5);
                for (var y = 1; y < c.length; y++) {
                    if (c[y].work - (y == c.length - 1 ? 0 : c[y + 1].work) < u) {
                        let t = y;
                        if (y < c.length - 1) {
                            const e = c[y].time,
                                i = c[y - 1].time;
                            e - c[y + 1].time < .5 * (i - e) && (t = y + 1)
                        }
                        localStorage.removeItem(r(c[t]));
                        break
                    }
                    u *= p
                }
                for (; h.length > i;) {
                    let t = null,
                        e = Number.POSITIVE_INFINITY;
                    for (let s = Math.round(i / 2); s < h.length; s++) {
                        const i = h[s],
                            n = 1 / ((o - i.versions[0].time) / 432e5 + 1),
                            r = (i.versions[0].work + 3e5) * n;
                        e > r && (e = r, t = i)
                    }
                    for (const e of t.versions) localStorage.removeItem(r(e));
                    h.splice(h.indexOf(t), 1)
                }
            }, 750)
        }
    }
    t.SongRecovery = l
}(beepbox || (beepbox = {})),
function(t) {
    t.ChangeNotifier = class {
        constructor() {
            this.V = [], this.j = !1
        }
        watch(t) {
            -1 == this.V.indexOf(t) && this.V.push(t)
        }
        unwatch(t) {
            const e = this.V.indexOf(t); - 1 != e && this.V.splice(e, 1)
        }
        changed() {
            this.j = !0
        }
        notifyWatchers() {
            if (this.j) {
                this.j = !1;
                for (const t of this.V.concat()) t()
            }
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        constructor() {
            this.notifier = new t.ChangeNotifier, this.channel = 0, this.bar = 0, this.alwaysFineNoteVol = !1, this.alwaysShowSettings = !0, this.volume = 75, this.trackVisibleBars = 16, this.barScrollPos = 0, this.prompt = null, this.windowOctaves = +(window.localStorage.getItem("extraOctaves") || "0") + 3, this.scrollableOctaves = t.Config.pitchOctaves - this.windowOctaves, this.windowPitchCount = this.windowOctaves * t.Config.pitchesPerOctave + 1, this.W = new t.SongRecovery, this.K = null, this.J = 0, this.Y = 0, this.Z = !1, this.X = 0, this.tt = 0, this.et = !1, this.it = (() => {
                if (null == window.history.state && "" != window.location.hash) {
                    this.J++, this.st();
                    const e = {
                        canUndo: !0,
                        sequenceNumber: this.J,
                        bar: this.bar,
                        channel: this.channel,
                        recoveryUid: this.nt,
                        prompt: null
                    };
                    return new t.ChangeSong(this, window.location.hash), this.prompt = e.prompt, this.displayBrowserUrl ? this.ot(e, this.song.toBase64String()) : this.rt(e, this.song.toBase64String()), this.forgetLastChange(), void this.notifier.notifyWatchers()
                }
                const e = this.ht();
                if (null == e) throw new Error("History state is null.");
                e.sequenceNumber != this.J && (e.sequenceNumber == this.J - 1 ? (this.bar = this.X, this.channel = this.tt) : e.sequenceNumber != this.J && (this.bar = e.bar, this.channel = e.channel), this.J = e.sequenceNumber, this.prompt = e.prompt, new t.ChangeSong(this, this.at()), this.X = e.bar, this.tt = e.channel, this.nt = e.recoveryUid, this.forgetLastChange(), this.notifier.notifyWatchers())
            }), this.lt = (() => {
                this.notifier.notifyWatchers()
            }), this.ct = (() => {
                this.et = !1;
                const t = this.song.toBase64String();
                1 == this.Y ? this.J++ : this.Y >= 2 && (this.J += 2), this.Z ? this.st() : this.W.saveVersion(this.nt, t);
                let e = {
                    canUndo: !0,
                    sequenceNumber: this.J,
                    bar: this.bar,
                    channel: this.channel,
                    recoveryUid: this.nt,
                    prompt: this.prompt
                };
                0 == this.Y ? this.ot(e, t) : this.rt(e, t), this.X = e.bar, this.tt = e.channel, this.Y = 0, this.Z = !1
            }), this.autoPlay = "true" == window.localStorage.getItem("autoPlay"), this.autoFollow = "true" == window.localStorage.getItem("autoFollow"), this.enableNotePreview = "true" == window.localStorage.getItem("enableNotePreview"), this.showFifth = "true" == window.localStorage.getItem("showFifth"), this.showLetters = "true" == window.localStorage.getItem("showLetters"), this.showChannels = "true" == window.localStorage.getItem("showChannels"), this.showScrollBar = "true" == window.localStorage.getItem("showScrollBar"), this.alwaysFineNoteVol = "true" == window.localStorage.getItem("alwaysFineNoteVol"), this.enableChannelMuting = "true" == window.localStorage.getItem("enableChannelMuting"), this.displayBrowserUrl = "false" != window.localStorage.getItem("displayBrowserUrl"), this.fullScreen = window.localStorage.getItem("fullScreen") || "normal", this.colorTheme = window.localStorage.getItem("colorTheme") || "blu default", t.ColorConfig.setTheme(this.colorTheme), t.Layout.setFullScreen(this.fullScreen), null != window.localStorage.getItem("volume") && (this.volume = Math.min(window.localStorage.getItem("volume") >>> 0, 75)), null == window.sessionStorage.getItem("currentUndoIndex") && (window.sessionStorage.setItem("currentUndoIndex", "0"), window.sessionStorage.setItem("oldestUndoIndex", "0"), window.sessionStorage.setItem("newestUndoIndex", "0"));
            let e = window.location.hash;
            "" == e && (e = this.at()), this.song = new t.Song(e), "" != e && void 0 != e || t.setDefaultInstruments(this.song), e = this.song.toBase64String(), this.synth = new t.Synth(this.song), this.synth.volume = this.dt();
            let i = this.ht();
            null == i && (i = {
                canUndo: !1,
                sequenceNumber: 0,
                bar: 0,
                channel: 0,
                recoveryUid: t.generateUid(),
                prompt: null
            }), void 0 == i.recoveryUid && (i.recoveryUid = t.generateUid()), this.ot(i, e), window.addEventListener("hashchange", this.it), window.addEventListener("popstate", this.it), this.bar = i.bar, this.channel = i.channel, this.X = i.bar, this.tt = i.channel, this.nt = i.recoveryUid, this.barScrollPos = Math.max(0, this.bar - (this.trackVisibleBars - 6)), this.prompt = i.prompt;
            for (const t of ["input", "change", "click", "keyup", "keydown", "mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"]) window.addEventListener(t, this.lt)
        }
        toggleDisplayBrowserUrl() {
            const t = this.ht();
            this.displayBrowserUrl = !this.displayBrowserUrl, this.ot(t, this.song.toBase64String())
        }
        ht() {
            if (this.displayBrowserUrl) return window.history.state; {
                const t = JSON.parse(window.sessionStorage.getItem(window.sessionStorage.getItem("currentUndoIndex")));
                return null == t ? null : t.state
            }
        }
        at() {
            if (this.displayBrowserUrl) return window.location.hash; {
                const t = JSON.parse(window.sessionStorage.getItem(window.sessionStorage.getItem("currentUndoIndex")));
                return null == t ? "" : t.hash
            }
        }
        ot(t, e) {
            this.displayBrowserUrl ? window.history.replaceState(t, "", "#" + e) : (window.sessionStorage.setItem(window.sessionStorage.getItem("currentUndoIndex") || "0", JSON.stringify({
                state: t,
                hash: e
            })), window.history.replaceState(null, "", location.pathname))
        }
        rt(t, i) {
            if (this.displayBrowserUrl) window.history.pushState(t, "", "#" + i);
            else {
                let s = Number(window.sessionStorage.getItem("currentUndoIndex")),
                    n = Number(window.sessionStorage.getItem("oldestUndoIndex"));
                s = (s + 1) % e.ft, window.sessionStorage.setItem("currentUndoIndex", String(s)), window.sessionStorage.setItem("newestUndoIndex", String(s)), s == n && (n = (n + 1) % e.ft, window.sessionStorage.setItem("oldestUndoIndex", String(n))), window.sessionStorage.setItem(String(s), JSON.stringify({
                    state: t,
                    hash: i
                })), window.history.replaceState(null, "", location.pathname)
            }
        }
        ut() {
            if (this.displayBrowserUrl) window.history.forward();
            else {
                let t = Number(window.sessionStorage.getItem("currentUndoIndex"));
                t != Number(window.sessionStorage.getItem("newestUndoIndex")) && (t = (t + 1) % e.ft, window.sessionStorage.setItem("currentUndoIndex", String(t)), setTimeout(this.it))
            }
        }
        pt() {
            if (this.displayBrowserUrl) window.history.back();
            else {
                let t = Number(window.sessionStorage.getItem("currentUndoIndex"));
                t != Number(window.sessionStorage.getItem("oldestUndoIndex")) && (t = (t + e.ft - 1) % e.ft, window.sessionStorage.setItem("currentUndoIndex", String(t)), setTimeout(this.it))
            }
        }
        record(t, e = 1, i = !1) {
            t.isNoop() ? (this.K = null, 0 == e && this.pt()) : (t.commit(), this.K = t, this.Y < e && (this.Y = e), this.Z = this.Z || i, this.et || (window.requestAnimationFrame(this.ct), this.et = !0))
        }
        st() {
            this.nt = t.generateUid()
        }
        openPrompt(t) {
            this.prompt = t;
            const e = this.song.toBase64String();
            this.J++;
            const i = {
                canUndo: !0,
                sequenceNumber: this.J,
                bar: this.bar,
                channel: this.channel,
                recoveryUid: this.nt,
                prompt: this.prompt
            };
            this.rt(i, e)
        }
        undo() {
            this.ht().canUndo && this.pt()
        }
        redo() {
            this.ut()
        }
        setProspectiveChange(t) {
            this.K = t
        }
        forgetLastChange() {
            this.K = null
        }
        lastChangeWas(t) {
            return null != t && t == this.K
        }
        goBackToStart() {
            this.channel = 0, this.bar = 0, this.barScrollPos = 0, this.notifier.changed(), this.synth.snapToStart(), this.notifier.changed()
        }
        savePreferences() {
            window.localStorage.setItem("autoPlay", this.autoPlay ? "true" : "false"), window.localStorage.setItem("autoFollow", this.autoFollow ? "true" : "false"), window.localStorage.setItem("enableNotePreview", this.enableNotePreview ? "true" : "false"), window.localStorage.setItem("showFifth", this.showFifth ? "true" : "false"), window.localStorage.setItem("showLetters", this.showLetters ? "true" : "false"), window.localStorage.setItem("showChannels", this.showChannels ? "true" : "false"), window.localStorage.setItem("showScrollBar", this.showScrollBar ? "true" : "false"), window.localStorage.setItem("alwaysFineNoteVol", this.alwaysFineNoteVol ? "true" : "false"), window.localStorage.setItem("enableChannelMuting", this.enableChannelMuting ? "true" : "false"), window.localStorage.setItem("displayBrowserUrl", this.displayBrowserUrl ? "true" : "false"), window.localStorage.setItem("fullScreen", this.fullScreen), window.localStorage.setItem("colorTheme", this.colorTheme), window.localStorage.setItem("volume", String(this.volume))
        }
        setVolume(t) {
            this.volume = t, this.savePreferences(), this.synth.volume = this.dt()
        }
        dt() {
            return Math.min(1, Math.pow(this.volume / 50, .5)) * Math.pow(2, (this.volume - 75) / 25)
        }
        getCurrentPattern(t = 0) {
            return this.song.getPattern(this.channel, this.bar + t)
        }
        getCurrentInstrument(t = 0) {
            const e = this.getCurrentPattern(t);
            return null == e ? 0 : e.instrument
        }
        getMobileLayout() {
            return "widefullscreen" == this.fullScreen ? window.innerWidth <= 1e3 : window.innerWidth <= 700
        }
        getBarWidth() {
            return this.getMobileLayout() || !this.enableChannelMuting || this.getFullScreen() && "widefullscreen" != this.fullScreen ? 32 : 30
        }
        getChannelHeight() {
            const t = this.getMobileLayout() || this.song.getChannelCount() > 4 || this.song.barCount > this.trackVisibleBars && this.song.getChannelCount() > 3;
            return !this.getMobileLayout() && ("widefullscreen" != this.fullScreen && this.song.getChannelCount() > 11 || this.song.getChannelCount() > 22) ? 23 : t ? 27 : 32
        }
        getFullScreen() {
            return !this.getMobileLayout() && "normal" != this.fullScreen
        }
    }
    e.ft = 100, t.SongDocument = e
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        p: s,
        h2: n,
        h3: o
    } = t.HTML;
    t.TipPrompt = class {
        constructor(t, r) {
            let h;
            switch (this.yt = t, this.bt = e({
                className: "cancelButton"
            }), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.bt.removeEventListener("click", this.gt)
            }), r) {
                case "scale":
                    h = i(n("Scale"), s("This setting limits the available pitches for adding notes. You may think that there's no point in limiting your choices, but the set of pitches you use has a strong influence on the mood and feel of your song, and these scales serve as guides to help you choose appropriate pitches. Don't worry, you can change the scale at any time, so you're not locked into it. Try making little melodies using all the available notes of a scale to get a sense for how it sounds."), s('The most common scales are major and minor. Major scales tend to sound more playful or optimistic if you emphasize "tonic" notes (the brown rows in the pattern editor) at various points in your melody, whereas minor scales sound more serious or sad if you emphasize "tonic" notes.'));
                    break;
                case "key":
                    h = i(n("Song Key"), s('This setting can shift the frequency of every note in your entire song up or down to align the tonic notes (the brown rows) with the selected "key" pitch.'));
                    break;
                case "tempo":
                    h = i(n("Song Tempo"), s("This setting controls the speed of your song, measured in beats-per-minute."));
                    break;
                case "reverb":
                    h = i(n("Reverb"), s("Reverb is a kind of echo effect. You can use this slider to control the amount of reverb for instruments that enable it. A little bit helps instruments sound more natural. Adding a lot of reverb can add sense of depth or mystery."));
                    break;
                case "rhythm":
                    h = i(n("Rhythm"), s("This setting determines how beats are divided. The pattern editor helps you align notes to fractions of a beat based on this setting."));
                    break;
                case "instrumentIndex":
                    h = i(n("Instrument Number"), s("BeepBox can have multiple instruments per channel, but it can only play one instrument at a time in each channel. This setting determines which of the instruments should be used to play the currently selected pattern. Different patterns in the channel can use different instruments."));
                    break;
                case "instrumentVolume":
                    h = i(n("Instrument Volume"), s("This setting controls the volume of the selected instrument without affecting the volume of the other instruments. This allows you to balance the loudness of each instrument relative to each other."), s("Please be careful when using volume settings above 0. This indicates amplification and too much of that can trip the audio limiter built into this tool. This can lead to your song sounding muffled if overused. But when used carefully, amplification can be a powerful tool!"));
                    break;
                case "pan":
                    h = i(n("Instrument Panning"), s("If you're listening through headphones or some other stereo sound system, this controls the position of the instrument and where the sound is coming from, ranging from left to right."), s("As a rule of thumb, composers typically put lead melodies, drums, and basses in the center, and spread any other instruments to either side. If too many instruments seem like they're coming from the same place, it can feel crowded and harder to distinguish individual sounds, especially if they cover a similar pitch range."));
                    break;
                case "detune":
                    h = i(n("Detune"), s("This setting can be used to finely control the pitch of your instrument."), s("Careful - you can quickly get very dissonant sounding songs by using this setting."));
                    break;
                case "instrumentType":
                    h = i(n("Instrument Type"), s("BeepBox comes with many instrument presets. You can also create your own custom instruments, or even generate random ones!"));
                    break;
                case "filterCutoff":
                    h = i(n("Low-Pass Filter Cutoff Frequency"), s('The lowest setting feels "muffled" or "dark", and the highest setting feels "harsh" or "bright".'), s("Most sounds include a range of frequencies from low to high. BeepBox instruments have a filter that allows the lowest frequencies to pass through at full volume, but can reduce the volume of the higher frequencies that are above a cutoff frequency. This setting controls the cutoff frequency and thus the range of higher frequencies that are reduced."), s("This cutoff setting also determines which frequency resonates when the resonance peak setting is used."));
                    break;
                case "filterResonance":
                    h = i(n("Low-Pass Filter Resonance Peak"), s("Increasing this setting emphasizes a narrow range of frequencies, based on the position of the filter cutoff setting. This can be used to imitate the resonant bodies of acoustic instruments and other interesting effects."), s("The filter preserves the volume of frequencies that are below the cutoff frequency, and reduces the volume of frequencies that are above the cutoff. If this setting is used, the filter also increases the volume of frequencies that are near the cutoff."));
                    break;
                case "filterEnvelope":
                    h = i(n("Low-Pass Filter Envelope"), s("This setting can dynamically change the filter cutoff frequency over time. Try the different options to see how they sound!"), s('The "custom" option uses the note volume as drawn in the pattern editor as the cutoff envelope.'));
                    break;
                case "transition":
                    h = i(n("Transition"), s("This setting controls how quickly notes begin and end."), s("Hard transitions start suddenly and sound like instruments that are played by hitting or plucking, whereas soft transitions start gradually and sound like instruments that are played by blowing air. Some transitions stop suddenly, but some fade out slowly after the end of the note."), s('The "seamless" and "slide" transitions connect the end of a note with the start of the next note.'));
                    break;
                case "chipWave":
                    h = i(n("Chip Wave"), s("BeepBox comes with some sound waves based on classic electronic sound chips, as well as several unique waves."));
                    break;
                case "chipNoise":
                    h = i(n("Noise"), s("BeepBox comes with several basic noise sounds. These do not have any distinct musical pitch, and can be used like drums to create beats and emphasize your song's rhythm."));
                    break;
                case "pulseEnvelope":
                    h = i(n("Pulse Wave Envelope"), s("This setting can dynamically change the pulse width over time. Try the different options to see how they sound!"), s('The "custom" option uses the note volume as drawn in the pattern editor as the pulse width envelope.'));
                    break;
                case "pulseWidth":
                    h = i(n("Pulse Wave Width"), s("This setting controls the shape and sound of a pulse wave. At the minimum width, it sounds light and buzzy. At the maximum width, it is shaped like a classic square wave."));
                    break;
                case "interval":
                    h = i(n("Instrument Interval"), s('Some BeepBox instrument types can play two waves at slightly different frequencies. The difference between the frequencies is called an "interval", and this setting controls how large it is.'), s("When two similar waves play at slightly different frequencies, they move in and out of phase with each other over time as different parts of the waves line up. This creates a dynamic, shifting sound. Pianos are a common example of this kind of sound, because each piano key strikes multiple strings that are tuned to slightly different frequencies."), s('If the interval is large, then the waves can sound out-of-tune and "dissonant". If the interval is even larger, then the two frequencies can even be distinct pitches.'));
                    break;
                case "chords":
                    h = i(n("Chords"), s("When multiple notes occur at the same time, this is called a chord. Chords can be created in BeepBox's pattern editor by adding notes above or below another note."), s('This setting determines how chords are played. The standard option is "harmony" which plays all of the notes out loud simultaneously. The "strum" option is similar, but plays the notes starting at slightly different times. The "arpeggio" option is used in "chiptune" style music and plays a single tone that rapidly alternates between all of the pitches in the chord.'), s('Some BeepBox instruments have an option called "custom interval" which uses the chord notes to control the interval between the waves of a single tone. This can create strange sound effects when combined with FM modulators.'));
                    break;
                case "vibrato":
                    h = i(n("Vibrato"), s("This setting causes the frequency of a note to wobble slightly. Singers and violinists often use vibrato."));
                    break;
                case "algorithm":
                    h = i(n("FM Algorithm"), s("FM Synthesis is a mysterious but powerful technique for crafting sounds, popularized by Yamaha keyboards and the Sega Genesis/Mega Drive. It may seem confusing, but try playing around with the options until you get a feel for it, or check out some of the preset examples!"), s("This FM synthesizer uses up to four waves, numbered 1, 2, 3, and 4. Each wave may have its own frequency, volume, and volume envelope to control its effect over time."), s('There are two kinds of waves: "carrier" waves play a tone out loud, but "modulator" waves distort other waves instead. Wave 1 is always a carrier and plays a tone, but other waves may distort it. The "Algorithm" setting determines which waves are modulators, and which other waves those modulators distort. For example, "1←2" means that wave 2 modulates wave 1, and wave 1 plays out loud.'));
                    break;
                case "feedbackType":
                    h = i(n("Feedback"), s("Modulators distort in one direction (like 1←2), but you can also use the feedback setting to make any wave distort in the opposite direction (1→2), or even itself (1⟲)."));
                    break;
                case "operatorFrequency":
                    h = i(n("Operator Frequency"), s('This setting controls the frequency of an individual FM wave. The fundamental frequency (1×) is determined by the pitch of the note, and the frequency (2×) is an octave (12 semitones) above it. The frequencies with a "~" are slightly detuned and shift in and out of phase over time compared to the other frequencies.'), s('Try different combinations of a "carrier" wave and a "modulator" wave with different frequencies to get a feel for how they sound together.'));
                    break;
                case "operatorVolume":
                    h = i(n("Operator Volume"), s('This setting controls the volume of "carrier" waves, or the amount of distortion that "modulator" waves apply to other waves.'));
                    break;
                case "operatorEnvelope":
                    h = i(n("Operator Envelope"), s("This setting can dynamically change the FM wave volume over time. Try the different options to see how they sound!"), s('The "custom" option uses the note volume as drawn in the pattern editor as the FM wave envelope.'));
                    break;
                case "spectrum":
                    h = i(n("Spectrum"), s("This setting allows you to draw your own noise spectrum! This is good for making drum sounds when combined with a hard transition and a falling filter cutoff envelope."), s("If you only use certain frequencies and a soft transition, it's also possible to make howling wind sounds or even musical blown bottle sounds."), s("The left side of the spectrum editor controls the noise energy at lower frequencies, and the right side controls higher frequencies."));
                    break;
                case "harmonics":
                    h = i(n("Harmonics"), s("This setting allows you to design your own sound wave! Most musical waves are actually a combination of sine waves at certain frequencies, and this lets you control the volume of each sine wave individually."), s("The left side of the harmonics editor controls the sine wave volumes at lower frequencies, and the right side controls higher frequencies."));
                    break;
                case "effects":
                    h = i(n("Effects"), s("BeepBox has two special effects you can add to instruments. You can turn on either effect, or both at once."), s('Reverb is a kind of echo effect. You can use the "reverb" slider in the "Song Settings" section above to control the amount of reverb for instruments that enable it. A little bit helps instruments sound more natural. Adding a lot of reverb can add sense of depth or mystery.'), s("The chorus effect combines multiple copies of the instrument's sound and adds a bit of vibrato to simulate an ensemble of instruments or voices."));
                    break;
                case "drumsetEnvelope":
                    h = i(n("Drumset Envelope"), s("This setting can dynamically change the filter cutoff frequency over time. Each row in the pattern editor gets its own envelope."), s('The "custom" option uses the note volume as drawn in the pattern editor as the drumset cutoff envelope.'));
                    break;
                case "drumsetSpectrum":
                    h = i(n("Drumset Spectrum"), s("This setting allows you to draw your own noise spectrum! This is good for making drumsets. Each row in the pattern editor gets its own spectrum."), s("The left side of the spectrum editor controls the noise energy at lower frequencies, and the right side controls higher frequencies."));
                    break;
                case "usedInstrument":
                    h = i(o("'Is this instrument used somehwere else?'"), s("This indicator will light up when the instrument you're currently looking at is used in another place in your song (outside the selection)."), s("This can be useful when you're not sure if you've used the instrument before and making edits carelessly could change other parts of the song."));
                    break;
                case "usedPattern":
                    h = i(o("'Is this pattern used somewhere else?'"), s("This indicator will light up when the pattern you're currently looking at is used in another place in your song (outside the selection)."), s("This can be useful when you're not sure if you've used the pattern before and making edits carelessly could change other parts of the song."));
                    break;
                case "modChannel":
                    h = i(n("Modulator Channel"), s("Modulators can be used to change settings in your song automatically over time. This technique is also known as automation."), s("This setting controls which channel the modulators will take effect for. If you choose 'Song', you can change song-wide settings too!"));
                    break;
                case "modInstrument":
                    h = i(n("Modulator Instrument"), s("Modulators can be used to change settings in your song automatically over time. This technique is also known as automation."), s("This setting controls which instrument your modulator will apply to within the given channel you've chosen."));
                    break;
                case "modSet":
                    h = i(n("Modulator Setting"), s("This is the parameter that you want to change with this modulator. For example, if you set this to 'Tempo', you can speed up or slow down your song by laying notes in the pattern editor."), s("Note that you'll see different options if your channel is set to 'Song' versus a channel number. With 'Song', you'll see song-wide settings such as tempo. With a channel, you'll see specific instrument settings."), s("Most modulators behave as you'd expect and work just as if you were moving their associated slider. But with the special setting 'Next Bar', the first note you lay will cause the playhead to skip the rest of the bar and jump right to the next one."));
                    break;
                default:
                    throw new Error("Unhandled TipPrompt type: " + r)
            }
            this.container = i({
                className: "prompt",
                style: "width: 250px;"
            }, h, this.bt), setTimeout(() => this.bt.focus()), this.bt.addEventListener("click", this.gt)
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        constructor() {
            this.vt = !0
        }
        wt() {
            this.vt = !1
        }
        isNoop() {
            return this.vt
        }
        commit() {}
    }
    t.Change = e;
    class i extends e {
        constructor(t) {
            super(), this.kt = t, this.xt = !t
        }
        undo() {
            this.kt ? (this.Mt(), this.xt = !0) : (this.Et(), this.xt = !1)
        }
        redo() {
            this.kt ? (this.Et(), this.xt = !1) : (this.Mt(), this.xt = !0)
        }
        Ct() {
            return this.xt
        }
        Mt() {
            throw new Error("Change.doForwards(): Override me.")
        }
        Et() {
            throw new Error("Change.doBackwards(): Override me.")
        }
    }
    t.UndoableChange = i;
    t.ChangeGroup = class extends e {
        constructor() {
            super()
        }
        append(t) {
            t.isNoop() || this.wt()
        }
    };
    t.ChangeSequence = class extends i {
        constructor(t) {
            super(!1), this.St = void 0 == t ? [] : t.concat()
        }
        append(t) {
            t.isNoop() || (this.St[this.St.length] = t, this.wt())
        }
        Mt() {
            for (let t = 0; t < this.St.length; t++) this.St[t].redo()
        }
        Et() {
            for (let t = this.St.length - 1; t >= 0; t--) this.St[t].undo()
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    function e(e, i, s, n, o) {
        const r = new t.Note(-1, s, n, 3, !1);
        o.push(r), r.pins.length = 0, r.pitches.length = 0;
        const h = n - s;
        for (const t of e.pitches) r.pitches.push(t);
        for (let s = 0; s < e.pins.length; s++) {
            const n = e.pins[s],
                o = n.time + i;
            if (o < 0) {
                if (s + 1 >= e.pins.length) throw new Error("Error converting pins in note overflow.");
                const h = e.pins[s + 1],
                    a = h.time + i;
                if (a > 0) {
                    const e = -o / (a - o);
                    r.pins.push(t.makeNotePin(Math.round(n.interval + e * (h.interval - n.interval)), 0, Math.round(n.volume + e * (h.volume - n.volume))))
                }
            } else if (o <= h) r.pins.push(t.makeNotePin(n.interval, o, n.volume));
            else {
                if (s < 1) throw new Error("Error converting pins in note overflow.");
                const a = e.pins[s - 1],
                    l = a.time + i;
                if (l < h) {
                    const e = (h - l) / (o - l);
                    r.pins.push(t.makeNotePin(Math.round(a.interval + e * (n.interval - a.interval)), h, Math.round(a.volume + e * (n.volume - a.volume))))
                }
            }
        }
        const a = r.pins[0].interval;
        for (let t = 0; t < r.pitches.length; t++) r.pitches[t] += a;
        for (let t = 0; t < r.pins.length; t++) r.pins[t].interval -= a
    }
    t.unionOfUsedNotes = function(t, e) {
        for (const i of t.notes)
            for (const t of i.pitches)
                for (const s of i.pins) {
                    const i = (t + s.interval) % 12;
                    e[i] || (e[i] = !0)
                }
    }, t.generateScaleMap = function(e, i) {
        const s = t.Config.scales[i].flags,
            n = [],
            o = [];
        for (let t = 0; t < 12; t++) e[t] && n.push(t), s[t] && o.push(t);
        const r = n.length > o.length,
            h = r ? o : n,
            a = r ? n : o,
            l = ["root", "second", "second", "third", "third", "fourth", "tritone", "fifth", "sixth", "sixth", "seventh", "seventh", "root"];
        let c = Number.MAX_SAFE_INTEGER,
            d = [];
        const m = [
            [0]
        ];
        for (; m.length > 0;) {
            const t = m.pop();
            if (t.length == h.length) {
                let e = 0;
                for (let i = 0; i < t.length; i++) e += Math.abs(h[i] - a[t[i]]), l[h[i]] != l[a[t[i]]] && (e += .75);
                c > e && (c = e, d = t)
            } else {
                const e = t[t.length - 1] + 1,
                    i = a.length - h.length + t.length;
                for (let s = e; s <= i; s++) m.push(t.concat(s))
            }
        }
        const f = [];
        for (let t = 0; t < d.length; t++) {
            const e = h[t],
                i = a[d[t]];
            f[t] = r ? [i, e] : [e, i]
        }
        f.push([12, 12]), o.push(12);
        let u = 0;
        const p = [];
        for (let t = 0; t < 12; t++) {
            const e = f[u][0],
                i = f[u][1],
                s = f[u + 1][0],
                n = f[u + 1][1];
            t == s - 1 && u++;
            const r = (t - e) * (n - i) / (s - e) + i;
            let h = 0,
                a = Number.MAX_SAFE_INTEGER;
            for (const e of o) {
                let i = Math.abs(e - r);
                l[e] != l[t] && (i += .1), a > i && (a = i, h = e)
            }
            p[t] = h
        }
        return p
    };
    class i extends t.ChangeGroup {
        constructor(i, s, n) {
            super();
            const o = [],
                r = [],
                h = [];
            for (let a = 0; a < i.song.getChannelCount(); a++) {
                const l = i.song.channels[a],
                    c = new t.Channel;
                a < i.song.pitchChannelCount ? o.push(c) : a < i.song.pitchChannelCount + i.song.noiseChannelCount ? r.push(c) : h.push(c), c.muted = l.muted, c.octave = l.octave;
                for (const t of l.instruments) c.instruments.push(t);
                const d = t.Config.partsPerBeat * i.song.beatsPerBar,
                    m = t.Config.partsPerBeat * s;
                let f = -1,
                    u = null;
                for (let s = 0; s < i.song.barCount; s++) {
                    const o = i.song.getPattern(a, s);
                    if (null != o) {
                        const i = s * d;
                        for (const s of o.notes) {
                            const r = s.start + i + n,
                                h = s.end + i + n,
                                a = Math.floor(r / m),
                                l = Math.ceil(h / m);
                            for (let i = a; i < l; i++) {
                                const n = i * m,
                                    a = Math.max(0, r - n),
                                    l = Math.min(m, h - n);
                                if (a < l) {
                                    if (f < i || null == u) {
                                        for (f++; f < i;) c.bars[f] = 0, f++;
                                        u = new t.Pattern, c.patterns.push(u), c.bars[f] = c.patterns.length, u.instrument = o.instrument
                                    }
                                    e(s, r - n - a, a, l, (u = c.patterns[c.bars[i] - 1]).notes)
                                }
                            }
                        }
                    }
                }
            }
            d(o), d(r), d(h), this.append(new l(i, o, r, h))
        }
    }
    t.ChangeMoveAndOverflowNotes = i;
    class s extends t.UndoableChange {
        constructor(t, e) {
            super(!1), this.yt = t, this.qt = e, this.Pt = this.qt.start, this.Nt = this.qt.end, this.Tt = this.qt.start, this.Ft = this.qt.end, this.Bt = this.qt.pins, this.zt = [], this.Rt = this.qt.pitches, this.Lt = []
        }
        At() {
            for (let t = 0; t < this.zt.length - 1;) this.zt[t].time >= this.zt[t + 1].time ? this.zt.splice(t, 1) : t++;
            for (let t = 1; t < this.zt.length - 1;) this.zt[t - 1].interval == this.zt[t].interval && this.zt[t].interval == this.zt[t + 1].interval && this.zt[t - 1].volume == this.zt[t].volume && this.zt[t].volume == this.zt[t + 1].volume ? this.zt.splice(t, 1) : t++;
            const t = this.zt[0].interval,
                e = this.zt[0].time;
            for (let e = 0; e < this.Rt.length; e++) this.Lt[e] = this.Rt[e] + t;
            for (let i = 0; i < this.zt.length; i++) this.zt[i].interval -= t, this.zt[i].time -= e;
            this.Tt = this.Pt + e, this.Ft = this.Tt + this.zt[this.zt.length - 1].time, this.Mt(), this.wt()
        }
        Mt() {
            this.qt.pins = this.zt, this.qt.pitches = this.Lt, this.qt.start = this.Tt, this.qt.end = this.Ft, this.yt.notifier.changed()
        }
        Et() {
            this.qt.pins = this.Bt, this.qt.pitches = this.Rt, this.qt.start = this.Pt, this.qt.end = this.Nt, this.yt.notifier.changed()
        }
    }
    t.ChangePins = s;
    t.ChangeCustomizeInstrument = class extends t.Change {
        constructor(t) {
            super();
            const e = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            e.preset != e.type && (e.preset = e.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeCustomWave = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()].customChipWave;
            var s = !0;
            for (let t = 0; t < i.length; t++) i[t] != e[t] && (s = !1, t = i.length);
            if (0 == s) {
                let i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
                for (let t = 0; t < e.length; t++) i.customChipWave[t] = e[t];
                let s = 0;
                for (let t = 0; t < i.customChipWave.length; t++) s += i.customChipWave[t];
                const n = s / i.customChipWave.length;
                let o = 0,
                    r = 0;
                for (let t = 0; t < i.customChipWave.length; t++) o += r, r = i.customChipWave[t] - n, i.customChipWaveIntegral[t] = o;
                i.customChipWaveIntegral[64] = 0, i.preset = i.type, t.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangePreset = class extends t.Change {
        constructor(e, i) {
            super();
            const s = e.song.channels[e.channel].instruments[e.getCurrentInstrument()];
            if (s.preset != i) {
                const n = t.EditorConfig.valueToPreset(i);
                if (null != n)
                    if (void 0 != n.customType) s.type = n.customType, !t.Config.instrumentTypeHasSpecialInterval[s.type] && t.Config.chords[s.chord].isCustomInterval && (s.chord = 0);
                    else if (void 0 != n.settings) {
                    const t = s.volume,
                        i = s.pan;
                    s.fromJsonObject(n.settings, e.song.getChannelIsNoise(e.channel), e.song.getChannelIsMod(e.channel)), s.volume = t, s.pan = i
                }
                s.preset = i, e.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeRandomGeneratedInstrument = class extends t.Change {
        constructor(e) {
            function i(t) {
                let e = 0;
                for (const i of t) e += i.weight;
                let i = Math.random() * e;
                for (const e of t)
                    if ((i -= e.weight) <= 0) return e.item;
                return t[Math.random() * t.length | 0].item
            }

            function s(t, e, s, n) {
                const o = [];
                for (let i = t; i <= e; i++) o.push({
                    item: i,
                    weight: 1 / (Math.pow((i - s) / n, 2) + 1)
                });
                return i(o)
            }
            super();
            const n = e.song.getChannelIsNoise(e.channel),
                o = e.song.channels[e.channel].instruments[e.getCurrentInstrument()];
            if (n) {
                const e = i([{
                    item: 2,
                    weight: 1
                }, {
                    item: 3,
                    weight: 3
                }]);

                function r(e) {
                    let i = 0;
                    for (const t of e) t > i && (i = t);
                    for (let s = 0; s < e.length; s++) e[s] = t.Config.harmonicsMax * e[s] / i
                }
                switch (o.preset = o.type = e, o.filterCutoff = s(4, t.Config.filterCutoffRange - 1, t.Config.filterCutoffRange - 2, 2), o.filterResonance = s(0, t.Config.filterResonanceRange - 1, 1, 2), o.filterEnvelope = t.Config.envelopes.dictionary[i([{
                    item: "steady",
                    weight: 2
                }, {
                    item: "punch",
                    weight: 4
                }, {
                    item: "flare 1",
                    weight: 2
                }, {
                    item: "flare 2",
                    weight: 2
                }, {
                    item: "flare 3",
                    weight: 2
                }, {
                    item: "twang 1",
                    weight: 8
                }, {
                    item: "twang 2",
                    weight: 8
                }, {
                    item: "twang 3",
                    weight: 8
                }, {
                    item: "swell 1",
                    weight: 2
                }, {
                    item: "swell 2",
                    weight: 2
                }, {
                    item: "swell 3",
                    weight: 1
                }, {
                    item: "tremolo1",
                    weight: 1
                }, {
                    item: "tremolo2",
                    weight: 1
                }, {
                    item: "tremolo3",
                    weight: 1
                }, {
                    item: "tremolo4",
                    weight: 1
                }, {
                    item: "tremolo5",
                    weight: 1
                }, {
                    item: "tremolo6",
                    weight: 1
                }, {
                    item: "decay 1",
                    weight: 4
                }, {
                    item: "decay 2",
                    weight: 4
                }, {
                    item: "decay 3",
                    weight: 4
                }])].index, o.transition = t.Config.transitions.dictionary[i([{
                    item: "seamless",
                    weight: 1
                }, {
                    item: "hard",
                    weight: 4
                }, {
                    item: "soft",
                    weight: 2
                }, {
                    item: "slide",
                    weight: 1
                }, {
                    item: "cross fade",
                    weight: 2
                }, {
                    item: "hard fade",
                    weight: 8
                }, {
                    item: "medium fade",
                    weight: 2
                }, {
                    item: "soft fade",
                    weight: 1
                }])].index, o.effects = t.Config.effectsNames.indexOf(i([{
                    item: "none",
                    weight: 1
                }, {
                    item: "reverb",
                    weight: 3
                }])), o.chord = t.Config.chords.dictionary[i([{
                    item: "harmony",
                    weight: 4
                }, {
                    item: "strum",
                    weight: 2
                }, {
                    item: "arpeggio",
                    weight: 1
                }])].index, e) {
                    case 2:
                        o.chipNoise = Math.random() * t.Config.chipNoises.length | 0;
                        break;
                    case 3: {
                        const e = [() => {
                                const e = [];
                                for (let i = 0; i < t.Config.spectrumControlPoints; i++) e[i] = Math.random() < .5 ? Math.random() : 0;
                                return e
                            }, () => {
                                let e = 1;
                                const i = [e];
                                for (let s = 1; s < t.Config.spectrumControlPoints; s++) e *= Math.pow(2, Math.random() - .52), i[s] = e;
                                return i
                            }, () => {
                                let e = 1;
                                const i = [e];
                                for (let s = 1; s < t.Config.spectrumControlPoints; s++) e *= Math.pow(2, Math.random() - .52), i[s] = e * Math.random();
                                return i
                            }],
                            i = (0, e[Math.random() * e.length | 0])();
                        r(i);
                        for (let e = 0; e < t.Config.spectrumControlPoints; e++) o.spectrumWave.spectrum[e] = Math.round(i[e]);
                        o.spectrumWave.markCustomWaveDirty()
                    }
                    break;
                default:
                    throw new Error("Unhandled noise instrument type in random generator.")
                }
            } else {
                const e = i([{
                    item: 0,
                    weight: 4
                }, {
                    item: 6,
                    weight: 4
                }, {
                    item: 5,
                    weight: 6
                }, {
                    item: 3,
                    weight: 1
                }, {
                    item: 1,
                    weight: 4
                }]);

                function r(e) {
                    let i = 0;
                    for (const t of e) t > i && (i = t);
                    for (let s = 0; s < e.length; s++) e[s] = t.Config.harmonicsMax * e[s] / i
                }
                switch (o.preset = o.type = e, o.filterCutoff = s(2, t.Config.filterCutoffRange - 1, 7, 1.5), o.filterResonance = s(0, t.Config.filterResonanceRange - 1, 1, 2), o.filterEnvelope = t.Config.envelopes.dictionary[i([{
                    item: "steady",
                    weight: 10
                }, {
                    item: "punch",
                    weight: 6
                }, {
                    item: "flare 1",
                    weight: 2
                }, {
                    item: "flare 2",
                    weight: 4
                }, {
                    item: "flare 3",
                    weight: 2
                }, {
                    item: "twang 1",
                    weight: 2
                }, {
                    item: "twang 2",
                    weight: 4
                }, {
                    item: "twang 3",
                    weight: 4
                }, {
                    item: "swell 1",
                    weight: 4
                }, {
                    item: "swell 2",
                    weight: 2
                }, {
                    item: "swell 3",
                    weight: 1
                }, {
                    item: "tremolo1",
                    weight: 1
                }, {
                    item: "tremolo2",
                    weight: 1
                }, {
                    item: "tremolo3",
                    weight: 1
                }, {
                    item: "tremolo4",
                    weight: 1
                }, {
                    item: "tremolo5",
                    weight: 1
                }, {
                    item: "tremolo6",
                    weight: 1
                }, {
                    item: "decay 1",
                    weight: 1
                }, {
                    item: "decay 2",
                    weight: 2
                }, {
                    item: "decay 3",
                    weight: 2
                }])].index, o.transition = t.Config.transitions.dictionary[i([{
                    item: "seamless",
                    weight: 1
                }, {
                    item: "hard",
                    weight: 4
                }, {
                    item: "soft",
                    weight: 4
                }, {
                    item: "slide",
                    weight: 2
                }, {
                    item: "cross fade",
                    weight: 4
                }, {
                    item: "hard fade",
                    weight: 4
                }, {
                    item: "medium fade",
                    weight: 2
                }, {
                    item: "soft fade",
                    weight: 2
                }])].index, o.effects = t.Config.effectsNames.indexOf(i([{
                    item: "none",
                    weight: 1
                }, {
                    item: "reverb",
                    weight: 10
                }, {
                    item: "chorus",
                    weight: 2
                }, {
                    item: "chorus & reverb",
                    weight: 2
                }])), o.chord = t.Config.chords.dictionary[i([{
                    item: "harmony",
                    weight: 7
                }, {
                    item: "strum",
                    weight: 2
                }, {
                    item: "arpeggio",
                    weight: 1
                }])].index, 3 != e && (o.vibrato = t.Config.vibratos.dictionary[i([{
                    item: "none",
                    weight: 6
                }, {
                    item: "light",
                    weight: 2
                }, {
                    item: "delayed",
                    weight: 2
                }, {
                    item: "heavy",
                    weight: 1
                }, {
                    item: "shaky",
                    weight: 2
                }])].index), 0 != e && 5 != e || (o.interval = t.Config.intervals.dictionary[i([{
                    item: "union",
                    weight: 10
                }, {
                    item: "shimmer",
                    weight: 5
                }, {
                    item: "hum",
                    weight: 4
                }, {
                    item: "honky tonk",
                    weight: 3
                }, {
                    item: "dissonant",
                    weight: 1
                }, {
                    item: "fifth",
                    weight: 1
                }, {
                    item: "octave",
                    weight: 2
                }, {
                    item: "bowed",
                    weight: 2
                }, {
                    item: "piano",
                    weight: 5
                }])].index), e) {
                    case 0:
                        o.chipWave = Math.random() * t.Config.chipWaves.length | 0;
                        break;
                    case 6:
                        o.pulseEnvelope = t.Config.envelopes.dictionary[i([{
                            item: "steady",
                            weight: 10
                        }, {
                            item: "punch",
                            weight: 6
                        }, {
                            item: "flare 1",
                            weight: 2
                        }, {
                            item: "flare 2",
                            weight: 4
                        }, {
                            item: "flare 3",
                            weight: 2
                        }, {
                            item: "twang 1",
                            weight: 4
                        }, {
                            item: "twang 2",
                            weight: 4
                        }, {
                            item: "twang 3",
                            weight: 4
                        }, {
                            item: "swell 1",
                            weight: 4
                        }, {
                            item: "swell 2",
                            weight: 4
                        }, {
                            item: "swell 3",
                            weight: 4
                        }, {
                            item: "tremolo1",
                            weight: 1
                        }, {
                            item: "tremolo2",
                            weight: 1
                        }, {
                            item: "tremolo3",
                            weight: 1
                        }, {
                            item: "tremolo4",
                            weight: 2
                        }, {
                            item: "tremolo5",
                            weight: 2
                        }, {
                            item: "tremolo6",
                            weight: 2
                        }, {
                            item: "decay 1",
                            weight: 2
                        }, {
                            item: "decay 2",
                            weight: 2
                        }, {
                            item: "decay 3",
                            weight: 2
                        }])].index, o.pulseWidth = s(0, t.Config.pulseWidthRange - 1, t.Config.pulseWidthRange - 1, 2);
                        break;
                    case 5: {
                        const e = [() => {
                                const e = [];
                                for (let i = 0; i < t.Config.harmonicsControlPoints; i++) e[i] = Math.random() < .4 ? Math.random() : 0;
                                return e[8 * Math.random() | 0] = Math.pow(Math.random(), .25), e
                            }, () => {
                                let e = 1;
                                const i = [e];
                                for (let s = 1; s < t.Config.harmonicsControlPoints; s++) e *= Math.pow(2, Math.random() - .55), i[s] = e;
                                return i
                            }, () => {
                                let e = 1;
                                const i = [e];
                                for (let s = 1; s < t.Config.harmonicsControlPoints; s++) e *= Math.pow(2, Math.random() - .55), i[s] = e * Math.random();
                                return i
                            }],
                            i = (0, e[Math.random() * e.length | 0])();
                        r(i);
                        for (let e = 0; e < t.Config.harmonicsControlPoints; e++) o.harmonicsWave.harmonics[e] = Math.round(i[e]);
                        o.harmonicsWave.markCustomWaveDirty()
                    }
                    break;
                case 3: {
                    const e = [];
                    for (let i = 0; i < t.Config.spectrumControlPoints; i++) {
                        const t = 0 == i || 7 == i || 11 == i || 14 == i || 16 == i || 18 == i || 21 == i;
                        e[i] = t ? Math.pow(Math.random(), .25) : .5 * Math.pow(Math.random(), 3)
                    }
                    r(e);
                    for (let i = 0; i < t.Config.spectrumControlPoints; i++) o.spectrumWave.spectrum[i] = Math.round(e[i]);
                    o.spectrumWave.markCustomWaveDirty()
                }
                break;
                case 1: {
                    o.algorithm = Math.random() * t.Config.algorithms.length | 0, o.feedbackType = Math.random() * t.Config.feedbacks.length | 0;
                    const e = t.Config.algorithms[o.algorithm];
                    for (let i = 0; i < e.carrierCount; i++) o.operators[i].frequency = s(0, t.Config.operatorFrequencies.length - 1, 0, 3), o.operators[i].amplitude = s(0, t.Config.operatorAmplitudeMax, t.Config.operatorAmplitudeMax - 1, 2), o.operators[i].envelope = t.Config.envelopes.dictionary.custom.index;
                    for (let n = e.carrierCount; n < t.Config.operatorCount; n++) o.operators[n].frequency = s(3, t.Config.operatorFrequencies.length - 1, 0, 3), o.operators[n].amplitude = Math.pow(Math.random(), 2) * t.Config.operatorAmplitudeMax | 0, o.operators[n].envelope = t.Config.envelopes.dictionary[i([{
                        item: "steady",
                        weight: 6
                    }, {
                        item: "punch",
                        weight: 2
                    }, {
                        item: "flare 1",
                        weight: 2
                    }, {
                        item: "flare 2",
                        weight: 2
                    }, {
                        item: "flare 3",
                        weight: 2
                    }, {
                        item: "twang 1",
                        weight: 2
                    }, {
                        item: "twang 2",
                        weight: 2
                    }, {
                        item: "twang 3",
                        weight: 2
                    }, {
                        item: "swell 1",
                        weight: 2
                    }, {
                        item: "swell 2",
                        weight: 2
                    }, {
                        item: "swell 3",
                        weight: 2
                    }, {
                        item: "tremolo1",
                        weight: 1
                    }, {
                        item: "tremolo2",
                        weight: 1
                    }, {
                        item: "tremolo3",
                        weight: 1
                    }, {
                        item: "tremolo4",
                        weight: 1
                    }, {
                        item: "tremolo5",
                        weight: 1
                    }, {
                        item: "tremolo6",
                        weight: 1
                    }, {
                        item: "decay 1",
                        weight: 1
                    }, {
                        item: "decay 2",
                        weight: 1
                    }, {
                        item: "decay 3",
                        weight: 1
                    }])].index;
                    o.feedbackAmplitude = Math.pow(Math.random(), 3) * t.Config.operatorAmplitudeMax | 0, o.feedbackEnvelope = t.Config.envelopes.dictionary[i([{
                        item: "steady",
                        weight: 4
                    }, {
                        item: "punch",
                        weight: 2
                    }, {
                        item: "flare 1",
                        weight: 2
                    }, {
                        item: "flare 2",
                        weight: 2
                    }, {
                        item: "flare 3",
                        weight: 2
                    }, {
                        item: "twang 1",
                        weight: 2
                    }, {
                        item: "twang 2",
                        weight: 2
                    }, {
                        item: "twang 3",
                        weight: 2
                    }, {
                        item: "swell 1",
                        weight: 2
                    }, {
                        item: "swell 2",
                        weight: 2
                    }, {
                        item: "swell 3",
                        weight: 2
                    }, {
                        item: "tremolo1",
                        weight: 1
                    }, {
                        item: "tremolo2",
                        weight: 1
                    }, {
                        item: "tremolo3",
                        weight: 1
                    }, {
                        item: "tremolo4",
                        weight: 1
                    }, {
                        item: "tremolo5",
                        weight: 1
                    }, {
                        item: "tremolo6",
                        weight: 1
                    }, {
                        item: "decay 1",
                        weight: 1
                    }, {
                        item: "decay 2",
                        weight: 1
                    }, {
                        item: "decay 3",
                        weight: 1
                    }])].index
                }
                break;
                default:
                    throw new Error("Unhandled pitched instrument type in random generator.")
                }
            }
            e.notifier.changed(), this.wt()
        }
    };
    t.ChangeTransition = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.transition != e && (this.wt(), i.transition = e, i.preset = i.type, t.notifier.changed())
        }
    };
    t.ChangeEffects = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.effects != e && (this.wt(), i.effects = e, i.preset = i.type, t.notifier.changed())
        }
    };
    t.ChangePatternNumbers = class extends t.Change {
        constructor(t, e, i, s, n, o) {
            if (super(), e > t.song.patternsPerChannel) throw new Error("invalid pattern");
            for (let r = i; r < i + n; r++)
                for (let i = s; i < s + o; i++) t.song.channels[i].bars[r] != e && (t.song.channels[i].bars[r] = e, this.wt());
            t.notifier.changed()
        }
    };
    t.ChangeBarCount = class extends t.Change {
        constructor(t, e, i) {
            if (super(), t.song.barCount != e) {
                for (const s of t.song.channels)
                    if (i) {
                        for (; s.bars.length < e;) s.bars.unshift(0);
                        t.song.barCount > e && s.bars.splice(0, t.song.barCount - e)
                    } else {
                        for (; s.bars.length < e;) s.bars.push(0);
                        s.bars.length = e
                    } if (i) {
                    const i = e - t.song.barCount;
                    t.bar = Math.max(0, t.bar + i), (i < 0 || t.barScrollPos > 0) && (t.barScrollPos = Math.max(0, t.barScrollPos + i)), t.song.loopStart = Math.max(0, t.song.loopStart + i)
                }
                t.bar = Math.min(t.bar, e - 1), t.barScrollPos = Math.max(0, Math.min(e - t.trackVisibleBars, t.barScrollPos)), t.song.loopLength = Math.min(e, t.song.loopLength), t.song.loopStart = Math.min(e - t.song.loopLength, t.song.loopStart), t.song.barCount = e, t.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeInsertBars = class extends t.Change {
        constructor(e, i, s) {
            super();
            const n = Math.min(t.Config.barCountMax, e.song.barCount + s);
            if (0 != (s = n - e.song.barCount)) {
                for (const t of e.song.channels)
                    for (; t.bars.length < n;) t.bars.splice(i, 0, 0);
                e.song.barCount = n, e.bar += s, e.barScrollPos = Math.min(n - e.trackVisibleBars, e.barScrollPos + s), e.song.loopStart >= i ? e.song.loopStart += s : e.song.loopStart + e.song.loopLength >= i && (e.song.loopLength += s), e.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeDeleteBars = class extends t.Change {
        constructor(t, e, i) {
            super();
            for (const s of t.song.channels) s.bars.splice(e, i), 0 == s.bars.length && s.bars.push(0);
            t.song.barCount = Math.max(1, t.song.barCount - i), t.bar = Math.max(0, t.bar - i), t.barScrollPos = Math.max(0, t.barScrollPos - i), t.song.loopStart >= e ? t.song.loopStart = Math.max(0, t.song.loopStart - i) : t.song.loopStart + t.song.loopLength > e && (t.song.loopLength -= i), t.song.loopLength = Math.max(1, Math.min(t.song.barCount - t.song.loopStart, t.song.loopLength)), t.notifier.changed(), this.wt()
        }
    };
    t.ChangeChannelCount = class extends t.Change {
        constructor(e, i, s, n) {
            if (super(), e.song.pitchChannelCount != i || e.song.noiseChannelCount != s || e.song.modChannelCount != n) {
                const h = [];

                function o(i, s, n, o, a, l, c) {
                    for (let d = 0; d < i; d++) {
                        const i = d + n,
                            m = d + o;
                        if (d < s) h[i] = e.song.channels[m];
                        else {
                            h[i] = new t.Channel, h[i].octave = a;
                            for (let s = 0; s < e.song.instrumentsPerChannel; s++) {
                                const e = new t.Instrument(l, c),
                                    n = r(l),
                                    o = t.EditorConfig.valueToPreset(n);
                                e.fromJsonObject(o.settings, l, c), e.preset = n, h[i].instruments[s] = e
                            }
                            for (let s = 0; s < e.song.patternsPerChannel; s++) h[i].patterns[s] = new t.Pattern;
                            for (let t = 0; t < e.song.barCount; t++) h[i].bars[t] = 0
                        }
                    }
                }
                o(i, e.song.pitchChannelCount, 0, 0, 2, !1, !1), o(s, e.song.noiseChannelCount, i, e.song.pitchChannelCount, 0, !0, !1), o(n, e.song.modChannelCount, s + i, e.song.pitchChannelCount + e.song.noiseChannelCount, 0, !1, !0), e.song.pitchChannelCount = i, e.song.noiseChannelCount = s, e.song.modChannelCount = n;
                for (let t = 0; t < e.song.getChannelCount(); t++) e.song.channels[t] = h[t];
                e.song.channels.length = e.song.getChannelCount(), e.channel = Math.min(e.channel, i + s + n - 1), e.notifier.changed(), t.ColorConfig.resetColors(), this.wt()
            }
        }
    };
    t.ChangeChannelBar = class extends t.Change {
        constructor(t, e, i, s = !1) {
            super();
            const n = t.channel,
                o = t.bar;
            t.channel = e, t.bar = i, s || (t.barScrollPos = Math.min(t.bar, Math.max(t.bar - (t.trackVisibleBars - 1), t.barScrollPos))), t.notifier.changed(), n == e && o == i || this.wt()
        }
    };
    t.ChangeInterval = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.interval != e && (this.wt(), i.interval = e, i.preset = i.type, t.notifier.changed())
        }
    };
    t.ChangeChord = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.chord != e && (this.wt(), i.chord = e, i.preset = i.type, t.notifier.changed())
        }
    };
    t.ChangeVibrato = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.vibrato != e && (i.vibrato = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeSpectrum = class extends t.Change {
        constructor(t, e, i) {
            super(), i.markCustomWaveDirty(), e.preset = e.type, t.notifier.changed(), this.wt()
        }
    };
    t.ChangeHarmonics = class extends t.Change {
        constructor(t, e, i) {
            super(), i.markCustomWaveDirty(), e.preset = e.type, t.notifier.changed(), this.wt()
        }
    };
    t.ChangeDrumsetEnvelope = class extends t.Change {
        constructor(t, e, i) {
            super();
            const s = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            s.drumsetEnvelopes[e] != i && (s.drumsetEnvelopes[e] = i, s.preset = s.type, t.notifier.changed(), this.wt())
        }
    };
    class n extends t.Change {
        constructor(t) {
            super(), this.yt = t, this.Ht = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()]
        }
        commit() {
            this.isNoop() || (this.Ht.preset = this.Ht.type, this.yt.notifier.changed())
        }
    }
    t.ChangePulseWidth = class extends n {
        constructor(e, i, s) {
            super(e), this.Ht.pulseWidth = s, e.synth.unsetMod(t.ModSetting.mstPulseWidth, e.channel, e.getCurrentInstrument()), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangePulseEnvelope = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.pulseEnvelope != e && (i.pulseEnvelope = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeFilterCutoff = class extends n {
        constructor(e, i, s) {
            super(e), this.Ht.filterCutoff = s, e.synth.unsetMod(t.ModSetting.mstFilterCut, e.channel, e.getCurrentInstrument()), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeFilterResonance = class extends n {
        constructor(e, i, s) {
            super(e), this.Ht.filterResonance = s, e.synth.unsetMod(t.ModSetting.mstFilterPeak, e.channel, e.getCurrentInstrument()), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeFilterEnvelope = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.filterEnvelope != e && (i.filterEnvelope = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeAlgorithm = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.algorithm != e && (i.algorithm = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeFeedbackType = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.feedbackType != e && (i.feedbackType = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeFeedbackEnvelope = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.feedbackEnvelope != e && (i.feedbackEnvelope = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeOperatorEnvelope = class extends t.Change {
        constructor(t, e, i) {
            super();
            const s = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            s.operators[e].envelope != i && (s.operators[e].envelope = i, s.preset = s.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeOperatorFrequency = class extends t.Change {
        constructor(t, e, i) {
            super();
            const s = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            s.operators[e].frequency != i && (s.operators[e].frequency = i, s.preset = s.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeOperatorAmplitude = class extends n {
        constructor(t, e, i, s) {
            super(t), this.Ht.operators[e].amplitude = s, t.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeFeedbackAmplitude = class extends n {
        constructor(t, e, i) {
            super(t), this.Ht.feedbackAmplitude = i, t.notifier.changed(), e != i && this.wt()
        }
    };
    t.ChangeInstrumentsPerChannel = class extends t.Change {
        constructor(e, i) {
            if (super(), e.song.instrumentsPerChannel != i) {
                for (let s = 0; s < e.song.getChannelCount(); s++) {
                    const n = e.song.channels[s].instruments[e.song.instrumentsPerChannel - 1],
                        o = n.toJsonObject();
                    for (let r = e.song.instrumentsPerChannel; r < i; r++) {
                        const i = new t.Instrument(e.song.getChannelIsNoise(s), e.song.getChannelIsMod(s));
                        8 == n.type ? i.setTypeAndReset(8, !1, !0) : 4 == n.type ? i.setTypeAndReset(3, !0, !1) : i.fromJsonObject(o, e.song.getChannelIsNoise(s), e.song.getChannelIsMod(s)), e.song.channels[s].instruments[r] = i
                    }
                    e.song.channels[s].instruments.length = i;
                    for (let t = 0; t < e.song.patternsPerChannel; t++) e.song.channels[s].patterns[t].instrument >= i && (e.song.channels[s].patterns[t].instrument = 0)
                }
                e.song.instrumentsPerChannel = i, e.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeKey = class extends t.Change {
        constructor(t, e) {
            super(), t.song.key != e && (t.song.key = e, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeLoop = class extends t.Change {
        constructor(t, e, i, s, n) {
            super(), this.yt = t, this.oldStart = e, this.oldLength = i, this.newStart = s, this.newLength = n, this.yt.song.loopStart = this.newStart, this.yt.song.loopLength = this.newLength, this.yt.notifier.changed(), this.oldStart == this.newStart && this.oldLength == this.newLength || this.wt()
        }
    };
    t.ChangePitchAdded = class extends t.UndoableChange {
        constructor(t, e, i, s, n = !1) {
            super(n), this.yt = t, this.qt = e, this.$t = i, this.q = s, this.wt(), this.redo()
        }
        Mt() {
            this.qt.pitches.splice(this.q, 0, this.$t), this.yt.notifier.changed()
        }
        Et() {
            this.qt.pitches.splice(this.q, 1), this.yt.notifier.changed()
        }
    };
    t.ChangeOctave = class extends t.Change {
        constructor(t, e, i) {
            super(), this.oldValue = e, t.song.channels[t.channel].octave = i, t.notifier.changed(), e != i && this.wt()
        }
    };
    t.ChangeRhythm = class extends t.ChangeGroup {
        constructor(t, e) {
            super(), t.song.rhythm != e && (t.song.rhythm = e, t.notifier.changed(), this.wt())
        }
    };
    t.ChangePaste = class extends t.ChangeGroup {
        constructor(e, i, s, n) {
            super(), i.notes.length = 0;
            for (const e of s) {
                const s = new t.Note(e.pitches[0], e.start, e.end, e.pins[0].volume, !1);
                s.pitches.length = 0;
                for (const t of e.pitches) s.pitches.push(t);
                s.pins.length = 0;
                for (const i of e.pins) s.pins.push(t.makeNotePin(i.interval, i.time, i.volume));
                i.notes.push(s)
            }
            e.song.beatsPerBar < n && this.append(new u(e, i, e.song.beatsPerBar * t.Config.partsPerBeat, n * t.Config.partsPerBeat)), e.notifier.changed(), this.wt()
        }
    };
    t.ChangePasteInstrument = class extends t.ChangeGroup {
        constructor(t, e, i) {
            super(), e.fromJsonObject(i, i.isDrum, i.isMod), t.notifier.changed(), this.wt()
        }
    };
    t.ChangePatternInstrument = class extends t.Change {
        constructor(t, e, i) {
            super(), i.instrument != e && (i.instrument = e, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeModChannel = class extends t.Change {
        constructor(e, i, s) {
            super();
            let n = t.ModStatus.msNone,
                o = 0,
                r = e.song.channels[e.channel].instruments[e.getCurrentInstrument()];
            "song" == s ? n = t.ModStatus.msForSong : "none" == s ? n = t.ModStatus.msNone : "pitch" == s.substr(0, s.indexOf(" ")) ? (n = t.ModStatus.msForPitch, o = +s.substr(s.indexOf(" ") + 1) - 1) : (n = t.ModStatus.msForNoise, o = +s.substr(s.indexOf(" ") + 1) - 1), r.modStatuses[i] == n && r.modChannels[i] == o || (r.modStatuses[i] = n, r.modChannels[i] = o, e.notifier.changed(), this.wt())
        }
    };
    t.ChangeModInstrument = class extends t.Change {
        constructor(t, e, i) {
            super();
            let s = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            s.modInstruments[e] != i && (s.modInstruments[e] = i, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeModSetting = class extends t.Change {
        constructor(e, i, s) {
            super();
            let n = t.ModSetting.mstNone,
                o = e.song.channels[e.channel].instruments[e.getCurrentInstrument()];
            switch (s) {
                case "song volume":
                    n = t.ModSetting.mstSongVolume;
                    break;
                case "tempo":
                    n = t.ModSetting.mstTempo;
                    break;
                case "reverb":
                    n = t.ModSetting.mstReverb;
                    break;
                case "next bar":
                    n = t.ModSetting.mstNextBar;
                    break;
                case "volume":
                    n = t.ModSetting.mstInsVolume;
                    break;
                case "pan":
                    n = t.ModSetting.mstPan;
                    break;
                case "filter cut":
                    n = t.ModSetting.mstFilterCut;
                    break;
                case "filter peak":
                    n = t.ModSetting.mstFilterPeak;
                    break;
                case "fm slider 1":
                    n = t.ModSetting.mstFMSlider1;
                    break;
                case "fm slider 2":
                    n = t.ModSetting.mstFMSlider2;
                    break;
                case "fm slider 3":
                    n = t.ModSetting.mstFMSlider3;
                    break;
                case "fm slider 4":
                    n = t.ModSetting.mstFMSlider4;
                    break;
                case "fm feedback":
                    n = t.ModSetting.mstFMFeedback;
                    break;
                case "pulse width":
                    n = t.ModSetting.mstPulseWidth;
                    break;
                case "detune":
                    n = t.ModSetting.mstDetune;
                    break;
                case "vibrato depth":
                    n = t.ModSetting.mstVibratoDepth;
                    break;
                case "song detune":
                    n = t.ModSetting.mstSongDetune
            }
            o.modSettings[i] != n && (o.modSettings[i] = n, e.notifier.changed(), this.wt())
        }
    };
    t.ChangePatternsPerChannel = class extends t.Change {
        constructor(e, i) {
            if (super(), e.song.patternsPerChannel != i) {
                for (let s = 0; s < e.song.getChannelCount(); s++) {
                    const n = e.song.channels[s].bars,
                        o = e.song.channels[s].patterns;
                    for (let t = 0; t < n.length; t++) n[t] > i && (n[t] = 0);
                    for (let e = o.length; e < i; e++) o[e] = new t.Pattern;
                    o.length = i
                }
                e.song.patternsPerChannel = i, e.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeEnsurePatternExists = class extends t.UndoableChange {
        constructor(t, e, i) {
            super(!1), this.Dt = null;
            const s = t.song;
            if (0 != s.channels[e].bars[i]) return;
            this.yt = t, this.It = i, this._t = e, this.Ot = s.patternsPerChannel, this.Ut = s.patternsPerChannel;
            let n = null,
                o = null;
            for (let t = 1; t <= s.patternsPerChannel; t++) {
                let i = !1;
                for (let n = 0; n < s.barCount; n++)
                    if (s.channels[e].bars[n] == t) {
                        i = !0;
                        break
                    } if (!i && (null == o && (o = t), 0 == s.channels[e].patterns[t - 1].notes.length)) {
                    n = t;
                    break
                }
            }
            if (null != n) this.Vt = n;
            else if (s.patternsPerChannel < s.barCount) this.Ut = s.patternsPerChannel + 1, this.Vt = s.patternsPerChannel + 1;
            else {
                if (null == o) throw new Error;
                this.Vt = o, this.Dt = s.channels[e].patterns[o - 1].notes
            }
            this.wt(), this.Mt()
        }
        Mt() {
            const e = this.yt.song;
            for (let i = e.patternsPerChannel; i < this.Ut; i++)
                for (let s = 0; s < e.getChannelCount(); s++) e.channels[s].patterns[i] = new t.Pattern;
            e.patternsPerChannel = this.Ut, e.channels[this._t].patterns[this.Vt - 1].notes = [], e.channels[this._t].bars[this.It] = this.Vt, this.yt.notifier.changed()
        }
        Et() {
            const t = this.yt.song,
                e = t.channels[this._t].patterns[this.Vt - 1];
            null != this.Dt && (e.notes = this.Dt), t.channels[this._t].bars[this.It] = 0;
            for (let e = 0; e < t.getChannelCount(); e++) t.channels[e].patterns.length = this.Ot;
            t.patternsPerChannel = this.Ot, this.yt.notifier.changed()
        }
    };
    t.ChangePinTime = class extends s {
        constructor(e, i, s, n) {
            super(e, i), n -= this.Pt;
            const o = this.Bt[s].time,
                r = Math.min(o, n),
                h = Math.max(o, n);
            let a = !1;
            for (let e = 0; e < this.Bt.length; e++) {
                const o = i.pins[e],
                    l = o.time;
                l < r ? this.zt.push(t.makeNotePin(o.interval, l, o.volume)) : l > h && (a || (this.zt.push(t.makeNotePin(this.Bt[s].interval, n, this.Bt[s].volume)), a = !0), this.zt.push(t.makeNotePin(o.interval, l, o.volume)))
            }
            a || this.zt.push(t.makeNotePin(this.Bt[s].interval, n, this.Bt[s].volume)), this.At()
        }
    };
    t.ChangePitchBend = class extends s {
        constructor(e, i, s, n, o, r) {
            super(e, i), s -= this.Pt, n -= this.Pt, o -= i.pitches[r];
            let h, a, l, c, d = !1,
                m = !1,
                f = 0,
                u = 3,
                p = !0;
            for (n > s ? (h = 0, a = 1, l = i.pins.length, c = (t => {
                    this.zt.push(t)
                })) : (h = i.pins.length - 1, a = -1, l = -1, c = (t => {
                    this.zt.unshift(t)
                })); h != l; h += a) {
                const e = i.pins[h],
                    r = e.time;
                for (;;)
                    if (d) {
                        if (m) {
                            if (r * a == n * a) break;
                            e.interval != f && (p = !1), c(t.makeNotePin(p ? o : e.interval, r, e.volume));
                            break
                        }
                        if (r * a <= n * a && (f = e.interval, u = e.volume), r * a < n * a) break;
                        c(t.makeNotePin(o, n, u)), m = !0
                    } else {
                        if (r * a <= s * a && (f = e.interval, u = e.volume), r * a < s * a) {
                            c(t.makeNotePin(e.interval, r, e.volume));
                            break
                        }
                        c(t.makeNotePin(f, s, u)), d = !0
                    }
            }
            m || c(t.makeNotePin(o, n, u)), this.At()
        }
    };
    t.ChangePatternRhythm = class extends t.ChangeSequence {
        constructor(e, i) {
            super();
            const s = t.Config.partsPerBeat / t.Config.rhythms[e.song.rhythm].stepsPerBeat,
                n = function(i) {
                    let n = t.Config.rhythms[e.song.rhythm].roundUpThresholds;
                    if (null != n) {
                        const e = Math.floor(i / t.Config.partsPerBeat) * t.Config.partsPerBeat,
                            o = i - e;
                        let r = e;
                        for (const t of n) {
                            if (!(o >= t)) break;
                            r += s
                        }
                        return r
                    }
                    return Math.round(i / s) * s
                };
            let r = 0;
            for (; r < i.notes.length;) {
                const t = i.notes[r];
                n(t.start) >= n(t.end) ? this.append(new m(e, i, t, r, !0)) : (this.append(new o(e, t, n)), r++)
            }
        }
    };
    class o extends s {
        constructor(e, i, s) {
            super(e, i);
            for (const e of this.Bt) this.zt.push(t.makeNotePin(e.interval, s(e.time + this.Pt) - this.Pt, e.volume));
            this.At()
        }
    }
    t.ChangeMoveNotesSideways = class extends t.ChangeGroup {
        constructor(s, n, o) {
            super();
            let r = Math.round(n % s.song.beatsPerBar * t.Config.partsPerBeat);
            if (r < 0 && (r += s.song.beatsPerBar * t.Config.partsPerBeat), 0 != r) {
                switch (o) {
                    case "wrapAround": {
                        const i = t.Config.partsPerBeat * s.song.beatsPerBar;
                        for (const t of s.song.channels)
                            for (const s of t.patterns) {
                                const t = [];
                                for (let n = 1; n >= 0; n--) {
                                    const o = n * i;
                                    for (const n of s.notes) {
                                        const s = n.start + r,
                                            h = n.end + r,
                                            a = Math.max(0, s - o),
                                            l = Math.min(i, h - o);
                                        a < l && e(n, s - o - a, a, l, t)
                                    }
                                }
                                s.notes = t
                            }
                    }
                    break;
                case "overflow": {
                    let t = s.song.barCount,
                        e = s.song.loopStart,
                        o = s.song.loopLength;
                    if (this.append(new i(s, s.song.beatsPerBar, r)), n < 0) {
                        let i = !0;
                        for (const t of s.song.channels) 0 != t.bars[0] && (i = !1);
                        if (i) {
                            for (const t of s.song.channels) t.bars.shift();
                            s.song.barCount--
                        } else t++, e++, s.bar++
                    }
                    for (; s.song.barCount < t;) {
                        for (const t of s.song.channels) t.bars.push(0);
                        s.song.barCount++
                    }
                    s.song.loopStart = e, s.song.loopLength = o
                }
                break;
                default:
                    throw new Error("Unrecognized beats-per-bar conversion strategy.")
                }
                s.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeBeatsPerBar = class extends t.ChangeGroup {
        constructor(e, s, n) {
            if (super(), e.song.beatsPerBar != s) {
                switch (n) {
                    case "splice":
                        if (e.song.beatsPerBar > s) {
                            const i = new t.ChangeSequence;
                            for (let n = 0; n < e.song.getChannelCount(); n++)
                                for (let o = 0; o < e.song.channels[n].patterns.length; o++) i.append(new u(e, e.song.channels[n].patterns[o], s * t.Config.partsPerBeat, e.song.beatsPerBar * t.Config.partsPerBeat))
                        }
                        break;
                    case "stretch": {
                        const t = function(t) {
                            return Math.round(t * s / e.song.beatsPerBar)
                        };
                        for (let i = 0; i < e.song.getChannelCount(); i++)
                            for (let s = 0; s < e.song.channels[i].patterns.length; s++) {
                                const n = e.song.channels[i].patterns[s];
                                let r = 0;
                                for (; r < n.notes.length;) {
                                    const i = n.notes[r];
                                    t(i.start) >= t(i.end) ? this.append(new m(e, n, i, r, !0)) : (this.append(new o(e, i, t)), r++)
                                }
                            }
                    }
                    break;
                case "overflow":
                    this.append(new i(e, s, 0)), e.song.loopStart = 0, e.song.loopLength = e.song.barCount;
                    break;
                default:
                    throw new Error("Unrecognized beats-per-bar conversion strategy.")
                }
                e.song.beatsPerBar = s, e.notifier.changed(), this.wt()
            }
        }
    };
    t.ChangeScale = class extends t.ChangeGroup {
        constructor(t, e) {
            super(), t.song.scale != e && (t.song.scale = e, t.notifier.changed(), this.wt())
        }
    };

    function r(e) {
        const i = [];
        for (let s = 0; s < t.EditorConfig.presetCategories.length; s++) {
            const n = t.EditorConfig.presetCategories[s];
            if ("Novelty Presets" != n.name)
                for (let t = 0; t < n.presets.length; t++) {
                    const o = n.presets[t];
                    void 0 != o.settings && 1 == o.isNoise == e && i.push((s << 6) + t)
                }
        }
        return i[Math.random() * i.length | 0]
    }

    function h(e) {
        for (let i = 0; i < e.channels.length; i++)
            for (const s of e.channels[i].instruments) {
                const n = e.getChannelIsNoise(i),
                    o = e.getChannelIsMod(i),
                    h = i == e.pitchChannelCount ? t.EditorConfig.nameToPresetValue(Math.random() > .5 ? "chip noise" : "standard drumset") : r(n),
                    a = t.EditorConfig.valueToPreset(h);
                s.fromJsonObject(a.settings, n, o), s.preset = h
            }
    }
    t.ChangeDetectKey = class extends t.ChangeGroup {
        constructor(e) {
            super();
            const i = e.song,
                s = t.Config.keys[i.key].basePitch,
                n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (let e = 0; e < i.pitchChannelCount; e++)
                for (let o = 0; o < i.barCount; o++) {
                    const r = i.getPattern(e, o);
                    if (null != r)
                        for (const e of r.notes) {
                            const i = e.pins[0];
                            for (let o = 1; o < e.pins.length; o++) {
                                const r = e.pins[o];
                                if (i.interval == r.interval) {
                                    let o = r.time - i.time;
                                    o += Math.max(0, Math.min(t.Config.partsPerBeat, r.time + e.start) - (i.time + e.start)), o *= r.volume + i.volume;
                                    for (const t of e.pitches) n[(s + i.interval + t) % 12] += o
                                }
                            }
                        }
                }
            let o = 0,
                r = 0;
            for (let t = 0; t < 12; t++) {
                const e = n[t] * (3 * n[(t + 7) % 12] + n[(t + 4) % 12] + n[(t + 3) % 12]);
                r < e && (r = e, o = t)
            }
            if (o != i.key) {
                const t = i.key - o,
                    s = Math.abs(t);
                for (let n = 0; n < i.pitchChannelCount; n++)
                    for (const o of i.channels[n].patterns)
                        for (let i = 0; i < s; i++) this.append(new y(e, n, o, t > 0, !0));
                i.key = o, e.notifier.changed(), this.wt()
            }
        }
    }, t.pickRandomPresetValue = r, t.setDefaultInstruments = h;
    t.ChangeSong = class extends t.ChangeGroup {
        constructor(e, i) {
            super();
            let s = e.song.pitchChannelCount,
                n = e.song.noiseChannelCount,
                o = e.song.modChannelCount;
            e.song.fromBase64String(i), s == e.song.pitchChannelCount && n == e.song.noiseChannelCount && o == e.song.modChannelCount || t.ColorConfig.resetColors(), this.append(new a(e)), "" == i && h(e.song), e.notifier.changed(), this.wt()
        }
    };
    class a extends t.Change {
        constructor(t) {
            super();
            const e = Math.min(t.channel, t.song.getChannelCount() - 1),
                i = Math.max(0, Math.min(t.song.barCount - 1, t.bar)),
                s = Math.min(t.bar, Math.max(t.bar - (t.trackVisibleBars - 1), Math.max(0, Math.min(t.song.barCount - t.trackVisibleBars, t.barScrollPos))));
            t.channel == e && t.bar == i && t.barScrollPos == s || (t.channel = e, t.bar = i, t.barScrollPos = s, t.notifier.changed(), this.wt())
        }
    }
    t.ChangeValidateDoc = a;
    class l extends t.ChangeGroup {
        constructor(e, i, s, n) {
            super();
            const o = e.song;

            function r(t, e) {
                for (; t.length > e;) {
                    let e = t.length - 1,
                        i = 0;
                    for (let s = 0; s < t.length - 1; s++) {
                        let n = 0;
                        for (const e of t[s].bars) 0 == e && n++;
                        n >= i && (e = s, i = n)
                    }
                    t.splice(e, 1)
                }
            }
            for (r(i, t.Config.pitchChannelCountMax), r(s, t.Config.noiseChannelCountMax), r(n, t.Config.modChannelCountMax); i.length < t.Config.pitchChannelCountMin;) i.push(new t.Channel);
            for (; s.length < t.Config.noiseChannelCountMin;) s.push(new t.Channel);
            for (; n.length < t.Config.modChannelCountMin;) n.push(new t.Channel);
            o.barCount = 1, o.instrumentsPerChannel = 1, o.patternsPerChannel = 8;
            const h = i.concat(s.concat(n));
            for (let t = 0; t < h.length; t++) {
                const e = h[t];
                o.barCount = Math.max(o.barCount, e.bars.length), o.patternsPerChannel = Math.max(o.patternsPerChannel, e.patterns.length), o.instrumentsPerChannel = Math.max(o.instrumentsPerChannel, e.instruments.length), o.channels[t] = e
            }
            o.channels.length = h.length, o.pitchChannelCount = i.length, o.noiseChannelCount = s.length, o.modChannelCount = n.length, o.barCount = Math.min(t.Config.barCountMax, o.barCount), o.patternsPerChannel = Math.min(t.Config.barCountMax, o.patternsPerChannel), o.instrumentsPerChannel = Math.min(t.Config.instrumentsPerChannelMax, o.instrumentsPerChannel);
            for (let i = 0; i < o.channels.length; i++) {
                const s = o.channels[i];
                for (let t = 0; t < s.bars.length; t++)(s.bars[t] > o.patternsPerChannel || s.bars[t] < 0) && (s.bars[t] = 0);
                for (const t of s.patterns)(t.instrument >= o.instrumentsPerChannel || t.instrument < 0) && (t.instrument = 0);
                for (; s.bars.length < o.barCount;) s.bars.push(0);
                for (; s.patterns.length < o.patternsPerChannel;) s.patterns.push(new t.Pattern);
                for (; s.instruments.length < o.instrumentsPerChannel;) {
                    const n = new t.Instrument(e.song.getChannelIsNoise(i), e.song.getChannelIsMod(i));
                    o.getChannelIsNoise(i) ? n.setTypeAndReset(2, !0, !1) : o.getChannelIsMod(i) ? n.setTypeAndReset(8, !1, !0) : n.setTypeAndReset(0, !1, !1), s.instruments.push(n)
                }
                s.instruments.length = o.instrumentsPerChannel, s.bars.length = o.barCount, s.patterns.length = o.patternsPerChannel
            }
            o.loopStart = Math.max(0, Math.min(o.barCount - 1, o.loopStart)), o.loopLength = Math.min(o.barCount - o.loopStart, o.loopLength), this.append(new a(e)), e.notifier.changed(), this.wt(), t.ColorConfig.resetColors()
        }
    }

    function c(t, e) {
        if (t.length != e.length) return !1;
        for (let i = 0; i < t.length; i++) {
            const s = t[i],
                n = e[i];
            if (n.start != s.start || n.end != s.end || n.pitches.length != s.pitches.length || n.pins.length != s.pins.length) return !1;
            for (let t = 0; t < s.pitches.length; t++)
                if (n.pitches[t] != s.pitches[t]) return !1;
            for (let t = 0; t < s.pins.length; t++)
                if (n.pins[t].interval != s.pins[t].interval || n.pins[t].time != s.pins[t].time || n.pins[t].volume != s.pins[t].volume) return !1
        }
        return !0
    }

    function d(t) {
        for (const e of t) {
            const t = [];
            for (let i = 0; i < e.bars.length; i++) {
                if (0 == e.bars[i]) continue;
                const s = e.patterns[e.bars[i] - 1];
                let n = !1;
                for (let o = 0; o < t.length; o++) {
                    const r = t[o];
                    if (r.instrument == s.instrument && r.notes.length == s.notes.length && c(s.notes, r.notes)) {
                        n = !0, e.bars[i] = o + 1;
                        break
                    }
                }
                n || (t.push(s), e.bars[i] = t.length)
            }
            for (let i = 0; i < t.length; i++) e.patterns[i] = t[i];
            e.patterns.length = t.length
        }
    }
    t.ChangeReplacePatterns = l, t.comparePatternNotes = c, t.removeDuplicatePatterns = d;
    t.ChangeTempo = class extends t.Change {
        constructor(e, i, s) {
            super(), e.song.tempo = Math.max(t.Config.tempoMin, Math.min(t.Config.tempoMax, s)), e.synth.unsetMod(t.ModSetting.mstTempo), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeReverb = class extends t.Change {
        constructor(e, i, s) {
            super(), e.song.reverb = s, e.synth.unsetMod(t.ModSetting.mstReverb), e.notifier.changed(), i != s && this.wt()
        }
    };
    class m extends t.UndoableChange {
        constructor(t, e, i, s, n = !1) {
            super(n), this.yt = t, this.jt = e, this.qt = i, this.q = s, this.wt(), this.redo()
        }
        Mt() {
            this.jt.notes.splice(this.q, 0, this.qt), this.yt.notifier.changed()
        }
        Et() {
            this.jt.notes.splice(this.q, 1), this.yt.notifier.changed()
        }
    }
    t.ChangeNoteAdded = m;
    class f extends s {
        constructor(e, i, s, n) {
            super(e, i), s -= this.Pt, n -= this.Pt;
            let o, r = !1,
                h = this.Bt[0].volume,
                a = this.Bt[0].interval,
                l = !0;
            for (o = 0; o < this.Bt.length; o++) {
                const e = this.Bt[o];
                if (e.time < s) h = e.volume, a = e.interval;
                else {
                    if (!(e.time <= n)) break;
                    if (e.time > s && !r && this.zt.push(t.makeNotePin(a, s, h)), this.zt.push(t.makeNotePin(e.interval, e.time, e.volume)), r = !0, e.time == n) {
                        l = !1;
                        break
                    }
                }
            }
            l && this.zt.push(t.makeNotePin(this.Bt[o].interval, n, this.Bt[o].volume)), this.At()
        }
    }
    t.ChangeNoteLength = f;
    class u extends t.ChangeSequence {
        constructor(t, e, i, s, n) {
            super();
            let o = 0;
            for (; o < e.notes.length;) {
                const r = e.notes[o];
                if (r == n && void 0 != n) o++;
                else if (r.end <= i) o++;
                else {
                    if (r.start >= s) break;
                    r.start < i ? ((!t.song.getChannelIsMod(t.channel) || void 0 != n && r.pitches[0] == n.pitches[0]) && this.append(new f(t, r, r.start, i)), o++) : r.end > s ? ((!t.song.getChannelIsMod(t.channel) || void 0 != n && r.pitches[0] == n.pitches[0]) && this.append(new f(t, r, s, r.end)), o++) : !t.song.getChannelIsMod(t.channel) || void 0 != n && r.pitches[0] == n.pitches[0] ? this.append(new m(t, e, r, o, !0)) : o++
                }
            }
        }
    }
    t.ChangeNoteTruncate = u;
    class p extends t.UndoableChange {
        constructor(e, i, s, n, o = !1, r = !1) {
            super(!1), this.yt = e, this.qt = s, this.Bt = s.pins, this.zt = [], this.Rt = s.pitches, this.Lt = [];
            const h = e.song.getChannelIsNoise(i);
            if (h != e.song.getChannelIsNoise(e.channel)) return;
            if (e.song.getChannelIsMod(e.channel)) return;
            const a = h ? t.Config.drumCount - 1 : t.Config.maxPitch;
            for (let i = 0; i < this.Rt.length; i++) {
                let s = this.Rt[i];
                if (r && !h) s = n ? Math.min(a, s + 12) : Math.max(0, s - 12);
                else if (n) {
                    for (let i = s + 1; i <= a; i++)
                        if (h || o || t.Config.scales[e.song.scale].flags[i % 12]) {
                            s = i;
                            break
                        }
                } else
                    for (let i = s - 1; i >= 0; i--)
                        if (h || o || t.Config.scales[e.song.scale].flags[i % 12]) {
                            s = i;
                            break
                        } let l = !1;
                for (let t = 0; t < this.Lt.length; t++)
                    if (this.Lt[t] == s) {
                        l = !0;
                        break
                    } l || this.Lt.push(s)
            }
            let l = 0,
                c = a;
            for (let t = 1; t < this.Lt.length; t++) {
                const e = this.Lt[0] - this.Lt[t];
                l < e && (l = e), c > e + a && (c = e + a)
            }
            for (const i of this.Bt) {
                let s = i.interval + this.Rt[0];
                if (s < l && (s = l), s > c && (s = c), r && !h) s = n ? Math.min(c, s + 12) : Math.max(l, s - 12);
                else if (n) {
                    for (let i = s + 1; i <= c; i++)
                        if (h || o || t.Config.scales[e.song.scale].flags[i % 12]) {
                            s = i;
                            break
                        }
                } else
                    for (let i = s - 1; i >= l; i--)
                        if (h || o || t.Config.scales[e.song.scale].flags[i % 12]) {
                            s = i;
                            break
                        } s -= this.Lt[0], this.zt.push(t.makeNotePin(s, i.time, i.volume))
            }
            if (0 != this.zt[0].interval) throw new Error("wrong pin start interval");
            for (let t = 1; t < this.zt.length - 1;) this.zt[t - 1].interval == this.zt[t].interval && this.zt[t].interval == this.zt[t + 1].interval && this.zt[t - 1].volume == this.zt[t].volume && this.zt[t].volume == this.zt[t + 1].volume ? this.zt.splice(t, 1) : t++;
            this.Mt(), this.wt()
        }
        Mt() {
            this.qt.pins = this.zt, this.qt.pitches = this.Lt, this.yt.notifier.changed()
        }
        Et() {
            this.qt.pins = this.Bt, this.qt.pitches = this.Rt, this.yt.notifier.changed()
        }
    }
    class y extends t.ChangeSequence {
        constructor(t, e, i, s, n = !1, o = !1) {
            super();
            for (let r = 0; r < i.notes.length; r++) this.append(new p(t, e, i.notes[r], s, n, o))
        }
    }
    t.ChangeTranspose = y;
    t.ChangePatternScale = class extends t.Change {
        constructor(e, i, s) {
            super();
            const n = t.Config.maxPitch;
            for (const e of i.notes) {
                const i = [],
                    o = [];
                for (let t = 0; t < e.pitches.length; t++) {
                    const n = e.pitches[t],
                        o = s[n % 12] + (n - n % 12); - 1 == i.indexOf(o) && i.push(o)
                }
                let r = 0,
                    h = n;
                for (let t = 1; t < i.length; t++) {
                    const e = i[0] - i[t];
                    r < e && (r = e), h > e + n && (h = e + n)
                }
                for (const n of e.pins) {
                    let a = n.interval + e.pitches[0];
                    a < r && (a = r), a > h && (a = h);
                    const l = s[a % 12] + (a - a % 12);
                    o.push(t.makeNotePin(l - i[0], n.time, n.volume))
                }
                if (0 != o[0].interval) throw new Error("wrong pin start interval");
                for (let t = 1; t < o.length - 1;) o[t - 1].interval == o[t].interval && o[t].interval == o[t + 1].interval && o[t - 1].volume == o[t].volume && o[t].volume == o[t + 1].volume ? o.splice(t, 1) : t++;
                e.pitches = i, e.pins = o
            }
            this.wt(), e.notifier.changed()
        }
    };
    t.ChangeVolume = class extends t.Change {
        constructor(t, e, i) {
            super(), t.song.channels[t.channel].instruments[t.getCurrentInstrument()].volume = i, t.notifier.changed(), e != i && this.wt()
        }
    };
    t.ChangeInputBoxText = class extends t.Change {
        constructor(e, i, s) {
            super(), s.length > 30 && (s = s.substring(0, 30)), e.song.title = s, document.title = s + " - " + t.Config.versionDisplayName, e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangePan = class extends t.Change {
        constructor(e, i, s) {
            super(), e.song.channels[e.channel].instruments[e.getCurrentInstrument()].pan = s, e.synth.unsetMod(t.ModSetting.mstPan, e.channel, e.getCurrentInstrument()), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeDetune = class extends t.Change {
        constructor(e, i, s) {
            super(), e.song.channels[e.channel].instruments[e.getCurrentInstrument()].detune = s, e.synth.unsetMod(t.ModSetting.mstDetune, e.channel, e.getCurrentInstrument()), e.notifier.changed(), i != s && this.wt()
        }
    };
    t.ChangeVolumeBend = class extends t.UndoableChange {
        constructor(e, i, s, n, o) {
            super(!1), this.yt = e, this.qt = i, this.Bt = i.pins, this.zt = [];
            let r = !1;
            for (const e of i.pins) e.time < s ? this.zt.push(e) : e.time == s ? (this.zt.push(t.makeNotePin(o, s, n)), r = !0) : (r || (this.zt.push(t.makeNotePin(o, s, n)), r = !0), this.zt.push(e));
            for (let t = 1; t < this.zt.length - 1;) this.zt[t - 1].interval == this.zt[t].interval && this.zt[t].interval == this.zt[t + 1].interval && this.zt[t - 1].volume == this.zt[t].volume && this.zt[t].volume == this.zt[t + 1].volume ? this.zt.splice(t, 1) : t++;
            this.Mt(), this.wt()
        }
        Mt() {
            this.qt.pins = this.zt, this.yt.notifier.changed()
        }
        Et() {
            this.qt.pins = this.Bt, this.yt.notifier.changed()
        }
    };
    t.ChangeChipWave = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.chipWave != e && (i.chipWave = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    };
    t.ChangeNoiseWave = class extends t.Change {
        constructor(t, e) {
            super();
            const i = t.song.channels[t.channel].instruments[t.getCurrentInstrument()];
            i.chipNoise != e && (i.chipNoise = e, i.preset = i.type, t.notifier.changed(), this.wt())
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        constructor() {
            this.valid = !1, this.prevNote = null, this.curNote = null, this.nextNote = null, this.pitch = 0, this.pitchIndex = -1, this.curIndex = 0, this.start = 0, this.end = 0, this.part = 0, this.notePart = 0, this.nearPinIndex = 0, this.pins = []
        }
    }
    t.PatternEditor = class {
        constructor(i, s, n) {
            this.yt = i, this.Wt = s, this.Gt = n, this.controlMode = !1, this.Kt = t.SVG.pattern({
                id: "patternEditorNoteBackground" + this.Gt,
                x: "0",
                y: "0",
                patternUnits: "userSpaceOnUse"
            }), this.Jt = t.SVG.pattern({
                id: "patternEditorDrumBackground" + this.Gt,
                x: "0",
                y: "0",
                patternUnits: "userSpaceOnUse"
            }), this.Yt = t.SVG.pattern({
                id: "patternEditorModBackground" + this.Gt,
                x: "0",
                y: "0",
                patternUnits: "userSpaceOnUse"
            }), this.Zt = t.SVG.rect({
                x: "0",
                y: "0",
                "pointer-events": "none",
                fill: "url(#patternEditorNoteBackground" + this.Gt + ")"
            }), this.Qt = t.SVG.svg(), this.Xt = t.SVG.rect({
                id: "",
                x: "0",
                y: "0",
                width: "4",
                fill: t.ColorConfig.playhead,
                "pointer-events": "none"
            }), this.te = t.SVG.path({
                fill: "none",
                stroke: t.ColorConfig.hoverPreview,
                "stroke-width": "2",
                "pointer-events": "none"
            }), this.modDragValueLabel = t.HTML.div({
                width: "90",
                "text-anchor": "start",
                contenteditable: "true",
                style: "display: flex, justify-content: center; align-items:center; position:absolute; pointer-events: none;",
                "dominant-baseline": "central"
            }), this.ee = t.SVG.svg({
                style: `background-color: ${t.ColorConfig.editorBackground}; touch-action: none; position: absolute;`,
                width: "100%",
                height: "100%"
            }, t.SVG.defs(this.Kt, this.Jt, this.Yt), this.Zt, this.Qt, this.te, this.Xt), this.container = t.HTML.div({
                style: "height: 100%; overflow:hidden; position: relative; flex-grow: 1;"
            }, this.ee, this.modDragValueLabel), this.ie = 34, this.se = [], this.ne = t.SVG.rect(), this.oe = t.SVG.rect(), this.re = 0, this.he = 0, this.ae = 0, this.editingModLabel = !1, this.le = 0, this.ce = 0, this.de = 6, this.me = -1, this.fe = 0, this.ue = 0, this.pe = !1, this.ye = !1, this.be = !1, this.ge = !1, this.ve = !1, this.we = [], this.ke = 0, this.xe = 0, this.Me = 0, this.Ee = 0, this.Ce = 0, this.Se = !1, this.qe = null, this.Pe = new e, this.Ne = [], this.jt = null, this.Te = 0, this.Fe = 0, this.Be = -1, this.ze = -1, this.Re = -1, this.Le = -1, this.Ae = !1, this.He = !1, this.$e = !1, this.De = -1, this.Ie = -1, this._e = -1, this.Oe = -1, this.Ue = -1, this.Ve = (e => {
                const i = e.target;
                let s = Number(i.innerText);
                if (!(!isNaN(s) && s >= 0 && s < this.ce) && "" != i.innerText && "-" != i.innerText) {
                    isNaN(s) && (s = this.ce, i.innerText = "" + this.ce);
                    let e = Math.floor(Math.max(Number(this.ce), Math.min(Number(this.de), s)));
                    i.innerText != e + "" && (i.innerText = e + "");
                    let n = +(e >= 10) + +(e >= 100) + +(e < 0) + +(e <= -10);
                    this.re = +t.prettyNumber(Math.max(Math.min(this.je - 10 - 8 * n, this.We * (this.Ge.start + this.Ke.time) - 4 - 4 * n), 2)), this.modDragValueLabel.style.setProperty("left", this.re + "px");
                    const o = new t.ChangeSequence;
                    this.qe = o, this.yt.setProspectiveChange(this.qe), o.append(new t.ChangeVolumeBend(this.yt, this.Ge, this.Ke.time, this.yt.song.realToModValue(e, this.Je), this.Ke.interval))
                }
            }), this.resetCopiedPins = (() => {
                const e = this.Ye();
                let i = this.yt.song.getVolumeCap(!1);
                this.we.length = this.yt.song.getChannelCount(), this.Ne.length = this.yt.song.getChannelCount();
                for (let s = 0; s < this.yt.song.pitchChannelCount; s++) this.we[s] = [t.makeNotePin(0, 0, i), t.makeNotePin(0, e, i)], this.Ne[s] = [i, i];
                for (let s = this.yt.song.pitchChannelCount; s < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; s++) this.we[s] = [t.makeNotePin(0, 0, i), t.makeNotePin(0, e, 0)], this.Ne[s] = [i, 0];
                for (let s = this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; s < this.yt.song.getChannelCount(); s++) this.we[s] = [t.makeNotePin(0, 0, i), t.makeNotePin(0, e, 0)], this.Ne[s] = [i, 0]
            }), this.Ze = (e => {
                const i = Math.floor(this.yt.synth.playhead);
                if (this.yt.synth.playing && (null != this.jt && this.yt.song.getPattern(this.yt.channel, Math.floor(this.yt.synth.playhead)) == this.jt || Math.floor(this.yt.synth.playhead) == this.yt.bar + this.Gt)) {
                    this.Xt.setAttribute("visibility", "visible");
                    const e = this.yt.synth.playhead - i;
                    Math.abs(e - this.Te) > .1 ? this.Te = e : this.Te += .2 * (e - this.Te), this.Xt.setAttribute("x", "" + t.prettyNumber(this.Te * this.je - 2))
                } else this.Xt.setAttribute("visibility", "hidden");
                this.yt.synth.playing && this.yt.autoFollow && this.Ue != i && (new t.ChangeChannelBar(this.yt, this.yt.channel, i), this.yt.notifier.notifyWatchers()), this.Ue = i, window.requestAnimationFrame(this.Ze)
            }), this.Qe = (t => {
                this.ye || (this.ye = !0, this.ve = !1)
            }), this.Xe = (t => {
                this.ye && (this.ye = !1)
            }), this.ti = (t => {
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.ve = !1, this.ii()
            }), this.si = (t => {
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.ve = !0, this.ii()
            }), this.ni = (t => {
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.ve = !1, this.oi()
            }), this.ri = (t => {
                if (!this.pe) return;
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.hi = (e => {
                if (!this.Pe.valid) return;
                const i = this.yt.lastChangeWas(this.qe);
                if (this.be && i) null != this.qe && (this.yt.record(this.qe), this.qe = null, null != this.jt && this.yt.song.getChannelIsMod(this.yt.channel) && this.jt.notes.sort(function(t, e) {
                    return t.start == e.start ? t.pitches[0] - e.pitches[0] : t.start - e.start
                }));
                else if (this.pe && i)
                    if (null == this.Pe.curNote) {
                        let e = this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), this.Pe.pitch);
                        const i = new t.Note(this.Pe.pitch, this.Pe.start, this.Pe.end, e, this.yt.song.getChannelIsNoise(this.yt.channel));
                        i.pins = [];
                        for (const e of this.Pe.pins) i.pins.push(t.makeNotePin(0, e.time, e.volume));
                        const s = new t.ChangeSequence;
                        s.append(new t.ChangeEnsurePatternExists(this.yt, this.yt.channel, this.yt.bar));
                        const n = this.yt.getCurrentPattern(this.Gt);
                        if (null == n) throw new Error;
                        s.append(new t.ChangeNoteAdded(this.yt, n, i, this.Pe.curIndex)), null != this.jt && this.yt.song.getChannelIsMod(this.yt.channel) && this.jt.notes.sort(function(t, e) {
                            return t.start == e.start ? t.pitches[0] - e.pitches[0] : t.start - e.start
                        }), this.yt.record(s)
                    } else {
                        if (null == this.jt) throw new Error;
                        if (-1 != this.Pe.pitchIndex || this.yt.song.getChannelIsMod(this.yt.channel)) 1 == this.Pe.curNote.pitches.length ? this.yt.record(new t.ChangeNoteAdded(this.yt, this.jt, this.Pe.curNote, this.Pe.curIndex, !0)) : this.yt.record(new t.ChangePitchAdded(this.yt, this.Pe.curNote, this.Pe.pitch, this.Pe.curNote.pitches.indexOf(this.Pe.pitch), !0));
                        else {
                            const e = new t.ChangeSequence;
                            if (this.Pe.curNote.pitches.length == t.Config.maxChordSize && e.append(new t.ChangePitchAdded(this.yt, this.Pe.curNote, this.Pe.curNote.pitches[0], 0, !0)), e.append(new t.ChangePitchAdded(this.yt, this.Pe.curNote, this.Pe.pitch, this.Pe.curNote.pitches.length)), this.yt.record(e), this.ai(this.Pe.curNote), this.yt.enableNotePreview && !this.yt.synth.playing) {
                                const e = Math.min(t.Config.partsPerBeat, this.Pe.end - this.Pe.start);
                                this.yt.synth.liveInputDuration = e, this.yt.synth.liveInputPitches = this.Pe.curNote.pitches.concat(), this.yt.synth.liveInputStarted = !0
                            }
                        }
                    } this.pe = !1, this.be = !1, this.modDragValueLabel.setAttribute("fill", t.ColorConfig.secondaryText), this.li(), this.ci()
            });
            for (let e = 0; e < t.Config.pitchesPerOctave; e++) {
                const i = t.SVG.rect();
                i.setAttribute("x", "1"), i.setAttribute("fill", 0 == e ? t.ColorConfig.tonic : t.ColorConfig.pitchBackground), this.Kt.appendChild(i), this.se[e] = i
            }
            this.ne.setAttribute("x", "1"), this.ne.setAttribute("y", "1"), this.ne.setAttribute("fill", t.ColorConfig.pitchBackground), this.Jt.appendChild(this.ne), this.oe.setAttribute("fill", t.ColorConfig.pitchBackground), this.Yt.appendChild(this.oe), this.Wt ? (this.li(), this.ci(), window.requestAnimationFrame(this.Ze), this.ee.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.ee.addEventListener("mouseover", this.Qe), this.ee.addEventListener("mouseout", this.Xe), this.ee.addEventListener("touchstart", this.si), this.ee.addEventListener("touchmove", this.ri), this.ee.addEventListener("touchend", this.hi), this.ee.addEventListener("touchcancel", this.hi), this.modDragValueLabel.addEventListener("input", this.Ve)) : (this.Xt.style.display = "none", this.ee.appendChild(t.SVG.rect({
                x: 0,
                y: 0,
                width: 1e4,
                height: 1e4,
                fill: t.ColorConfig.editorBackground,
                style: "opacity: 0.5;"
            }))), this.resetCopiedPins()
        }
        Ye() {
            const e = t.Config.rhythms[this.yt.song.rhythm].stepsPerBeat;
            return e % 4 == 0 ? t.Config.partsPerBeat / 2 : e % 3 == 0 ? t.Config.partsPerBeat / 3 : e % 2 == 0 ? t.Config.partsPerBeat / 2 : t.Config.partsPerBeat
        }
        di() {
            return t.Config.partsPerBeat / t.Config.rhythms[this.yt.song.rhythm].stepsPerBeat
        }
        mi(t) {
            const e = this.di();
            return Math.floor(t / e) * e
        }
        li() {
            if (this.Pe = new e, this.fe < 0 || this.fe > this.je || this.ue < 0 || this.ue > this.ei || this.me <= 0) return;
            const i = this.di(),
                s = this.fe / this.We;
            this.Pe.part = Math.floor(Math.max(0, Math.min(this.yt.song.beatsPerBar * t.Config.partsPerBeat - i, s)) / i) * i;
            let n = !1;
            if (null != this.jt) {
                for (const t of this.jt.notes)
                    if (t.end <= s) this.yt.song.getChannelIsMod(this.yt.channel) ? (t.pitches[0] == Math.floor(this.fi(this.ue)) && (this.Pe.prevNote = t), n || this.Pe.curIndex++) : (this.Pe.prevNote = t, this.Pe.curIndex++);
                    else if (t.start <= s && t.end > s) this.yt.song.getChannelIsMod(this.yt.channel) ? t.pitches[0] == Math.floor(this.fi(this.ue)) ? (this.Pe.curNote = t, n = !0) : (!n || null != this.Pe.curNote && t.start < this.Pe.curNote.start) && this.Pe.curIndex++ : this.Pe.curNote = t;
                else if (t.start > s) {
                    if (!this.yt.song.getChannelIsMod(this.yt.channel)) {
                        this.Pe.nextNote = t;
                        break
                    }
                    if (t.pitches[0] == Math.floor(this.fi(this.ue))) {
                        this.Pe.nextNote = t;
                        break
                    }
                }
                if (this.yt.song.getChannelIsMod(this.yt.channel) && !this.editingModLabel)
                    if (null != this.jt.notes[this.Pe.curIndex] && null != this.Pe.curNote) {
                        let e = 0;
                        for (; this.Pe.curNote.start + this.Pe.curNote.pins[e].time < s && e < this.Pe.curNote.pins.length;) e++;
                        e > 0 && this.Pe.curNote.start + this.Pe.curNote.pins[e].time - s > s - (this.Pe.curNote.start + this.Pe.curNote.pins[e - 1].time) && e--, this.modDragValueLabel.style.setProperty("color", "#666688"), this.modDragValueLabel.style.setProperty("display", "");
                        let i = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument(this.Gt)].modSettings[t.Config.modCount - 1 - this.Pe.curNote.pitches[0]],
                            n = this.yt.song.modValueToReal(this.Pe.curNote.pins[e].volume, i),
                            o = +(n >= 10) + +(n >= 100) + +(n < 0) + +(n <= -10);
                        this.ae = 8 + 8 * o, this.re = +t.prettyNumber(Math.max(Math.min(this.je - 10 - 8 * o, this.We * (this.Pe.curNote.start + this.Pe.curNote.pins[e].time) - 4 - 4 * o), 2)), this.he = +t.prettyNumber(this.ui(this.Pe.curNote.pitches[0] - this.Fe) - 17 - (this.me - this.pi) / 2), this.le = this.Pe.curNote.pins[e].volume, this.Ge = this.Pe.curNote, this.Ke = this.Pe.curNote.pins[e], this.ce = this.yt.song.modValueToReal(0, i), this.de = this.yt.song.modValueToReal(this.yt.song.mstMaxVols.get(i), i), this.Je = i, this.modDragValueLabel.style.setProperty("left", this.re + "px"), this.modDragValueLabel.style.setProperty("top", this.he + "px"), this.modDragValueLabel.textContent = "" + n
                    } else this.modDragValueLabel.style.setProperty("display", "none"), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false");
                else this.editingModLabel || (this.modDragValueLabel.style.setProperty("display", "none"), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false"))
            } else this.modDragValueLabel.style.setProperty("display", "none"), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false");
            let o = this.fi(this.ue);
            if (null != this.Pe.curNote) {
                this.Pe.start = this.Pe.curNote.start, this.Pe.end = this.Pe.curNote.end, this.Pe.pins = this.Pe.curNote.pins;
                let e, i = 0,
                    s = 0,
                    n = this.Pe.curNote.pins[0];
                for (let t = 1; t < this.Pe.curNote.pins.length; t++) {
                    e = n, n = this.Pe.curNote.pins[t];
                    const o = this.We * (this.Pe.curNote.start + e.time),
                        r = this.We * (this.Pe.curNote.start + n.time);
                    if (this.fe > r) continue;
                    if (this.fe < o) throw new Error;
                    const h = (this.fe - o) / (r - o),
                        a = Math.sqrt(1 / Math.sqrt(4) - Math.pow(h - .5, 2)) - .5,
                        l = Math.abs(n.interval - e.interval);
                    i = e.interval * (1 - h) + n.interval * h, s = a * l + .95;
                    break
                }
                let r = Number.MAX_VALUE,
                    h = -Number.MAX_VALUE,
                    a = Number.MAX_VALUE;
                for (const t of this.Pe.curNote.pins) {
                    r > t.interval && (r = t.interval), h < t.interval && (h = t.interval);
                    const e = Math.abs(this.Pe.curNote.start + t.time - this.fe / this.We);
                    a > e && (a = e, this.Pe.nearPinIndex = this.Pe.curNote.pins.indexOf(t))
                }
                if (o -= i, this.Pe.pitch = this.yi(o, -r, (this.yt.song.getChannelIsNoise(this.yt.channel) ? t.Config.drumCount - 1 : t.Config.maxPitch) - h), !this.yt.song.getChannelIsNoise(this.yt.channel)) {
                    let t = s;
                    for (let e = 0; e < this.Pe.curNote.pitches.length; e++) {
                        const i = Math.abs(this.Pe.curNote.pitches[e] - o + .5);
                        i > t || (t = i, this.Pe.pitch = this.Pe.curNote.pitches[e])
                    }
                }
                for (let t = 0; t < this.Pe.curNote.pitches.length; t++)
                    if (this.Pe.curNote.pitches[t] == this.Pe.pitch) {
                        this.Pe.pitchIndex = t;
                        break
                    }
            } else {
                this.Pe.pitch = this.yi(o, 0, t.Config.maxPitch);
                const e = this.bi[this.bi.length - 1].time,
                    i = Math.floor(this.Pe.part / t.Config.partsPerBeat),
                    s = this.Ye(),
                    n = this.Pe.part % t.Config.partsPerBeat;
                if (1 == e) this.Pe.start = this.Pe.part;
                else if (e > t.Config.partsPerBeat) this.Pe.start = i * t.Config.partsPerBeat;
                else if (e == t.Config.partsPerBeat) this.Pe.start = i * t.Config.partsPerBeat, s < t.Config.partsPerBeat && n > s && (this.Pe.start += Math.floor(n / s) * s);
                else {
                    this.Pe.start = i * t.Config.partsPerBeat;
                    let o = t.Config.partsPerBeat % e == 0 ? e : Math.min(e, s);
                    for (; o < s && t.Config.partsPerBeat % o != 0;) o++;
                    this.Pe.start += Math.floor(n / o) * o
                }
                this.Pe.end = this.Pe.start + e;
                let r = 0,
                    h = this.yt.song.beatsPerBar * t.Config.partsPerBeat;
                if (null != this.Pe.prevNote && (r = this.Pe.prevNote.end), null != this.Pe.nextNote && (h = this.Pe.nextNote.start), this.Pe.start < r ? (this.Pe.start = r, this.Pe.end = this.Pe.start + e, this.Pe.end > h && (this.Pe.end = h)) : this.Pe.end > h && (this.Pe.end = h, this.Pe.start = this.Pe.end - e, this.Pe.start < r && (this.Pe.start = r)), this.Pe.end - this.Pe.start == e) this.bi = this.we[this.yt.channel], this.Pe.pins = this.bi;
                else {
                    this.Pe.pins = [];
                    for (const e of this.bi) {
                        if (!(e.time <= this.Pe.end - this.Pe.start)) {
                            this.Pe.pins.push(t.makeNotePin(0, this.Pe.end - this.Pe.start, e.volume));
                            break
                        }
                        if (this.Pe.pins.push(t.makeNotePin(0, e.time, e.volume)), e.time == this.Pe.end - this.Pe.start) break
                    }
                }
                if (this.yt.song.getChannelIsMod(this.yt.channel)) {
                    if (null != this.Ne && null != this.Ne[this.yt.channel])
                        for (let t = 0; t < this.Pe.pins.length; t++) this.Pe.pins[t].volume = this.Ne[this.yt.channel][t];
                    let t = this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), this.Pe.pitch),
                        e = 0;
                    for (const t of this.Pe.pins) t.volume > e && (e = t.volume);
                    if (e > t)
                        for (const i of this.Pe.pins) i.volume = Math.round(i.volume * (t / e))
                }
            }
            this.Pe.valid = !0
        }
        fi(t) {
            return Math.max(0, Math.min(this.gi - 1, this.gi - t / this.me)) + this.Fe
        }
        yi(e, i, s) {
            e < i && (e = i), e > s && (e = s);
            const n = t.Config.scales[this.yt.song.scale].flags;
            if (n[Math.floor(e) % t.Config.pitchesPerOctave] || this.yt.song.getChannelIsNoise(this.yt.channel) || this.yt.song.getChannelIsMod(this.yt.channel)) return Math.floor(e); {
                let o = Math.floor(e) + 1,
                    r = Math.floor(e) - 1;
                for (; !n[o % t.Config.pitchesPerOctave];) o++;
                for (; !n[r % t.Config.pitchesPerOctave];) r--;
                if (o > s) return r < i ? i : r;
                if (r < i) return o;
                let h = o,
                    a = r + 1;
                return o % t.Config.pitchesPerOctave != 0 && o % t.Config.pitchesPerOctave != 7 || (h -= .5), r % t.Config.pitchesPerOctave != 0 && r % t.Config.pitchesPerOctave != 7 || (a += .5), e - a > h - e ? o : r
            }
        }
        ai(e) {
            this.bi = [];
            for (const i of e.pins) this.bi.push(t.makeNotePin(0, i.time, i.volume));
            for (let t = 1; t < this.bi.length - 1;) this.bi[t - 1].volume == this.bi[t].volume && this.bi[t].volume == this.bi[t + 1].volume ? this.bi.splice(t, 1) : t++;
            this.we[this.yt.channel] = this.bi, this.Ne[this.yt.channel] = [];
            for (let t = 0; t < this.bi.length; t++) this.Ne[this.yt.channel].push(this.bi[t].volume)
        }
        stopEditingModLabel(e) {
            if (this.editingModLabel) {
                if (this.editingModLabel = !1, this.modDragValueLabel.style.setProperty("pointer-events", "none"), window.getSelection && window.getSelection().removeAllRanges(), e) {
                    this.Ke.volume = this.le;
                    let e = this.yt.song.modValueToReal(this.le, this.Je),
                        i = +(e >= 10) + +(e >= 100) + +(e < 0) + +(e <= -10);
                    this.re = +t.prettyNumber(Math.max(Math.min(this.je - 10 - 8 * i, this.We * (this.Ge.start + this.Ke.time) - 4 - 4 * i), 2)), this.modDragValueLabel.style.setProperty("left", this.re + "px");
                    const s = new t.ChangeSequence;
                    this.qe = s, this.yt.setProspectiveChange(this.qe), s.append(new t.ChangeVolumeBend(this.yt, this.Ge, this.Ke.time, this.le, this.Ke.interval)), this.qe = null
                }
                this.yt.lastChangeWas(this.qe) && null != this.qe && (this.yt.record(this.qe), this.qe = null)
            }
        }
        ii() {
            if (this.yt.song.getChannelIsMod(this.yt.channel) && "none" != this.modDragValueLabel.style.getPropertyValue("display") && this.fe > +this.re - 6 && this.fe < +this.re + this.ae + 6 && this.ue > +this.he - 8 && this.ue < +this.he + 11) this.modDragValueLabel.style.setProperty("pointer-events", "fill"), this.modDragValueLabel.setAttribute("contenteditable", "true"), window.getSelection().selectAllChildren(this.modDragValueLabel), window.setTimeout(() => {
                this.modDragValueLabel.focus()
            }), this.editingModLabel = !0;
            else if (this.stopEditingModLabel(!1), this.yt.enableNotePreview && this.yt.synth.maintainLiveInput(), this.pe = !0, this.ke = this.fe, this.xe = this.ue, this.li(), this.ci(), this.qe = new t.ChangeSequence, this.yt.setProspectiveChange(this.qe), this.yt.enableNotePreview && !this.yt.synth.playing && this.Pe.valid && null == this.Pe.curNote) {
                const e = Math.min(t.Config.partsPerBeat, this.Pe.end - this.Pe.start);
                this.yt.synth.liveInputDuration = e, this.yt.synth.liveInputPitches = [this.Pe.pitch], this.yt.synth.liveInputStarted = !0
            }
        }
        oi() {
            let e, i;
            this.yt.enableNotePreview && this.ye && this.yt.synth.maintainLiveInput();
            const s = this.yt.lastChangeWas(this.qe);
            if (this.pe && this.Pe.valid && s) {
                const s = this.di();
                if (!this.be) {
                    const t = this.fe - this.ke,
                        e = this.ue - this.xe;
                    Math.sqrt(t * t + e * e) > 5 && (this.be = !0, this.ge = Math.abs(t) >= Math.abs(e))
                }
                if (this.be) {
                    null != this.qe && this.qe.undo();
                    const n = this.mi(this.fe / this.We),
                        o = new t.ChangeSequence;
                    if (this.qe = o, this.yt.setProspectiveChange(this.qe), null == this.Pe.curNote) {
                        let r, h;
                        n < this.Pe.start ? (r = !0, h = this.Pe.start - n) : (r = !1, h = n - this.Pe.start + s);
                        let a = s;
                        for (let e = s; e <= this.yt.song.beatsPerBar * t.Config.partsPerBeat; e += s) {
                            if (1 == s) {
                                if (e < 5);
                                else if (e <= t.Config.partsPerBeat / 2) {
                                    if (e % 3 != 0 && e % 4 != 0) continue
                                } else if (e <= 1.5 * t.Config.partsPerBeat) {
                                    if (e % 6 != 0 && e % 8 != 0) continue
                                } else if (e % t.Config.partsPerBeat != 0) continue
                            } else if (e >= 5 * s && e % t.Config.partsPerBeat != 0 && e != 3 * t.Config.partsPerBeat / 4 && e != 3 * t.Config.partsPerBeat / 2 && e != 4 * t.Config.partsPerBeat / 3) continue;
                            if (e == h) {
                                a = e;
                                break
                            }
                            if (e < h && (a = e), e > h) {
                                a < h - s && (a = e);
                                break
                            }
                        }
                        if (r ? e = (i = this.Pe.start) - a : i = (e = this.Pe.start) + a, e < 0 && (e = 0), i > this.yt.song.beatsPerBar * t.Config.partsPerBeat && (i = this.yt.song.beatsPerBar * t.Config.partsPerBeat), e < i) {
                            o.append(new t.ChangeEnsurePatternExists(this.yt, this.yt.channel, this.yt.bar));
                            const s = this.yt.getCurrentPattern(this.Gt);
                            if (null == s) throw new Error;
                            let n;
                            for (o.append(new t.ChangeNoteTruncate(this.yt, s, e, i, new t.Note(this.Pe.pitch, 0, 0, 0))), n = 0; n < s.notes.length && !(s.notes[n].start >= i); n++);
                            const h = new t.Note(this.Pe.pitch, e, i, this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), this.Pe.pitch), this.yt.song.getChannelIsNoise(this.yt.channel));
                            o.append(new t.ChangeNoteAdded(this.yt, s, h, n)), this.ai(h), this.Me = r ? e : i, this.Ee = this.Pe.pitch, this.Ce = h.pins[r ? 0 : 1].volume, this.Se = !0
                        }
                        let l = this.jt;
                        this.jt = this.yt.getCurrentPattern(this.Gt), null != this.jt && this.yt.song.getChannelIsMod(this.yt.channel) && this.Wt && l != this.jt && this.jt.notes.sort(function(t, e) {
                            return t.start == e.start ? t.pitches[0] - e.pitches[0] : t.start - e.start
                        })
                    } else if (this.ge) {
                        const n = (this.fe - this.ke) / this.We,
                            r = this.Pe.curNote.pins[this.Pe.nearPinIndex];
                        let h = Math.round((this.Pe.curNote.start + r.time + n) / s) * s;
                        if (h < 0 && (h = 0), h > this.yt.song.beatsPerBar * t.Config.partsPerBeat && (h = this.yt.song.beatsPerBar * t.Config.partsPerBeat), null == this.jt) throw new Error;
                        h <= this.Pe.curNote.start && this.Pe.nearPinIndex == this.Pe.curNote.pins.length - 1 || h >= this.Pe.curNote.end && 0 == this.Pe.nearPinIndex ? (o.append(new t.ChangeNoteAdded(this.yt, this.jt, this.Pe.curNote, this.Pe.curIndex, !0)), this.Se = !1) : (e = Math.min(this.Pe.curNote.start, h), i = Math.max(this.Pe.curNote.end, h), this.Me = h, this.Ee = this.Pe.curNote.pitches[-1 == this.Pe.pitchIndex ? 0 : this.Pe.pitchIndex] + this.Pe.curNote.pins[this.Pe.nearPinIndex].interval, this.Ce = this.Pe.curNote.pins[this.Pe.nearPinIndex].volume, this.Se = !0, o.append(new t.ChangeNoteTruncate(this.yt, this.jt, e, i, this.Pe.curNote)), o.append(new t.ChangePinTime(this.yt, this.Pe.curNote, this.Pe.nearPinIndex, h)), this.ai(this.Pe.curNote))
                    } else if (-1 == this.Pe.pitchIndex || this.yt.song.getChannelIsMod(this.yt.channel)) {
                        const e = Math.max(this.Pe.curNote.start, Math.min(this.Pe.curNote.end, Math.round(this.fe / (this.We * s)) * s)) - this.Pe.curNote.start;
                        let i, n = this.Pe.curNote.pins[0],
                            r = 0,
                            h = 0,
                            a = this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), this.Pe.pitch),
                            l = 25 / Math.pow(a, .4),
                            c = 22 / Math.pow(a, .5),
                            d = this.xe > this.ue ? 1 : -1,
                            m = Math.min(Math.abs(this.xe - this.ue) / l, 8) + Math.max(0, Math.abs(this.xe - this.ue) / c - 8);
                        for (let s = 1; s < this.Pe.curNote.pins.length; s++) {
                            if (i = n, e > (n = this.Pe.curNote.pins[s]).time) continue;
                            if (e < i.time) throw new Error;
                            const o = (e - i.time) / (n.time - i.time);
                            r = Math.round(i.volume * (1 - o) + n.volume * o + d * m), 0 != this.controlMode || 0 != this.yt.alwaysFineNoteVol || this.yt.song.getChannelIsMod(this.yt.channel) || (r = 2 * Math.floor(r / 2)), r < 0 && (r = 0), r > a && (r = a), h = this.yi(i.interval * (1 - o) + n.interval * o + this.Pe.curNote.pitches[0], 0, t.Config.maxPitch) - this.Pe.curNote.pitches[0];
                            break
                        }
                        this.Me = this.Pe.curNote.start + e, this.Ee = this.Pe.curNote.pitches[-1 == this.Pe.pitchIndex ? 0 : this.Pe.pitchIndex] + h, this.Ce = r, this.Se = !0, o.append(new t.ChangeVolumeBend(this.yt, this.Pe.curNote, e, r, h)), this.ai(this.Pe.curNote)
                    } else {
                        if (this.Ce = this.Pe.curNote.pins[this.Pe.nearPinIndex].volume, null == this.jt) throw new Error;
                        let e, i;
                        this.fe >= this.ke ? (e = Math.max(this.Pe.curNote.start, this.Pe.part), i = n + s) : (e = Math.min(this.Pe.curNote.end, this.Pe.part + s), i = n), i < 0 && (i = 0), i > this.yt.song.beatsPerBar * t.Config.partsPerBeat && (i = this.yt.song.beatsPerBar * t.Config.partsPerBeat), i > this.Pe.curNote.end && o.append(new t.ChangeNoteTruncate(this.yt, this.jt, this.Pe.curNote.start, i, this.Pe.curNote)), i < this.Pe.curNote.start && o.append(new t.ChangeNoteTruncate(this.yt, this.jt, i, this.Pe.curNote.end, this.Pe.curNote));
                        let r = Number.MAX_VALUE,
                            h = -Number.MAX_VALUE;
                        for (const t of this.Pe.curNote.pitches) r > t && (r = t), h < t && (h = t);
                        if (r -= this.Pe.curNote.pitches[this.Pe.pitchIndex], h -= this.Pe.curNote.pitches[this.Pe.pitchIndex], this.yt.song.getChannelIsMod(this.yt.channel)) {
                            const s = this.yi(this.Ee, -r, t.Config.modCount - 1);
                            o.append(new t.ChangePitchBend(this.yt, this.Pe.curNote, e, i, s, this.Pe.pitchIndex)), this.Ee = s
                        } else {
                            const s = this.yi(this.fi(this.ue), -r, (this.yt.song.getChannelIsNoise(this.yt.channel) ? t.Config.drumCount - 1 : t.Config.maxPitch) - h);
                            o.append(new t.ChangePitchBend(this.yt, this.Pe.curNote, e, i, s, this.Pe.pitchIndex)), this.Ee = s
                        }
                        this.ai(this.Pe.curNote), this.Me = i, this.Se = !0
                    }
                }
            } else this.li(), this.ci()
        }
        ci() {
            if (this.ve)
                if (this.pe && this.Pe.valid && this.be && this.Se) {
                    this.te.setAttribute("visibility", "visible");
                    const e = this.We * this.Me,
                        i = this.ui(this.Ee - this.Fe),
                        s = (this.me - this.pi) / 2,
                        n = 80,
                        o = 60,
                        r = this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), this.Pe.pitch);
                    let h = "";
                    h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i - s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e) + " " + t.prettyNumber(i - s * (this.Ce / r) - o) + " ", h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i + s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e) + " " + t.prettyNumber(i + s * (this.Ce / r) + o) + " ", h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i - s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e + n) + " " + t.prettyNumber(i - s * (this.Ce / r)) + " ", h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i + s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e + n) + " " + t.prettyNumber(i + s * (this.Ce / r)) + " ", h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i - s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e - n) + " " + t.prettyNumber(i - s * (this.Ce / r)) + " ", h += "M " + t.prettyNumber(e) + " " + t.prettyNumber(i + s * (this.Ce / r)) + " ", h += "L " + t.prettyNumber(e - n) + " " + t.prettyNumber(i + s * (this.Ce / r)) + " ", this.te.setAttribute("d", h)
                } else this.te.setAttribute("visibility", "hidden"), this.editingModLabel || (this.modDragValueLabel.style.setProperty("display", "none"), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false"));
            else this.ye && !this.pe && this.Pe.valid ? (this.te.setAttribute("visibility", "visible"), this.vi(this.te, this.Pe.pitch, this.Pe.start, this.Pe.pins, (this.me - this.pi) / 2 + 1, !0, this.Fe)) : (this.te.setAttribute("visibility", "hidden"), this.editingModLabel || (this.modDragValueLabel.style.setProperty("display", "none"), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false")))
        }
        render() {
            const e = this.yt.getCurrentPattern(this.Gt);
            if (this.jt != e && (this.yt.song.getChannelIsMod(this.yt.channel) && this.Wt && null != e && e.notes.sort(function(t, e) {
                    return t.start == e.start ? t.pitches[0] - e.pitches[0] : t.start - e.start
                }), this.hi(null), this.qe = null), this.jt = e, this.je = this.container.clientWidth, this.ei = this.container.clientHeight, this.We = this.je / (this.yt.song.beatsPerBar * t.Config.partsPerBeat), this.Fe = this.yt.song.channels[this.yt.channel].octave * t.Config.pitchesPerOctave, this.yt.song.getChannelIsNoise(this.yt.channel)) this.pi = 0, this.gi = t.Config.drumCount;
            else if (this.yt.song.getChannelIsMod(this.yt.channel)) {
                if (this.pi = this.ie, this.gi = t.Config.modCount, null != this.jt)
                    for (const t of this.jt.notes) {
                        let e = t.pitches[0],
                            i = this.yt.song.getVolumeCap(!0, this.yt.channel, this.yt.getCurrentInstrument(this.Gt), e),
                            s = 0;
                        for (const e of t.pins) e.volume > s && (s = e.volume);
                        if (s > i)
                            for (const e of t.pins) e.volume = Math.round(e.volume * (i / s))
                    }
            } else this.pi = 0, this.gi = this.yt.windowPitchCount;
            this.me = this.ei / this.gi, this.De == this.yt.song.rhythm && this.Ie == this.yt.song.pitchChannelCount && this._e == this.yt.song.noiseChannelCount && this.Oe == this.yt.song.modChannelCount || (this.De = this.yt.song.rhythm, this.Ie = this.yt.song.pitchChannelCount, this._e = this.yt.song.noiseChannelCount, this.Oe = this.yt.song.modChannelCount, this.resetCopiedPins()), this.bi = this.we[this.yt.channel], this.Be == this.je && this.ze == this.ei || (this.Be = this.je, this.ze = this.ei, this.Zt.setAttribute("width", "" + this.je), this.Zt.setAttribute("height", "" + this.ei), this.Xt.setAttribute("height", "" + this.ei));
            const i = this.je / this.yt.song.beatsPerBar;
            if (this.Re != i || this.Le != this.me) {
                this.Re = i, this.Le = this.me, this.Kt.setAttribute("width", "" + i), this.Kt.setAttribute("height", "" + this.me * t.Config.pitchesPerOctave), this.Jt.setAttribute("width", "" + i), this.Jt.setAttribute("height", "" + this.me), this.Yt.setAttribute("width", "" + i), this.Yt.setAttribute("height", "" + this.me), this.Yt.setAttribute("y", "" + this.pi / 2), this.ne.setAttribute("width", "" + (i - 2)), this.ne.setAttribute("height", "" + (this.me - 2)), this.me > this.pi && (this.oe.setAttribute("width", "" + (i - 2)), this.oe.setAttribute("height", "" + (this.me - this.pi)));
                for (let e = 0; e < t.Config.pitchesPerOctave; e++) {
                    const s = this.se[e],
                        n = (t.Config.pitchesPerOctave - e) % t.Config.pitchesPerOctave;
                    s.setAttribute("width", "" + (i - 2)), s.setAttribute("y", "" + (n * this.me + 1)), s.setAttribute("height", "" + (this.me - 2))
                }
            }
            this.Qt = function(t) {
                const e = t.cloneNode(!1);
                return t.parentNode.replaceChild(e, t), e
            }(this.Qt), this.Wt && (this.pe || this.li(), this.ci()), this.Ae != this.yt.showFifth && (this.Ae = this.yt.showFifth, this.se[7].setAttribute("fill", this.yt.showFifth ? t.ColorConfig.fifthNote : t.ColorConfig.pitchBackground));
            for (let e = 0; e < t.Config.pitchesPerOctave; e++) this.se[e].style.visibility = t.Config.scales[this.yt.song.scale].flags[e] ? "visible" : "hidden";
            if (this.yt.song.getChannelIsNoise(this.yt.channel) ? this.He || (this.He = !0, this.$e = !1, this.Zt.setAttribute("fill", "url(#patternEditorDrumBackground" + this.Gt + ")")) : this.yt.song.getChannelIsMod(this.yt.channel) ? this.$e || (this.He = !1, this.$e = !0, this.Zt.setAttribute("fill", "url(#patternEditorModBackground" + this.Gt + ")")) : (this.He || this.$e) && (this.He = !1, this.$e = !1, this.Zt.setAttribute("fill", "url(#patternEditorNoteBackground" + this.Gt + ")")), this.yt.showChannels && !this.yt.song.getChannelIsMod(this.yt.channel))
                for (let e = this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount - 1; e >= 0; e--) {
                    if (e == this.yt.channel) continue;
                    if (this.yt.song.getChannelIsNoise(e) != this.yt.song.getChannelIsNoise(this.yt.channel)) continue;
                    const i = this.yt.song.getPattern(e, this.yt.bar + this.Gt);
                    if (null != i)
                        for (const s of i.notes)
                            for (const i of s.pitches) {
                                const n = t.SVG.path();
                                n.setAttribute("fill", t.ColorConfig.getChannelColor(this.yt.song, e).secondaryNote), n.setAttribute("pointer-events", "none"), this.vi(n, i, s.start, s.pins, .19 * this.me, !1, this.yt.song.channels[e].octave * t.Config.pitchesPerOctave), this.Qt.appendChild(n)
                            }
                }
            if (null != this.jt)
                for (const e of this.jt.notes) {
                    for (let i = 0; i < e.pitches.length; i++) {
                        const s = e.pitches[i];
                        let n = t.SVG.path();
                        if (n.setAttribute("fill", t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).secondaryNote), n.setAttribute("pointer-events", "none"), this.vi(n, s, e.start, e.pins, (this.me - this.pi) / 2 + 1, !1, this.Fe), this.Qt.appendChild(n), (n = t.SVG.path()).setAttribute("fill", t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).primaryNote), n.setAttribute("pointer-events", "none"), this.vi(n, s, e.start, e.pins, (this.me - this.pi) / 2 + 1, !0, this.Fe), this.Qt.appendChild(n), e.pitches.length > 1) {
                            const n = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument(this.Gt)].getChord();
                            if (!n.harmonizes || n.arpeggiates || n.strumParts > 0) {
                                let n = t.SVG.text();
                                n.setAttribute("x", "" + t.prettyNumber(this.We * e.start + 2)), n.setAttribute("y", "" + t.prettyNumber(this.ui(s - this.Fe))), n.setAttribute("width", "30"), n.setAttribute("fill", t.ColorConfig.invertedText), n.setAttribute("text-anchor", "start"), n.setAttribute("dominant-baseline", "central"), n.setAttribute("pointer-events", "none"), n.textContent = "" + (i + 1), this.Qt.appendChild(n)
                            }
                        }
                    }
                    if (this.yt.song.getChannelIsMod(this.yt.channel) && this.be && !this.ge && e == this.Pe.curNote) {
                        this.modDragValueLabel.style.setProperty("display", ""), this.modDragValueLabel.style.setProperty("pointer-events", "none"), this.modDragValueLabel.setAttribute("contenteditable", "false"), this.modDragValueLabel.style.setProperty("color", "#FFFFFF");
                        let i = this.yt.song.modValueToReal(this.Ce, this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument(this.Gt)].modSettings[t.Config.modCount - 1 - e.pitches[0]]),
                            s = +(i >= 10) + +(i >= 100) + +(i < 0) + +(i <= -10);
                        this.ae = 8 + 8 * s, this.re = +t.prettyNumber(Math.max(Math.min(this.je - 10 - 8 * s, this.We * this.Me - 4 - 4 * s), 2)), this.he = +t.prettyNumber(this.ui(e.pitches[0] - this.Fe) - 17 - (this.me - this.pi) / 2), this.modDragValueLabel.style.setProperty("left", this.re + "px"), this.modDragValueLabel.style.setProperty("top", this.he + "px"), this.modDragValueLabel.textContent = "" + i
                    }
                }
        }
        vi(e, i, s, n, o, r, h) {
            const a = this.We * (n[n.length - 1].time + n[0].time),
                l = .5 * Math.min(2, a - 1);
            let c = n[0];
            const d = this.yt.song.getVolumeCap(this.yt.song.getChannelIsMod(this.yt.channel), this.yt.channel, this.yt.getCurrentInstrument(this.Gt), i);
            let m = "M " + t.prettyNumber(this.We * (s + c.time) + l) + " " + t.prettyNumber(this.ui(i - h) + o * (r ? c.volume / d : 1)) + " ";
            for (let e = 1; e < n.length; e++) {
                let a = c;
                c = n[e];
                let f = this.We * (s + a.time) + (1 == e ? l : 0),
                    u = this.We * (s + c.time) - (e == n.length - 1 ? l : 0),
                    p = this.ui(i + a.interval - h),
                    y = this.ui(i + c.interval - h),
                    b = r ? a.volume / d : 1,
                    g = r ? c.volume / d : 1;
                m += "L " + t.prettyNumber(f) + " " + t.prettyNumber(p - o * b) + " ", a.interval > c.interval && (m += "L " + t.prettyNumber(f + 1) + " " + t.prettyNumber(p - o * b) + " "), a.interval < c.interval && (m += "L " + t.prettyNumber(u - 1) + " " + t.prettyNumber(y - o * g) + " "), m += "L " + t.prettyNumber(u) + " " + t.prettyNumber(y - o * g) + " "
            }
            for (let e = n.length - 2; e >= 0; e--) {
                let a = c;
                c = n[e];
                let f = this.We * (s + a.time) - (e == n.length - 2 ? l : 0),
                    u = this.We * (s + c.time) + (0 == e ? l : 0),
                    p = this.ui(i + a.interval - h),
                    y = this.ui(i + c.interval - h),
                    b = r ? a.volume / d : 1,
                    g = r ? c.volume / d : 1;
                m += "L " + t.prettyNumber(f) + " " + t.prettyNumber(p + o * b) + " ", a.interval < c.interval && (m += "L " + t.prettyNumber(f - 1) + " " + t.prettyNumber(p + o * b) + " "), a.interval > c.interval && (m += "L " + t.prettyNumber(u + 1) + " " + t.prettyNumber(y + o * g) + " "), m += "L " + t.prettyNumber(u) + " " + t.prettyNumber(y + o * g) + " "
            }
            m += "z", e.setAttribute("d", m)
        }
        ui(t) {
            return this.me * (this.gi - t - .5)
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.MuteEditor = class {
        constructor(e) {
            this.yt = e, this.container = t.HTML.div({
                class: "muteEditor",
                style: "margin-top: " + t.Config.barEditorHeight + "px;"
            }), this.wi = [], this.ki = [], this.ei = 128, this.xi = 0, this.Mi = 0, this.Ei = 0, this.Ci = 0, this.Si = -1, this.qi = (t => {
                const e = this.wi.indexOf(t.target); - 1 != e && (this.yt.song.channels[e].muted = !this.yt.song.channels[e].muted, this.yt.notifier.changed())
            }), this.container.addEventListener("click", this.qi)
        }
        onKeyPressed(t) {
            t.keyCode
        }
        render() {
            if (!this.yt.enableChannelMuting) return;
            const e = this.yt.getChannelHeight();
            if (this.xi != this.yt.song.getChannelCount()) {
                for (let e = this.xi; e < this.yt.song.getChannelCount(); e++) {
                    const i = t.HTML.div({
                            class: "noSelection muteButtonText",
                            style: "display: table-cell; vertical-align: middle; text-align: center; -webkit-user-select: none; -webkit-touch-callout: none; -moz-user-select: none; -ms-user-select: none; user-select: none; pointer-events: none; width: 12px; height: 20px; transform: translate(0px, 1px);"
                        }),
                        s = t.HTML.div({
                            class: "mute-button",
                            style: "display: block; pointer-events: none; width: 16px; height: 20px; transform: translate(2px, 1px);"
                        }),
                        n = t.HTML.div({
                            style: "align-items: center; height: 20px; margin: 0px; display: table; flex-direction: row; justify-content: space-between;"
                        }, [s, i]);
                    this.container.appendChild(n), this.wi[e] = n, this.ki[e] = i
                }
                for (let t = this.yt.song.getChannelCount(); t < this.xi; t++) this.container.removeChild(this.wi[t]);
                this.wi.length = this.yt.song.getChannelCount()
            }
            for (let e = 0; e < this.yt.song.getChannelCount(); e++) this.yt.song.channels[e].muted ? (this.wi[e].children[0].classList.add("muted"), e < this.yt.song.pitchChannelCount ? this.ki[e].style.color = t.ColorConfig.trackEditorBgPitchDim : e < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount ? this.ki[e].style.color = t.ColorConfig.trackEditorBgNoiseDim : this.ki[e].style.color = t.ColorConfig.trackEditorBgModDim) : (this.wi[e].children[0].classList.remove("muted"), e < this.yt.song.pitchChannelCount ? this.ki[e].style.color = t.ColorConfig.trackEditorBgPitch : e < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount ? this.ki[e].style.color = t.ColorConfig.trackEditorBgNoise : this.ki[e].style.color = t.ColorConfig.trackEditorBgMod);
            if (this.Si != e || this.xi != this.yt.song.getChannelCount())
                for (let t = 0; t < this.yt.song.getChannelCount(); t++) this.wi[t].style.marginTop = (e - 20) / 2 + "px", this.wi[t].style.marginBottom = (e - 20) / 2 + "px";
            if (this.Ci != this.yt.song.modChannelCount || this.xi != this.yt.song.getChannelCount())
                for (let t = 0; t < this.yt.song.getChannelCount(); t++) t < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount ? this.wi[t].children[0].classList.remove("modMute") : this.wi[t].children[0].classList.add("modMute");
            if (this.Ci != this.yt.song.modChannelCount || this.Mi != this.yt.song.pitchChannelCount || this.Ei != this.yt.song.noiseChannelCount) {
                for (let t = 0; t < this.yt.song.getChannelCount(); t++)
                    if (t < this.yt.song.pitchChannelCount) {
                        let e = t + 1;
                        this.ki[t].textContent = e + "", this.ki[t].style.fontSize = e >= 10 ? "xx-small" : "inherit"
                    } else if (t < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount) {
                    let e = t - this.yt.song.pitchChannelCount + 1;
                    this.ki[t].textContent = e + "", this.ki[t].style.fontSize = e >= 10 ? "xx-small" : "inherit"
                } else {
                    let e = t - this.yt.song.pitchChannelCount - this.yt.song.noiseChannelCount + 1;
                    this.ki[t].textContent = e + "", this.ki[t].style.fontSize = e >= 10 ? "xx-small" : "inherit"
                }
                this.Mi = this.yt.song.pitchChannelCount, this.Ei = this.yt.song.noiseChannelCount, this.Ci = this.yt.song.modChannelCount
            }
            this.Si == e && this.xi == this.yt.song.getChannelCount() || (this.Si = e, this.xi = this.yt.song.getChannelCount(), this.ei = t.Config.barEditorHeight + this.yt.song.getChannelCount() * e, this.container.style.height = this.ei + "px")
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        constructor(e, i, s, n) {
            this.Pi = i, this.Ni = s, this.Ti = document.createTextNode("1"), this.Fi = t.SVG.text({
                "font-family": "sans-serif",
                "font-size": 20,
                "text-anchor": "middle",
                "font-weight": "bold",
                fill: "red"
            }, this.Ti), this.Bi = t.SVG.rect({
                x: 1,
                y: 1
            }), this.container = t.SVG.svg(this.Bi, this.Fi), this.zi = 1, this.Ri = !0, this.Li = !1, this.Ai = "", this.Bi.setAttribute("fill", t.ColorConfig.uiWidgetBackground), this.Fi.setAttribute("fill", n)
        }
        setSize(e, i) {
            this.container.setAttribute("x", "" + this.Pi * e), this.container.setAttribute("y", "" + (t.Config.barEditorHeight + this.Ni * i)), this.Bi.setAttribute("width", "" + (e - 2)), this.Bi.setAttribute("height", "" + (i - 2)), this.Fi.setAttribute("x", "" + e / 2), this.Fi.setAttribute("y", "" + Math.round(i / 2 + 7))
        }
        setIndex(e, i, s, n, o, r) {
            this.zi != e && (this.Li || 0 == e == (0 == this.zi) || (0 == e ? this.Bi.setAttribute("fill", "none") : o ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgNoiseDim : t.ColorConfig.trackEditorBgNoise) : r ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgModDim : t.ColorConfig.trackEditorBgMod) : this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgPitchDim : t.ColorConfig.trackEditorBgPitch)), e >= 100 ? (this.Fi.setAttribute("font-size", "16"), this.Fi.setAttribute("style", "transform: translate(0px, -1.5px);")) : (this.Fi.setAttribute("font-size", "20"), this.Fi.setAttribute("style", "transform: translate(0px, 0px);")), this.zi = e, this.Ti.data = "" + e), this.Ri == i && this.Ai == n || (this.Ri = i, s ? this.Fi.setAttribute("fill", t.ColorConfig.invertedText) : (this.Fi.setAttribute("fill", n), 0 == this.zi ? this.Bi.setAttribute("fill", t.ColorConfig.editorBackground) : o ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgNoiseDim : t.ColorConfig.trackEditorBgNoise) : r ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgModDim : t.ColorConfig.trackEditorBgMod) : this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgPitchDim : t.ColorConfig.trackEditorBgPitch))), this.Li == s && this.Ai == n || (this.Li = s, s ? (this.Bi.setAttribute("fill", n), this.Fi.setAttribute("fill", t.ColorConfig.invertedText)) : (this.Fi.setAttribute("fill", n), 0 == this.zi ? this.Bi.setAttribute("fill", t.ColorConfig.editorBackground) : o ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgNoiseDim : t.ColorConfig.trackEditorBgNoise) : r ? this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgModDim : t.ColorConfig.trackEditorBgMod) : this.Bi.setAttribute("fill", i ? t.ColorConfig.trackEditorBgPitchDim : t.ColorConfig.trackEditorBgPitch))), this.Ai = n
        }
    }
    t.TrackEditor = class {
        constructor(e, i) {
            this.yt = e, this.Hi = i, this.$i = t.HTML.select({
                style: "width: 32px; height: " + t.Config.barEditorHeight + "px; position:absolute; opacity:0"
            }, t.HTML.option({
                value: "barBefore"
            }, "Insert Bar Before"), t.HTML.option({
                value: "barAfter"
            }, "Insert Bar After"), t.HTML.option({
                value: "deleteBar"
            }, "Delete This Bar")), this.Di = t.SVG.g(), this.Ii = t.SVG.rect({
                fill: t.ColorConfig.playhead,
                x: 0,
                y: 0,
                width: 4,
                height: 128
            }), this._i = t.SVG.rect({
                fill: "none",
                stroke: t.ColorConfig.hoverPreview,
                "stroke-width": 2,
                "pointer-events": "none",
                x: 1,
                y: 1,
                width: 30,
                height: 30
            }), this.Oi = t.SVG.path({
                fill: t.ColorConfig.invertedText,
                stroke: t.ColorConfig.invertedText,
                "stroke-width": 1,
                "pointer-events": "none"
            }), this.Ui = t.SVG.path({
                fill: t.ColorConfig.invertedText,
                stroke: t.ColorConfig.invertedText,
                "stroke-width": 1,
                "pointer-events": "none"
            }), this.Vi = t.SVG.path({
                fill: t.ColorConfig.uiWidgetBackground,
                stroke: t.ColorConfig.uiWidgetBackground,
                "stroke-width": 1,
                "pointer-events": "none"
            }), this.ji = t.SVG.rect({
                class: "dashed-line dash-move",
                fill: t.ColorConfig.boxSelectionFill,
                stroke: t.ColorConfig.hoverPreview,
                "stroke-width": 2,
                "stroke-dasharray": "5, 3",
                "fill-opacity": "0.4",
                "pointer-events": "none",
                visibility: "hidden",
                x: 1,
                y: 1,
                width: 62,
                height: 62
            }), this.ee = t.SVG.svg({
                style: `background-color: ${t.ColorConfig.editorBackground}; position: absolute;`,
                height: 128
            }, this.Di, this.Vi, this.ji, this._i, this.Oi, this.Ui, this.Ii), this.Wi = t.HTML.select({
                className: "trackSelectBox",
                style: "background: none; border: none; appearance: none; border-radius: initial; box-shadow: none; color: transparent; position: absolute; touch-action: none;"
            }), this.container = t.HTML.div({
                class: "noSelection",
                style: "height: 128px; position: relative; overflow:hidden;"
            }, this.ee, this.Wi, this.$i), this.Gi = [], this.fe = 0, this.ue = 0, this.Ki = 0, this.Ji = 0, this.Yi = 0, this.Zi = 0, this.ye = !1, this.Qi = !1, this.be = !1, this.Xi = "", this.ts = "", this.es = 32, this.ss = 32, this.ns = 0, this.os = 0, this.rs = 0, this.hs = 0, this.xi = 0, this.as = 0, this.ls = 0, this.cs = -1, this.ds = -1, this.Si = -1, this.ms = t.isMobile, this.fs = null, this.us = 0, this.ps = 0, this.ys = (t => {
                this.us = Math.floor(Math.min(this.yt.song.barCount - 1, Math.max(0, this.fe / this.es)))
            }), this.bs = (t => {
                var e = "barBefore" == this.$i.value ? 0 : 1;
                "barBefore" == this.$i.value || "barAfter" == this.$i.value ? (this.yt.bar = this.us - 1 + e, this.gs(), this.insertBars(), this.yt.synth.playhead >= this.us + e && this.yt.synth.playhead++) : "deleteBar" == this.$i.value && (this.yt.bar = this.us, this.gs(), this.deleteBars(), this.yt.synth.playhead > this.us && this.yt.synth.playhead--), this.$i.selectedIndex = -1
            }), this.vs = (() => {
                this.ws(this.Wi.selectedIndex)
            }), this.Ze = (t => {
                const e = this.es * this.yt.synth.playhead - 2;
                this.cs != e && (this.cs = e, this.Ii.setAttribute("x", "" + e)), window.requestAnimationFrame(this.Ze)
            }), this.ks = (t => {
                this.Qi = !0, this.be = !0, this.xs(t), this.Ki = this.Yi, this.Ji = this.Zi
            }), this.Ms = (t => {
                this.xs(t), this.Ki == this.Yi && this.Ji == this.Zi || t.preventDefault(), this.Qi && this.Es(), this.ci()
            }), this.Cs = (t => {
                this.Qi = !1, this.be = !1, this.ci()
            }), this.Qe = (t => {
                this.ye || (this.ye = !0)
            }), this.Xe = (t => {
                this.ye && (this.ye = !1)
            }), this.ti = (e => {
                e.preventDefault(), this.Qi = !0, this.Ss(e), this.Ki = this.Yi, this.Ji = this.Zi, this.ue >= t.Config.barEditorHeight && (e.shiftKey ? (this.be = !0, this.rs = this.Yi, this.hs = this.Zi, this.qs()) : (this.be = !1, this.yt.channel == this.Zi && this.yt.bar == this.Yi || (this.Ps(this.Zi, this.Yi), this.be = !0), this.gs()))
            }), this.ni = (t => {
                this.Ss(t), this.Qi && (this.Ki == this.Yi && this.Ji == this.Zi || (this.be = !0), this.Es()), this.ci()
            }), this.Ns = (e => {
                if (this.Qi && !this.be && this.yt.channel == this.Zi && this.yt.bar == this.Yi) {
                    const e = (this.ue - t.Config.barEditorHeight) % this.ss < this.ss / 2,
                        i = this.yt.song.patternsPerChannel;
                    this.ws((this.yt.song.channels[this.Zi].bars[this.Yi] + (e ? 1 : i)) % (i + 1))
                }
                this.Qi = !1, this.be = !1, this.ci()
            }), window.requestAnimationFrame(this.Ze), this.ee.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.Ns), this.ee.addEventListener("mouseover", this.Qe), this.ee.addEventListener("mouseout", this.Xe), this.Wi.addEventListener("change", this.vs), this.Wi.addEventListener("touchstart", this.ks), this.Wi.addEventListener("touchmove", this.Ms), this.Wi.addEventListener("touchend", this.Cs), this.Wi.addEventListener("touchcancel", this.Cs);
            let s = !1;
            document.addEventListener("mousedown", () => {
                s || (this.ms = !1, this.ci()), s = !0
            }, !0), document.addEventListener("touchstart", () => {
                s || (this.ms = !0, this.ci()), s = !0
            }, !0), this.$i.selectedIndex = -1, this.$i.addEventListener("change", this.bs), this.$i.addEventListener("mousedown", this.ys)
        }
        qs() {
            this.yt.notifier.changed(), this.Xi = "", this.yt.forgetLastChange()
        }
        get Ts() {
            return Math.min(this.ns, this.rs)
        }
        get Fs() {
            return Math.min(this.os, this.hs)
        }
        get Bs() {
            return Math.abs(this.ns - this.rs) + 1
        }
        get zs() {
            return Math.abs(this.os - this.hs) + 1
        }
        Rs() {
            this.yt.barScrollPos = Math.min(this.yt.barScrollPos, this.rs), this.yt.barScrollPos = Math.max(this.yt.barScrollPos, this.rs - (this.yt.trackVisibleBars - 1))
        }
        Ps(e, i) {
            new t.ChangeChannelBar(this.yt, e, i), this.qs()
        }
        ws(e) {
            this.yt.record(new t.ChangePatternNumbers(this.yt, e, this.Ts, this.Fs, this.Bs, this.zs))
        }
        onKeyPressed(t) {
            switch (t.keyCode) {
                case 27:
                    this.gs(), this.qs(), t.preventDefault();
                    break;
                case 38:
                    t.shiftKey ? (this.hs = Math.max(0, this.hs - 1), this.qs()) : (this.Ps((this.yt.channel - 1 + this.yt.song.getChannelCount()) % this.yt.song.getChannelCount(), this.yt.bar), this.gs()), t.preventDefault();
                    break;
                case 40:
                    t.shiftKey ? (this.hs = Math.min(this.yt.song.getChannelCount() - 1, this.hs + 1), this.qs()) : (this.Ps((this.yt.channel + 1) % this.yt.song.getChannelCount(), this.yt.bar), this.gs()), t.preventDefault();
                    break;
                case 37:
                    t.shiftKey ? (this.rs = Math.max(0, this.rs - 1), this.Rs(), this.qs()) : (this.Ps(this.yt.channel, (this.yt.bar + this.yt.song.barCount - 1) % this.yt.song.barCount), this.gs()), t.preventDefault();
                    break;
                case 39:
                    t.shiftKey ? (this.rs = Math.min(this.yt.song.barCount - 1, this.rs + 1), this.Rs(), this.qs()) : (this.Ps(this.yt.channel, (this.yt.bar + 1) % this.yt.song.barCount), this.gs()), t.preventDefault();
                    break;
                case 46:
                    this.Xi = "", this.Ls("0", !1);
                    break;
                case 48:
                    this.Ls("0", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 49:
                    this.Ls("1", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 50:
                    this.Ls("2", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 51:
                    this.Ls("3", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 52:
                    this.Ls("4", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 53:
                    this.Ls("5", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 54:
                    this.Ls("6", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 55:
                    this.Ls("7", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 56:
                    this.Ls("8", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                case 57:
                    this.Ls("9", t.shiftKey || t.ctrlKey), t.preventDefault();
                    break;
                default:
                    this.Xi = "", this.ts = ""
            }
        }
        insertBars() {
            this.yt.record(new t.ChangeInsertBars(this.yt, this.Ts + this.Bs, this.Bs), 2);
            const e = this.Bs;
            this.ns += e, this.rs += e
        }
        deleteBars() {
            this.yt.record(new t.ChangeDeleteBars(this.yt, this.Ts, this.Bs), 2);
            const e = this.Bs;
            this.ns = Math.max(0, this.ns - e), this.rs = Math.max(0, this.rs - e)
        }* As() {
            for (let t = this.Fs; t < this.Fs + this.zs; t++) yield t
        }* Hs() {
            for (let t = this.Ts; t < this.Ts + this.Bs; t++) yield t
        }* $s() {
            for (let t = 0; t < this.yt.song.barCount; t++)(t < this.Ts || t >= this.Ts + this.Bs) && (yield t)
        }* Ds(t) {
            const e = {};
            for (const i of this.Hs()) {
                const s = this.yt.song.channels[t].bars[i];
                if (0 == s) continue;
                if (e[String(s)]) continue;
                e[String(s)] = !0;
                const n = this.yt.song.getPattern(t, i);
                if (null == n) throw new Error;
                yield n
            }
        }
        Is(t, e) {
            for (let i = 0; i < this.yt.song.barCount; i++)
                if (this.yt.song.channels[t].bars[i] == e) return !1;
            return !0
        }
        copy() {
            const t = [];
            for (const e of this.As()) {
                const i = {},
                    s = [];
                for (const t of this.Hs()) {
                    const n = this.yt.song.channels[e].bars[t];
                    if (s.push(n), void 0 == i[String(n)]) {
                        const s = this.yt.song.getPattern(e, t);
                        let o = 0,
                            r = [];
                        null != s && (o = s.instrument, r = s.notes), i[String(n)] = {
                            instrument: o,
                            notes: r
                        }
                    }
                }
                const n = {
                    isNoise: this.yt.song.getChannelIsNoise(e),
                    isMod: this.yt.song.getChannelIsMod(e),
                    patterns: i,
                    bars: s
                };
                t.push(n)
            }
            const e = {
                beatsPerBar: this.yt.song.beatsPerBar,
                channels: t
            };
            window.localStorage.setItem("selectionCopy", JSON.stringify(e))
        }
        pasteNotes() {
            const e = JSON.parse(String(window.localStorage.getItem("selectionCopy")));
            if (null == e) return;
            const i = e.channels || [],
                s = e.beatsPerBar >>> 0,
                n = new t.ChangeGroup,
                o = this.Bs > 1 || this.zs > 1,
                r = o ? this.zs : Math.min(i.length, this.yt.song.getChannelCount() - this.Fs);
            for (let e = 0; e < r; e++) {
                const r = i[e % i.length],
                    h = this.Fs + e,
                    a = !!r.isNoise,
                    l = !!r.isMod,
                    c = r.patterns || {},
                    d = r.bars || [];
                if (0 == d.length) continue;
                if (a != this.yt.song.getChannelIsNoise(h)) continue;
                if (l != this.yt.song.getChannelIsMod(h)) continue;
                const m = o ? this.Bs : Math.min(d.length, this.yt.song.barCount - this.Ts);
                if (o || 1 != d.length || 1 != i.length) {
                    for (let e = 0; e < m; e++) {
                        const i = this.Ts + e,
                            s = this.yt.song.channels[h].bars[i];
                        0 != s && (n.append(new t.ChangePatternNumbers(this.yt, 0, i, h, 1, 1)), this.Is(h, s) && (this.yt.song.channels[h].patterns[s - 1].notes.length = 0))
                    }
                    const e = {};
                    for (let i = 0; i < m; i++) {
                        const o = d[i % d.length] >>> 0;
                        if (0 == o) continue;
                        const r = this.Ts + i;
                        if (void 0 != e[String(o)]) n.append(new t.ChangePatternNumbers(this.yt, e[String(o)], r, h, 1, 1));
                        else {
                            const i = c[String(o)],
                                a = Math.min(i.instrument >>> 0, this.yt.song.instrumentsPerChannel - 1),
                                l = this.yt.song.channels[h].patterns[o - 1];
                            if (void 0 != l && t.comparePatternNotes(i.notes, l.notes) && a == l.instrument) n.append(new t.ChangePatternNumbers(this.yt, o, r, h, 1, 1));
                            else {
                                void 0 != l && this.Is(h, o) ? n.append(new t.ChangePatternNumbers(this.yt, o, r, h, 1, 1)) : n.append(new t.ChangeEnsurePatternExists(this.yt, h, r));
                                const e = this.yt.song.getPattern(h, r);
                                if (null == e) throw new Error;
                                n.append(new t.ChangePaste(this.yt, e, i.notes, s)), n.append(new t.ChangePatternInstrument(this.yt, a, e))
                            }
                            e[String(o)] = this.yt.song.channels[h].bars[r]
                        }
                    }
                } else {
                    const e = d[0] >>> 0,
                        i = this.Ts,
                        o = this.yt.song.channels[h].bars[i];
                    if (0 == e && 0 == o) continue;
                    const r = c[String(e)],
                        a = Math.min(r.instrument >>> 0, this.yt.song.instrumentsPerChannel - 1);
                    if (0 == o) {
                        const s = this.yt.song.channels[h].patterns[e - 1];
                        void 0 != s && (t.comparePatternNotes(r.notes, s.notes) && a == s.instrument || this.Is(h, e)) ? n.append(new t.ChangePatternNumbers(this.yt, e, i, h, 1, 1)) : n.append(new t.ChangeEnsurePatternExists(this.yt, h, i))
                    }
                    const l = this.yt.song.getPattern(h, i);
                    if (null == l) throw new Error;
                    n.append(new t.ChangePaste(this.yt, l, r.notes, s)), n.append(new t.ChangePatternInstrument(this.yt, a, l))
                }
            }
            this.yt.record(n)
        }
        pasteNumbers() {
            const e = JSON.parse(String(window.localStorage.getItem("selectionCopy")));
            if (null == e) return;
            const i = e.channels || [],
                s = new t.ChangeGroup,
                n = this.Bs > 1 || this.zs > 1,
                o = n ? this.zs : Math.min(i.length, this.yt.song.getChannelCount() - this.Fs);
            for (let e = 0; e < o; e++) {
                const o = i[e % i.length],
                    r = this.Fs + e,
                    h = o.bars || [];
                if (0 == h.length) continue;
                const a = n ? this.Bs : Math.min(h.length, this.yt.song.barCount - this.Ts);
                for (let e = 0; e < a; e++) {
                    const i = h[e % h.length] >>> 0,
                        n = this.Ts + e;
                    i > this.yt.song.patternsPerChannel && s.append(new t.ChangePatternsPerChannel(this.yt, i)), s.append(new t.ChangePatternNumbers(this.yt, i, n, r, 1, 1))
                }
            }
            this.yt.record(s)
        }
        selectAll() {
            0 == this.Ts && 0 == this.Fs && this.Bs == this.yt.song.barCount && this.zs == this.yt.song.getChannelCount() ? this.gs() : (this.ns = 0, this.os = 0, this.rs = this.yt.song.barCount - 1, this.hs = this.yt.song.getChannelCount() - 1), this.qs()
        }
        selectChannel() {
            0 == this.Ts && this.Bs == this.yt.song.barCount ? this.ns = this.rs = this.yt.bar : (this.ns = 0, this.rs = this.yt.song.barCount - 1), this.qs()
        }
        duplicatePatterns() {
            const e = new t.ChangeGroup;
            for (const i of this.As()) {
                const s = {};
                for (const n of this.Hs()) {
                    const o = this.yt.song.channels[i].bars[n];
                    if (0 != o) {
                        if (void 0 == s[String(o)]) {
                            let r = !1;
                            for (const t of this.$s())
                                if (this.yt.song.channels[i].bars[t] == o) {
                                    r = !0;
                                    break
                                } if (r) {
                                const r = this.yt.song.getPattern(i, n);
                                e.append(new t.ChangePatternNumbers(this.yt, 0, n, i, 1, 1)), e.append(new t.ChangeEnsurePatternExists(this.yt, i, n));
                                const h = this.yt.song.getPattern(i, n);
                                if (null == h) throw new Error;
                                e.append(new t.ChangePaste(this.yt, h, r.notes, this.yt.song.beatsPerBar)), e.append(new t.ChangePatternInstrument(this.yt, r.instrument, h)), s[String(o)] = this.yt.song.channels[i].bars[n]
                            } else s[String(o)] = o
                        }
                        e.append(new t.ChangePatternNumbers(this.yt, s[String(o)], n, i, 1, 1))
                    }
                }
            }
            this.yt.record(e)
        }
        muteChannels(t) {
            if (t) {
                let t = !1;
                for (let e = 0; e < this.yt.song.channels.length; e++)
                    if (this.yt.song.channels[e].muted) {
                        t = !0;
                        break
                    } for (let e = 0; e < this.yt.song.channels.length; e++) this.yt.song.channels[e].muted = !t
            } else {
                let t = !1;
                for (const e of this.As())
                    if (!this.yt.song.channels[e].muted) {
                        t = !0;
                        break
                    } for (const e of this.As()) this.yt.song.channels[e].muted = t
            }
            this.yt.notifier.changed()
        }
        soloChannels() {
            let t = !0;
            for (let e = 0; e < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; e++) {
                const i = e < this.Fs || e >= this.Fs + this.zs;
                if (this.yt.song.channels[e].muted != i) {
                    t = !1;
                    break
                }
            }
            if (t)
                for (let t = 0; t < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; t++) this.yt.song.channels[t].muted = !1;
            else
                for (let t = 0; t < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; t++) this.yt.song.channels[t].muted = t < this.Fs || t >= this.Fs + this.zs;
            this.yt.notifier.changed()
        }
        forceRhythm() {
            const e = new t.ChangeGroup;
            for (const i of this.As())
                for (const s of this.Ds(i)) e.append(new t.ChangePatternRhythm(this.yt, s));
            this.yt.record(e)
        }
        forceScale() {
            const e = new t.ChangeGroup,
                i = [!0, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1];
            for (const e of this.As())
                if (!this.yt.song.getChannelIsNoise(e) && !this.yt.song.getChannelIsMod(e))
                    for (const s of this.Ds(e)) t.unionOfUsedNotes(s, i);
            const s = t.generateScaleMap(i, this.yt.song.scale);
            for (const i of this.As())
                if (!this.yt.song.getChannelIsNoise(i) && !this.yt.song.getChannelIsMod(i))
                    for (const n of this.Ds(i)) e.append(new t.ChangePatternScale(this.yt, n, s));
            this.yt.record(e)
        }
        transpose(e, i) {
            const s = this.yt.lastChangeWas(this.fs),
                n = new t.ChangeGroup;
            this.fs = n;
            for (const s of this.As())
                for (const o of this.Ds(s)) n.append(new t.ChangeTranspose(this.yt, s, o, e, !1, i));
            this.yt.record(n, s ? 0 : 1)
        }
        setInstrument(e) {
            const i = new t.ChangeGroup;
            for (const s of this.As())
                for (const n of this.Ds(s)) i.append(new t.ChangePatternInstrument(this.yt, e, n));
            this.yt.record(i)
        }
        setModChannel(e, i) {
            this.yt.record(new t.ChangeModChannel(this.yt, e, i))
        }
        setModInstrument(e, i) {
            this.yt.record(new t.ChangeModInstrument(this.yt, e, i))
        }
        setModSetting(e, i) {
            this.yt.record(new t.ChangeModSetting(this.yt, e, i))
        }
        Ls(t, e) {
            if (e) {
                this.ts += t;
                var i = parseInt(this.ts);
                if (0 != i && i <= this.yt.song.instrumentsPerChannel) return void this.Hi.changeInstrument(i - 1);
                if (this.ts = t, 0 != (i = parseInt(this.ts)) && i <= this.yt.song.instrumentsPerChannel) return void this.Hi.changeInstrument(i - 1);
                this.ts = ""
            } else {
                this.Xi += t;
                let e = parseInt(this.Xi);
                if (e <= this.yt.song.patternsPerChannel) return void this.ws(e);
                if (this.Xi = t, (e = parseInt(this.Xi)) <= this.yt.song.patternsPerChannel) return void this.ws(e);
                this.Xi = ""
            }
        }
        gs() {
            this.ns = this.rs = this.yt.bar, this.os = this.hs = this.yt.channel
        }
        Es() {
            this.rs = this.Yi, this.hs = this.Zi, this.qs()
        }
        xs(e) {
            const i = this.ee.getBoundingClientRect();
            this.fe = e.touches[0].clientX - i.left, this.ue = e.touches[0].clientY - i.top, isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.Yi = Math.floor(Math.min(this.yt.song.barCount - 1, Math.max(0, this.fe / this.es))), this.Zi = Math.floor(Math.min(this.yt.song.getChannelCount() - 1, Math.max(0, (this.ue - t.Config.barEditorHeight) / this.ss)))
        }
        Ss(e) {
            const i = this.ee.getBoundingClientRect();
            this.fe = (e.clientX || e.pageX) - i.left, this.ue = (e.clientY || e.pageY) - i.top, this.Yi = Math.floor(Math.min(this.yt.song.barCount - 1, Math.max(0, this.fe / this.es))), this.Zi = Math.floor(Math.min(this.yt.song.getChannelCount() - 1, Math.max(0, (this.ue - t.Config.barEditorHeight) / this.ss)))
        }
        ci() {
            let e = this.Zi,
                i = this.Yi;
            this.ms && (i = this.yt.bar, e = this.yt.channel);
            const s = i == this.yt.bar && e == this.yt.channel,
                n = this.ue >= t.Config.barEditorHeight;
            if (this.be && this.Ki != this.Yi) {
                var o = Date.now();
                o - this.ps >= 50 && (i > this.yt.barScrollPos + this.yt.trackVisibleBars - 1 && this.yt.barScrollPos < this.yt.song.barCount - this.yt.trackVisibleBars && this.Hi.changeBarScrollPos(1), i < this.yt.barScrollPos && this.yt.barScrollPos > 0 && this.Hi.changeBarScrollPos(-1), this.ps = o)
            }
            if (this.ye && !this.Qi && !s && n ? (this._i.setAttribute("x", "" + (1 + this.es * i)), this._i.setAttribute("y", "" + (1 + t.Config.barEditorHeight + this.ss * e)), this._i.setAttribute("height", "" + (this.ss - 2)), this._i.setAttribute("width", "" + (this.es - 2)), this._i.style.visibility = "visible") : (this.ye || this.fe >= 32 * i && this.fe < 32 * i + 32 && this.ue > 0) && !n ? (this._i.setAttribute("x", "" + (1 + this.es * i)), this._i.setAttribute("y", "1"), this._i.setAttribute("height", "" + (t.Config.barEditorHeight - 3)), this._i.style.visibility = "visible") : this._i.style.visibility = "hidden", (this.ye || this.ms) && s && n) {
                const s = (this.ue - t.Config.barEditorHeight) % this.ss < this.ss / 2,
                    n = this.es * (i + .8),
                    o = t.Config.barEditorHeight + this.ss * (e + .5),
                    r = .1 * this.ss,
                    h = .4 * this.ss,
                    a = .175 * this.ss;
                this.Oi.setAttribute("fill", s && !this.ms ? t.ColorConfig.hoverPreview : t.ColorConfig.invertedText), this.Ui.setAttribute("fill", s || this.ms ? t.ColorConfig.invertedText : t.ColorConfig.hoverPreview), this.Oi.setAttribute("d", `M ${n} ${o-h} L ${n+a} ${o-r} L ${n-a} ${o-r} z`), this.Ui.setAttribute("d", `M ${n} ${o+h} L ${n+a} ${o+r} L ${n-a} ${o+r} z`), this.Oi.style.visibility = "visible", this.Ui.style.visibility = "visible"
            } else this.Oi.style.visibility = "hidden", this.Ui.style.visibility = "hidden";
            this.ji.style.left = this.es * this.yt.bar + "px", this.ji.style.top = t.Config.barEditorHeight + this.ss * this.yt.channel + "px", this.Wi.style.left = this.es * this.yt.bar + "px", this.Wi.style.width = this.es + "px", this.Wi.style.top = t.Config.barEditorHeight + this.ss * this.yt.channel + "px", this.Wi.style.height = this.ss + "px", this.$i.style.left = this.es * i + "px", this.$i.style.top = "0px";
            const r = this.yt.song.patternsPerChannel + 1;
            for (let e = this.ls; e < r; e++) this.Wi.appendChild(t.HTML.option({
                value: e
            }, e));
            for (let t = r; t < this.ls; t++) this.Wi.removeChild(this.Wi.lastChild);
            this.ls = r;
            const h = this.yt.song.channels[this.yt.channel].bars[this.yt.bar];
            this.Wi.selectedIndex != h && (this.Wi.selectedIndex = h)
        }
        render() {
            if (this.es = this.yt.getBarWidth(), this.ss = this.yt.getChannelHeight(), this.xi != this.yt.song.getChannelCount()) {
                for (let i = this.xi; i < this.yt.song.getChannelCount(); i++) {
                    this.Gi[i] = [];
                    for (let s = 0; s < this.as; s++) {
                        const n = new e(i, s, i, t.ColorConfig.getChannelColor(this.yt.song, i).secondaryChannel);
                        n.setSize(this.es, this.ss), this.Di.appendChild(n.container), this.Gi[i][s] = n
                    }
                }
                for (let t = this.yt.song.getChannelCount(); t < this.xi; t++)
                    for (let e = 0; e < this.as; e++) this.Di.removeChild(this.Gi[t][e].container);
                this.Gi.length = this.yt.song.getChannelCount(), this.Qi = !1
            }
            if (this.as != this.yt.song.barCount || this.ds != this.es) {
                for (let i = 0; i < this.yt.song.getChannelCount(); i++) {
                    for (let s = this.as; s < this.yt.song.barCount; s++) {
                        const n = new e(i, s, i, t.ColorConfig.getChannelColor(this.yt.song, i).secondaryChannel);
                        n.setSize(this.es, this.ss), this.Di.appendChild(n.container), this.Gi[i][s] = n
                    }
                    for (let t = this.yt.song.barCount; t < this.as; t++) this.Di.removeChild(this.Gi[i][t].container);
                    this.Gi[i].length = this.yt.song.barCount
                }
                var i = "";
                for (let e = 0; e < this.yt.song.barCount; e++) {
                    var s = e * this.es + 2;
                    i += `M ${s} 1 H ${e*this.es+this.es-2} V ${t.Config.barEditorHeight-3} H ${s} V 1 Z `
                }
                this.Vi.setAttribute("d", i)
            }
            if (this.as != this.yt.song.barCount || this.ds != this.es) {
                this.as = this.yt.song.barCount;
                const t = this.es * this.yt.song.barCount;
                this.container.style.width = t + "px", this.ee.setAttribute("width", t + ""), this.Qi = !1
            }
            if (this.Si != this.ss || this.ds != this.es) {
                this.ds = this.es;
                for (let t = 0; t < this.yt.song.getChannelCount(); t++)
                    for (let e = 0; e < this.as; e++) this.Gi[t][e].setSize(this.es, this.ss);
                this.Qi = !1
            }
            if (this.Si != this.ss || this.xi != this.yt.song.getChannelCount()) {
                this.Si = this.ss, this.xi = this.yt.song.getChannelCount();
                const e = t.Config.barEditorHeight + this.yt.song.getChannelCount() * this.ss;
                this.ee.setAttribute("height", "" + e), this.Ii.setAttribute("height", "" + e), this.container.style.height = e + "px"
            }
            for (let e = 0; e < this.yt.song.getChannelCount(); e++)
                for (let i = 0; i < this.as; i++) {
                    const s = this.yt.song.getPattern(e, i),
                        n = i == this.yt.bar && e == this.yt.channel,
                        o = null == s || 0 == s.notes.length,
                        r = this.Gi[e][i];
                    if (i < this.yt.song.barCount) {
                        const s = t.ColorConfig.getChannelColor(this.yt.song, e);
                        r.setIndex(this.yt.song.channels[e].bars[i], o, n, o && !n ? s.secondaryChannel : s.primaryChannel, e >= this.yt.song.pitchChannelCount && e < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount, e >= this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount), r.container.style.visibility = "visible"
                    } else r.container.style.visibility = "hidden"
                }
            this.Wi.style.display = this.ms ? "" : "none", (!this.yt.synth.playing && (this.yt.bar < this.Ts || this.Ts + this.Bs <= this.yt.bar) || this.yt.channel < this.Fs || this.Fs + this.zs <= this.yt.channel || this.yt.song.barCount < this.Ts + this.Bs || this.yt.song.getChannelCount() < this.Fs + this.zs || 1 == this.Bs && 1 == this.zs) && this.gs(), this.Bs > 1 || this.zs > 1 ? (this.ji.setAttribute("x", String(this.es * this.Ts + 1)), this.ji.setAttribute("y", String(t.Config.barEditorHeight + this.ss * this.Fs + 1)), this.ji.setAttribute("width", String(this.es * this.Bs - 2)), this.ji.setAttribute("height", String(this.ss * this.zs - 2)), this.ji.setAttribute("visibility", "visible")) : this.ji.setAttribute("visibility", "hidden"), this.ci()
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.LoopEditor = class {
        constructor(e) {
            this.yt = e, this.ei = 20, this._s = 0, this.Os = 1, this.Us = 2, this.Vs = t.SVG.path({
                fill: "none",
                stroke: t.ColorConfig.loopAccent,
                "stroke-width": 4
            }), this.js = t.SVG.path({
                fill: t.ColorConfig.hoverPreview,
                "pointer-events": "none"
            }), this.ee = t.SVG.svg({
                style: `background-color: ${t.ColorConfig.editorBackground}; touch-action: pan-y; position: absolute;`,
                height: this.ei
            }, this.Vs, this.js), this.container = t.HTML.div({
                style: "height: 20px; position: relative; margin: 5px 0;"
            }, this.ee), this.es = 32, this.Ws = null, this.Pe = {
                startBar: -1,
                mode: -1
            }, this.fe = 0, this.Gs = 0, this.Ks = 0, this.Js = !1, this.Ys = !1, this.pe = !1, this.ye = !1, this.Zs = -1, this.Qs = -1, this.as = 0, this.ds = -1, this.Qe = (t => {
                this.ye || (this.ye = !0, this.ci())
            }), this.Xe = (t => {
                this.ye && (this.ye = !1, this.ci())
            }), this.ti = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.clientX || t.pageX) - e.left, this.li(), this.ci(), this.ni(t)
            }), this.si = (t => {
                this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = t.touches[0].clientX - e.left, this.li(), this.ci(), this.Gs = t.touches[0].clientX, this.Ks = t.touches[0].clientY, this.Ys = !1, this.Js = !1
            }), this.ni = (t => {
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.clientX || t.pageX) - e.left, this.oi()
            }), this.ri = (t => {
                if (!this.pe) return;
                const e = this.ee.getBoundingClientRect();
                this.fe = t.touches[0].clientX - e.left, this.Ys || this.Js || (Math.abs(t.touches[0].clientY - this.Ks) > 10 ? this.Js = !0 : Math.abs(t.touches[0].clientX - this.Gs) > 10 && (this.Ys = !0)), this.Ys && (this.oi(), t.preventDefault())
            }), this.Xs = (t => {
                t.preventDefault(), this.Js || (this.oi(), this.ye = !1, this.hi(t), this.ci()), this.pe = !1
            }), this.hi = (t => {
                null != this.Ws && this.yt.record(this.Ws), this.Ws = null, this.pe = !1, this.li(), this.tn()
            }), this.en = (() => {
                this.tn()
            }), this.li(), this.tn(), this.yt.notifier.watch(this.en), this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.container.addEventListener("mouseover", this.Qe), this.container.addEventListener("mouseout", this.Xe), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.Xs), this.container.addEventListener("touchcancel", this.Xs)
        }
        li() {
            const t = this.fe / this.es;
            this.Pe.startBar = t, t > this.yt.song.loopStart - .25 && t < this.yt.song.loopStart + this.yt.song.loopLength + .25 ? t - this.yt.song.loopStart < .5 * this.yt.song.loopLength ? this.Pe.mode = this._s : this.Pe.mode = this.Os : this.Pe.mode = this.Us
        } in (t) {
            let e = Math.round(t - this.yt.song.loopLength / 2),
                i = e + this.yt.song.loopLength;
            return e < 0 && (i -= e, e = 0), i > this.yt.song.barCount && (e -= i - this.yt.song.barCount, i = this.yt.song.barCount), {
                start: e,
                length: i - e
            }
        }
        oi() {
            if (this.pe) {
                let e = this.yt.song.loopStart,
                    i = this.yt.song.loopStart + this.yt.song.loopLength;
                null != this.Ws && this.yt.lastChangeWas(this.Ws) && (i = (e = this.Ws.oldStart) + this.Ws.oldLength);
                const s = this.fe / this.es;
                let n, o, r;
                if (this.Pe.mode == this._s) n = e + Math.round(s - this.Pe.startBar), o = i, n < 0 && (n = 0), n >= this.yt.song.barCount && (n = this.yt.song.barCount), n == o ? n = o - 1 : n > o && (r = n, n = o, o = r), this.Ws = new t.ChangeLoop(this.yt, e, i - e, n, o - n);
                else if (this.Pe.mode == this.Os) n = e, (o = i + Math.round(s - this.Pe.startBar)) < 0 && (o = 0), o >= this.yt.song.barCount && (o = this.yt.song.barCount), o == n ? o = n + 1 : o < n && (r = n, n = o, o = r), this.Ws = new t.ChangeLoop(this.yt, e, i - e, n, o - n);
                else if (this.Pe.mode == this.Us) {
                    const n = this.in(s);
                    this.Ws = new t.ChangeLoop(this.yt, e, i - e, n.start, n.length)
                }
                this.yt.synth.jumpIntoLoop(), this.yt.autoFollow && new t.ChangeChannelBar(this.yt, this.yt.channel, Math.floor(this.yt.synth.playhead), !0), this.yt.setProspectiveChange(this.Ws)
            } else this.li(), this.ci()
        }
        ci() {
            const t = this.ye && !this.pe;
            if (this.js.style.visibility = t ? "visible" : "hidden", t) {
                const t = this.ei / 2;
                let e = this.yt.song.loopStart * this.es,
                    i = (this.yt.song.loopStart + this.yt.song.loopLength) * this.es;
                if (this.Pe.mode == this._s) i = this.yt.song.loopStart * this.es + 2 * t;
                else if (this.Pe.mode == this.Os) e = (this.yt.song.loopStart + this.yt.song.loopLength) * this.es - 2 * t;
                else {
                    const t = this.in(this.Pe.startBar);
                    e = t.start * this.es, i = (t.start + t.length) * this.es
                }
                this.js.setAttribute("d", `M ${e+t} 4 ` + `L ${i-t} 4 ` + `A ${t-4} ${t-4} 0 0 1 ${i-t} ${this.ei-4} ` + `L ${e+t} ${this.ei-4} ` + `A ${t-4} ${t-4} 0 0 1 ${e+t} 4 ` + "z")
            }
        }
        tn() {
            this.es = this.yt.getBarWidth();
            const t = this.ei / 2,
                e = this.yt.song.loopStart * this.es,
                i = (this.yt.song.loopStart + this.yt.song.loopLength) * this.es;
            if (this.as != this.yt.song.barCount || this.ds != this.es) {
                this.as = this.yt.song.barCount, this.ds = this.es;
                const t = this.es * this.yt.song.barCount;
                this.container.style.width = t + "px", this.ee.setAttribute("width", t + "")
            }
            this.Zs == e && this.Qs == i || (this.Zs = e, this.Qs = i, this.Vs.setAttribute("d", `M ${e+t} 2 ` + `L ${i-t} 2 ` + `A ${t-2} ${t-2} 0 0 1 ${i-t} ${this.ei-2} ` + `L ${e+t} ${this.ei-2} ` + `A ${t-2} ${t-2} 0 0 1 ${e+t} 2 ` + "z")), this.ci()
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.SpectrumEditor = class {
        constructor(e, i) {
            this.yt = e, this.sn = i, this.je = 112, this.ei = 26, this.nn = t.SVG.path({
                fill: t.ColorConfig.uiWidgetBackground,
                "pointer-events": "none"
            }), this.rn = t.SVG.svg({
                "pointer-events": "none"
            }), this.hn = t.SVG.svg({
                "pointer-events": "none"
            }), this.an = t.SVG.path({
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "pointer-events": "none"
            }), this.ln = t.SVG.path({
                fill: "currentColor",
                "pointer-events": "none"
            }), this.ee = t.SVG.svg({
                style: `background-color: ${t.ColorConfig.editorBackground}; touch-action: none; cursor: crosshair;`,
                width: "100%",
                height: "100%",
                viewBox: "0 0 " + this.je + " " + this.ei,
                preserveAspectRatio: "none"
            }, this.nn, this.rn, this.hn, this.an, this.ln), this.container = t.HTML.div({
                className: "spectrum",
                style: "height: 2em;"
            }, this.ee), this.fe = 0, this.ue = 0, this.cn = 0, this.dn = 0, this.pe = !1, this.Ws = null, this.mn = "", this.Ae = !0, this.ti = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.cn = this.fn(this.fe), this.dn = this.un(this.ue), this.oi()
            }), this.si = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.cn = this.fn(this.fe), this.dn = this.un(this.ue), this.oi()
            }), this.ni = (t => {
                if (null == this.container.offsetParent) return;
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.ri = (t => {
                if (null == this.container.offsetParent) return;
                if (!this.pe) return;
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.hi = (t => {
                this.pe && (this.yt.record(this.Ws), this.Ws = null), this.pe = !1
            });
            for (let e = 0; e < t.Config.spectrumControlPoints; e += t.Config.spectrumControlPointsPerOctave) this.rn.appendChild(t.SVG.rect({
                fill: t.ColorConfig.tonic,
                x: (e + 1) * this.je / (t.Config.spectrumControlPoints + 2) - 1,
                y: 0,
                width: 2,
                height: this.ei
            }));
            for (let e = 4; e <= t.Config.spectrumControlPoints; e += t.Config.spectrumControlPointsPerOctave) this.hn.appendChild(t.SVG.rect({
                fill: t.ColorConfig.fifthNote,
                x: (e + 1) * this.je / (t.Config.spectrumControlPoints + 2) - 1,
                y: 0,
                width: 2,
                height: this.ei
            }));
            this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.hi), this.container.addEventListener("touchcancel", this.hi)
        }
        fn(e) {
            return (t.Config.spectrumControlPoints + 2) * e / this.je - 1
        }
        un(e) {
            return t.Config.spectrumMax * (1 - (e - 1) / (this.ei - 2))
        }
        oi() {
            if (this.pe) {
                const e = this.fn(this.fe),
                    i = this.un(this.ue),
                    s = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                    n = null == this.sn ? s.spectrumWave : s.drumsetSpectrumWaves[this.sn];
                if (e != this.cn) {
                    const s = (i - this.dn) / (e - this.cn),
                        o = this.dn - this.cn * s,
                        r = Math.ceil(Math.min(this.cn, e)),
                        h = Math.floor(Math.max(this.cn, e));
                    for (let e = r; e <= h; e++) e < 0 || e >= t.Config.spectrumControlPoints || (n.spectrum[e] = Math.max(0, Math.min(t.Config.spectrumMax, Math.round(e * s + o))))
                }
                n.spectrum[Math.max(0, Math.min(t.Config.spectrumControlPoints - 1, Math.round(e)))] = Math.max(0, Math.min(t.Config.spectrumMax, Math.round(i))), this.cn = e, this.dn = i, this.Ws = new t.ChangeSpectrum(this.yt, s, n), this.yt.setProspectiveChange(this.Ws)
            }
        }
        render() {
            const e = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                i = null == this.sn ? e.spectrumWave : e.drumsetSpectrumWaves[this.sn],
                s = e => (1 - e / t.Config.spectrumMax) * (this.ei - 1) + 1;
            let n = 0,
                o = "M 0 " + t.prettyNumber(this.ei) + " ";
            for (let e = 0; e < t.Config.spectrumControlPoints; e++) {
                let r = i.spectrum[e];
                o += 0 != n || 0 != r ? "L " : "M ", o += t.prettyNumber((e + 1) * this.je / (t.Config.spectrumControlPoints + 2)) + " " + t.prettyNumber(s(r)) + " ", n = r
            }
            const r = s(n);
            n > 0 && (o += "L " + (this.je - 1) + " " + t.prettyNumber(r) + " "), this.mn != o && (this.mn = o, this.an.setAttribute("d", o), this.nn.setAttribute("d", o + "L " + this.je + " " + t.prettyNumber(r) + " L " + this.je + " " + t.prettyNumber(this.ei) + " L 0 " + t.prettyNumber(this.ei) + " z "), this.ln.setAttribute("d", "M " + this.je + " " + t.prettyNumber(r) + " L " + (this.je - 4) + " " + t.prettyNumber(r - 4) + " L " + (this.je - 4) + " " + t.prettyNumber(r + 4) + " z"), this.ln.style.display = n > 0 ? "" : "none"), this.Ae != this.yt.showFifth && (this.Ae = this.yt.showFifth, this.hn.style.display = this.yt.showFifth ? "" : "none")
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.HarmonicsEditor = class {
        constructor(e) {
            this.yt = e, this.je = 112, this.ei = 26, this.rn = t.SVG.svg({
                "pointer-events": "none"
            }), this.hn = t.SVG.svg({
                "pointer-events": "none"
            }), this.an = t.SVG.path({
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "pointer-events": "none"
            }), this.pn = [], this.yn = t.SVG.svg({
                "pointer-events": "none"
            }), this.ee = t.SVG.svg({
                style: "background-color: ${ColorConfig.editorBackground}; touch-action: none; cursor: crosshair;",
                width: "100%",
                height: "100%",
                viewBox: "0 0 " + this.je + " " + this.ei,
                preserveAspectRatio: "none"
            }, this.rn, this.hn, this.an, this.yn), this.container = t.HTML.div({
                className: "harmonics",
                style: "height: 2em;"
            }, this.ee), this.fe = 0, this.ue = 0, this.cn = 0, this.dn = 0, this.pe = !1, this.Ws = null, this.mn = "", this.Ae = !0, this.ti = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.cn = this.fn(this.fe), this.dn = this.un(this.ue), this.oi()
            }), this.si = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.cn = this.fn(this.fe), this.dn = this.un(this.ue), this.oi()
            }), this.ni = (t => {
                if (null == this.container.offsetParent) return;
                const e = this.ee.getBoundingClientRect();
                this.fe = ((t.clientX || t.pageX) - e.left) * this.je / (e.right - e.left), this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.ri = (t => {
                if (null == this.container.offsetParent) return;
                if (!this.pe) return;
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.touches[0].clientX - e.left) * this.je / (e.right - e.left), this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.fe) && (this.fe = 0), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.hi = (t => {
                this.pe && (this.yt.record(this.Ws), this.Ws = null), this.pe = !1
            });
            for (let e = 1; e <= t.Config.harmonicsControlPoints; e *= 2) this.rn.appendChild(t.SVG.rect({
                fill: t.ColorConfig.tonic,
                x: (e - .5) * (this.je - 8) / (t.Config.harmonicsControlPoints - 1) - 1,
                y: 0,
                width: 2,
                height: this.ei
            }));
            for (let e = 3; e <= t.Config.harmonicsControlPoints; e *= 2) this.hn.appendChild(t.SVG.rect({
                fill: t.ColorConfig.fifthNote,
                x: (e - .5) * (this.je - 8) / (t.Config.harmonicsControlPoints - 1) - 1,
                y: 0,
                width: 2,
                height: this.ei
            }));
            for (let e = 0; e < 4; e++) {
                const i = t.SVG.rect({
                    fill: "currentColor",
                    x: this.je - 2 * e - 1,
                    y: 0,
                    width: 1,
                    height: this.ei
                });
                this.pn.push(i), this.yn.appendChild(i)
            }
            this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.hi), this.container.addEventListener("touchcancel", this.hi)
        }
        fn(e) {
            return (t.Config.harmonicsControlPoints - 1) * e / (this.je - 8) - .5
        }
        un(e) {
            return t.Config.harmonicsMax * (1 - e / this.ei)
        }
        oi() {
            if (this.pe) {
                const e = this.fn(this.fe),
                    i = this.un(this.ue),
                    s = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                    n = s.harmonicsWave;
                if (e != this.cn) {
                    const s = (i - this.dn) / (e - this.cn),
                        o = this.dn - this.cn * s,
                        r = Math.ceil(Math.min(this.cn, e)),
                        h = Math.floor(Math.max(this.cn, e));
                    for (let e = r; e <= h; e++) e < 0 || e >= t.Config.harmonicsControlPoints || (n.harmonics[e] = Math.max(0, Math.min(t.Config.harmonicsMax, Math.round(e * s + o))))
                }
                n.harmonics[Math.max(0, Math.min(t.Config.harmonicsControlPoints - 1, Math.round(e)))] = Math.max(0, Math.min(t.Config.harmonicsMax, Math.round(i))), this.cn = e, this.dn = i, this.Ws = new t.ChangeHarmonics(this.yt, s, n), this.yt.setProspectiveChange(this.Ws)
            }
        }
        render() {
            const e = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].harmonicsWave,
                i = e => (1 - e / t.Config.harmonicsMax) * this.ei;
            let s = t.prettyNumber(this.ei),
                n = "";
            for (let o = 0; o < t.Config.harmonicsControlPoints - 1; o++) {
                if (0 == e.harmonics[o]) continue;
                let r = t.prettyNumber((o + .5) * (this.je - 8) / (t.Config.harmonicsControlPoints - 1));
                n += "M " + r + " " + s + " ", n += "L " + r + " " + t.prettyNumber(i(e.harmonics[o])) + " "
            }
            const o = i(e.harmonics[t.Config.harmonicsControlPoints - 1]);
            for (let e = 0; e < 4; e++) {
                const i = this.pn[e];
                i.setAttribute("y", t.prettyNumber(o)), i.setAttribute("height", t.prettyNumber(this.ei - o))
            }
            this.mn != n && (this.mn = n, this.an.setAttribute("d", n)), this.Ae != this.yt.showFifth && (this.Ae = this.yt.showFifth, this.hn.style.display = this.yt.showFifth ? "" : "none")
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.BarScrollBar = class {
        constructor(e, i) {
            this.yt = e, this.bn = i, this.je = 512, this.ei = 20, this.Ii = t.SVG.rect("rect", {
                fill: t.ColorConfig.playhead,
                x: 0,
                y: 0,
                width: 2,
                height: this.ei
            }), this.gn = t.SVG.svg({
                "pointer-events": "none"
            }), this.vn = t.SVG.rect({
                fill: t.ColorConfig.uiWidgetBackground,
                x: 0,
                y: 2,
                width: 10,
                height: this.ei - 4
            }), this.wn = t.SVG.rect({
                fill: "none",
                stroke: t.ColorConfig.hoverPreview,
                "stroke-width": 2,
                "pointer-events": "none",
                x: 0,
                y: 1,
                width: 10,
                height: this.ei - 2
            }), this.kn = t.SVG.path({
                fill: t.ColorConfig.hoverPreview,
                "pointer-events": "none"
            }), this.xn = t.SVG.path({
                fill: t.ColorConfig.hoverPreview,
                "pointer-events": "none"
            }), this.cs = -1, this.ee = t.SVG.svg({
                style: `background-color: ${t.ColorConfig.editorBackground}; touch-action: pan-y; position: absolute;`,
                width: this.je,
                height: this.ei
            }, this.gn, this.vn, this.wn, this.kn, this.xn, this.Ii), this.container = t.HTML.div({
                className: "barScrollBar",
                style: "width: 512px; height: 20px; overflow: hidden; position: relative;"
            }, this.ee), this.fe = 0, this.pe = !1, this.ye = !1, this.Mn = !1, this.En = -1, this.Cn = -1, this.Ze = (t => {
                const e = Math.min(512, Math.max(0, this.Sn * this.yt.synth.playhead - 2));
                this.cs != e && (this.cs = e, this.Ii.setAttribute("x", "" + e)), window.requestAnimationFrame(this.Ze)
            }), this.qn = (t => {
                this.yt.barScrollPos = this.bn.scrollLeft / this.yt.getBarWidth()
            }), this.Qe = (t => {
                this.ye || (this.ye = !0, this.ci())
            }), this.Xe = (t => {
                this.ye && (this.ye = !1, this.ci())
            }), this.ti = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.clientX || t.pageX) - e.left, this.ci(), this.fe >= this.yt.barScrollPos * this.Sn && this.fe <= (this.yt.barScrollPos + this.yt.trackVisibleBars) * this.Sn && (this.Mn = !0, this.Pn = this.fe)
            }), this.si = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.fe = t.touches[0].clientX - e.left, this.ci(), this.fe >= this.yt.barScrollPos * this.Sn && this.fe <= (this.yt.barScrollPos + this.yt.trackVisibleBars) * this.Sn && (this.Mn = !0, this.Pn = this.fe)
            }), this.ni = (t => {
                const e = this.ee.getBoundingClientRect();
                this.fe = (t.clientX || t.pageX) - e.left, this.oi()
            }), this.ri = (t => {
                if (!this.pe) return;
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.fe = t.touches[0].clientX - e.left, this.oi()
            }), this.hi = (t => {
                !this.Mn && this.pe && (this.fe < (this.yt.barScrollPos + 8) * this.Sn ? (this.yt.barScrollPos > 0 && this.yt.barScrollPos--, this.yt.notifier.changed()) : (this.yt.barScrollPos < this.yt.song.barCount - this.yt.trackVisibleBars && this.yt.barScrollPos++, this.yt.notifier.changed())), this.pe = !1, this.Mn = !1, this.ci()
            });
            const s = .5 * this.ei;
            this.kn.setAttribute("d", `M 9 ${s} L 20 ${s+6} L 20 ${s-6} z`), this.xn.setAttribute("d", `M ${this.je-9} ${s} L ${this.je-20} ${s+6} L ${this.je-20} ${s-6} z`), this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.container.addEventListener("mouseover", this.Qe), this.container.addEventListener("mouseout", this.Xe), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.hi), this.container.addEventListener("touchcancel", this.hi), window.requestAnimationFrame(this.Ze), this.bn.addEventListener("scroll", this.qn, {
                capture: !1,
                passive: !0
            })
        }
        oi() {
            if (this.Mn) {
                for (; this.fe - this.Pn < .5 * -this.Sn && this.yt.barScrollPos > 0;) this.yt.barScrollPos--, this.Pn -= this.Sn, this.yt.notifier.changed();
                for (; this.fe - this.Pn > .5 * this.Sn && this.yt.barScrollPos < this.yt.song.barCount - this.yt.trackVisibleBars;) this.yt.barScrollPos++, this.Pn += this.Sn, this.yt.notifier.changed()
            }
            this.ye && this.ci()
        }
        changePos(t) {
            for (; Math.abs(t) >= 1;) t < 0 ? this.yt.barScrollPos > 0 && (this.yt.barScrollPos--, this.Pn += this.Sn, this.yt.notifier.changed()) : this.yt.barScrollPos < this.yt.song.barCount - this.yt.trackVisibleBars && (this.yt.barScrollPos++, this.Pn += this.Sn, this.yt.notifier.changed()), t += t > 0 ? -1 : 1
        }
        ci() {
            let t = !1,
                e = !1,
                i = !1;
            this.ye && !this.pe && (this.fe < this.yt.barScrollPos * this.Sn ? t = !0 : this.fe > (this.yt.barScrollPos + this.yt.trackVisibleBars) * this.Sn ? e = !0 : i = !0), this.kn.style.visibility = t ? "visible" : "hidden", this.xn.style.visibility = e ? "visible" : "hidden", this.wn.style.visibility = i ? "visible" : "hidden"
        }
        render() {
            this.Sn = (this.je - 1) / Math.max(this.yt.trackVisibleBars, this.yt.song.barCount);
            const e = this.En != this.yt.song.barCount;
            if (e) {
                for (this.En = this.yt.song.barCount; this.gn.firstChild;) this.gn.removeChild(this.gn.firstChild);
                for (let e = 0; e <= this.yt.song.barCount; e++) {
                    const i = e % 16 == 0 ? 0 : e % 4 == 0 ? this.ei / 8 : this.ei / 3;
                    this.gn.appendChild(t.SVG.rect({
                        fill: t.ColorConfig.uiWidgetBackground,
                        x: e * this.Sn - 1,
                        y: i,
                        width: 2,
                        height: this.ei - 2 * i
                    }))
                }
            }(e || this.Cn != this.yt.barScrollPos) && (this.Cn = this.yt.barScrollPos, this.vn.setAttribute("x", "" + this.Sn * this.yt.barScrollPos), this.vn.setAttribute("width", "" + this.Sn * this.yt.trackVisibleBars), this.wn.setAttribute("x", "" + this.Sn * this.yt.barScrollPos), this.wn.setAttribute("width", "" + this.Sn * this.yt.trackVisibleBars)), this.ci(), this.bn.scrollLeft = this.yt.barScrollPos * this.yt.getBarWidth()
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.OctaveScrollBar = class {
        constructor(e, i) {
            this.yt = e, this.Nn = i, this.je = 20, this.ei = 481, this.Tn = 4, this.Fn = t.Config.pitchOctaves, this.Bn = (this.ei - this.Tn) / this.Fn, this.zn = this.Bn * this.yt.windowOctaves + this.Tn, this.vn = t.SVG.rect({
                fill: t.ColorConfig.uiWidgetBackground,
                x: 2,
                y: 0,
                width: this.je - 4,
                height: this.zn
            }), this.wn = t.SVG.rect({
                fill: "none",
                stroke: t.ColorConfig.hoverPreview,
                "stroke-width": 2,
                "pointer-events": "none",
                x: 1,
                y: 0,
                width: this.je - 2,
                height: this.zn
            }), this.Oi = t.SVG.path({
                fill: t.ColorConfig.hoverPreview,
                "pointer-events": "none"
            }), this.Ui = t.SVG.path({
                fill: t.ColorConfig.hoverPreview,
                "pointer-events": "none"
            }), this.ee = t.SVG.svg({
                style: "background-color: ${ColorConfig.editorBackground}; touch-action: pan-x; position: absolute;",
                width: this.je,
                height: "100%",
                viewBox: "0 0 20 " + this.ei,
                preserveAspectRatio: "none"
            }), this.container = t.HTML.div({
                id: "octaveScrollBarContainer",
                style: "width: 20px; height: 100%; overflow: hidden; position: relative; flex-shrink: 0;"
            }, this.ee), this.ue = 0, this.pe = !1, this.ye = !1, this.Mn = !1, this.Rn = -1, this.Ln = -1, this.Ws = null, this.Qe = (t => {
                this.ye || (this.ye = !0, this.ci())
            }), this.Xe = (t => {
                this.ye && (this.ye = !1, this.ci())
            }), this.ti = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.yt.song.getChannelIsNoise(this.yt.channel) || this.yt.song.getChannelIsMod(this.yt.channel) || (this.ci(), this.ue >= this.An - this.zn && this.ue <= this.An && (this.Mn = !0, this.Ws = null, this.Pn = this.ue))
            }), this.si = (t => {
                t.preventDefault(), this.pe = !0;
                const e = this.ee.getBoundingClientRect();
                this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.yt.song.getChannelIsNoise(this.yt.channel) || this.yt.song.getChannelIsMod(this.yt.channel) || (this.ci(), this.ue >= this.An - this.zn && this.ue <= this.An && (this.Mn = !0, this.Ws = null, this.Pn = this.ue))
            }), this.ni = (t => {
                const e = this.ee.getBoundingClientRect();
                this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.ri = (t => {
                if (!this.pe) return;
                t.preventDefault();
                const e = this.ee.getBoundingClientRect();
                this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.oi()
            }), this.hi = (e => {
                if (!this.yt.song.getChannelIsNoise(this.yt.channel) && !this.yt.song.getChannelIsMod(this.yt.channel) && this.pe)
                    if (this.Mn) null != this.Ws && this.yt.record(this.Ws);
                    else {
                        const e = this.yt.lastChangeWas(this.Ws),
                            i = e ? this.Ws.oldValue : this.yt.song.channels[this.yt.channel].octave,
                            s = this.yt.song.channels[this.yt.channel].octave;
                        this.ue < this.An - .5 * this.zn ? s < this.yt.scrollableOctaves && (this.Ws = new t.ChangeOctave(this.yt, i, s + 1), this.yt.record(this.Ws, e ? 0 : 1)) : s > 0 && (this.Ws = new t.ChangeOctave(this.yt, i, s - 1), this.yt.record(this.Ws, e ? 0 : 1))
                    } this.pe = !1, this.Mn = !1, this.ci()
            }), this.en = (() => {
                this.An = this.ei - this.Bn * this.yt.song.channels[this.yt.channel].octave, this.tn()
            }), this.yt.notifier.watch(this.en), this.en(), this.ee.appendChild(this.vn);
            for (let e = 0; e <= this.Fn; e++) this.ee.appendChild(t.SVG.rect({
                fill: t.ColorConfig.tonic,
                x: 0,
                y: e * this.Bn,
                width: this.je,
                height: this.Tn
            }));
            this.ee.appendChild(this.wn), this.ee.appendChild(this.Oi), this.ee.appendChild(this.Ui);
            const s = .5 * this.je;
            this.Oi.setAttribute("d", `M ${s} 9 L ${s+6} 20 L ${s-6} 20 z`), this.Ui.setAttribute("d", `M ${s} ${this.ei-9} L ${s+6} ${this.ei-20} L ${s-6} ${this.ei-20} z`), this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.hi), this.container.addEventListener("mouseover", this.Qe), this.container.addEventListener("mouseout", this.Xe), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.hi), this.container.addEventListener("touchcancel", this.hi)
        }
        oi() {
            if (!this.yt.song.getChannelIsNoise(this.yt.channel) && !this.yt.song.getChannelIsMod(this.yt.channel)) {
                if (this.Mn) {
                    const e = this.yt.song.channels[this.yt.channel].octave,
                        i = this.yt.lastChangeWas(this.Ws) ? this.Ws.oldValue : e;
                    let s = e;
                    for (; this.ue - this.Pn < .5 * -this.Bn && s < this.yt.scrollableOctaves;) s++, this.Pn -= this.Bn;
                    for (; this.ue - this.Pn > .5 * this.Bn && s > 0;) s--, this.Pn += this.Bn;
                    this.Ws = new t.ChangeOctave(this.yt, i, s), this.yt.setProspectiveChange(this.Ws)
                }
                this.ye && this.ci()
            }
        }
        ci() {
            let t = !1,
                e = !1,
                i = !1;
            this.ye && !this.pe && (this.ue < this.An - this.zn ? t = !0 : this.ue > this.An ? e = !0 : i = !0), this.Oi.style.visibility = t ? "inherit" : "hidden", this.Ui.style.visibility = e ? "inherit" : "hidden", this.wn.style.visibility = i ? "inherit" : "hidden"
        }
        tn() {
            this.zn = this.Bn * this.yt.windowOctaves + this.Tn, this.ee.style.visibility = this.yt.song.getChannelIsNoise(this.yt.channel) || this.yt.song.getChannelIsMod(this.yt.channel) ? "hidden" : "visible", this.Rn == this.An && this.Ln == this.zn || (this.Rn = this.An, this.Ln = this.zn, this.vn.setAttribute("height", "" + this.zn), this.wn.setAttribute("height", "" + this.zn), this.vn.setAttribute("y", "" + (this.An - this.zn)), this.wn.setAttribute("y", "" + (this.An - this.zn)), this.Nn.forceRender()), this.ci()
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.Piano = class {
        constructor(e) {
            this.yt = e, this.Hn = t.HTML.div({
                style: "width: 100%; height: 100%; display: flex; flex-direction: column-reverse; align-items: stretch;"
            }), this.$n = t.HTML.div({
                style: "width: 100%; height: 100%; display: flex; flex-direction: column-reverse; align-items: stretch;"
            }), this.Dn = t.HTML.div({
                style: "width: 100%; height: 100%; display: flex; flex-direction: column-reverse; align-items: stretch;"
            }), this.In = t.HTML.div({
                style: `width: 100%; height: 40px; border: 2px solid ${t.ColorConfig.primaryText}; position: absolute; box-sizing: border-box; pointer-events: none;`
            }), this.container = t.HTML.div({
                style: "width: 32px; height: 100%; overflow: hidden; position: relative; flex-shrink: 0; touch-action: none;"
            }, this.Hn, this.$n, this.Dn, this.In), this.ei = 481, this._n = [], this.On = [], this.Un = [], this.Vn = [], this.jn = [], this.Wn = [], this.ue = 0, this.pe = !1, this.ye = !1, this.Gn = -1, this.Kn = -1, this.He = !1, this.$e = !1, this.Jn = -1, this.Yn = -1, this.Qe = (t => {
                this.ye || (this.ye = !0, this.ci())
            }), this.Xe = (t => {
                this.ye && (this.ye = !1, this.ci())
            }), this.ti = (t => {
                t.preventDefault(), this.yt.synth.maintainLiveInput(), this.pe = !0;
                const e = this.container.getBoundingClientRect();
                this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.Zn(), this.ci()
            }), this.ni = (t => {
                (this.pe || this.ye) && this.yt.synth.maintainLiveInput();
                const e = this.container.getBoundingClientRect();
                this.ue = ((t.clientY || t.pageY) - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.Qn(), this.pe && this.Zn(), this.ci()
            }), this.Ns = (t => {
                this.pe && this.Xn(), this.pe = !1, this.ci()
            }), this.si = (t => {
                t.preventDefault(), this.yt.synth.maintainLiveInput(), this.pe = !0;
                const e = this.container.getBoundingClientRect();
                this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.Qn(), this.Zn()
            }), this.ri = (t => {
                t.preventDefault(), this.yt.synth.maintainLiveInput();
                const e = this.container.getBoundingClientRect();
                this.ue = (t.touches[0].clientY - e.top) * this.ei / (e.bottom - e.top), isNaN(this.ue) && (this.ue = 0), this.Qn(), this.pe && this.Zn()
            }), this.Xs = (t => {
                t.preventDefault(), this.Xn()
            }), this.en = (() => {
                const e = this.yt.song.getChannelIsNoise(this.yt.channel),
                    i = this.yt.song.getChannelIsMod(this.yt.channel);
                if (e ? (this.me = 40, this.gi = t.Config.drumCount) : i ? (this.me = 80, this.gi = t.Config.modCount) : (this.me = this.ei / this.yt.windowPitchCount, this.gi = this.yt.windowPitchCount), !e && !i) {
                    for (let e = this.Yn; e < this.yt.windowPitchCount; e++) {
                        const e = t.HTML.div({
                                class: "piano-label",
                                style: "font-weight: bold; -webkit-text-stroke-width: 0; font-size: 11px; font-family: sans-serif; position: absolute; padding-left: 15px;"
                            }),
                            i = t.HTML.div({
                                class: "piano-button",
                                style: "background: gray;"
                            }, e);
                        this.Hn.appendChild(i), this.On.push(e), this._n.push(i), this.Yn++
                    }
                    for (let t = this.Yn; t > this.yt.windowPitchCount; t--) this.Hn.removeChild(this.Hn.lastChild), this.On.pop(), this._n.pop();
                    this.Yn = this.yt.windowPitchCount
                }
                this.Qn(), this.pe && this.Zn(), this.yt.synth.liveInputChannel = this.yt.channel, this.tn()
            }), this.tn = (() => {
                if (!this.yt.showLetters) return;
                const e = this.yt.song.getChannelIsNoise(this.yt.channel),
                    i = this.yt.song.getChannelIsMod(this.yt.channel);
                if (this.Kn == this.yt.song.scale && this.Jn == this.yt.song.key && this.He == e && this.$e == i) return;
                this.Kn = this.yt.song.scale, this.Jn = this.yt.song.key, this.He = e, this.$e = i;
                const s = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()];
                if (this.Hn.style.display = e || i ? "none" : "flex", this.$n.style.display = e ? "flex" : "none", this.Dn.style.display = i ? "flex" : "none", e || i) {
                    if (i) {
                        let e, i, n = "",
                            o = "",
                            r = t.ColorConfig.modLabelPrimaryText,
                            h = t.ColorConfig.modLabelSecondaryText;
                        for (let a = 0; a < t.Config.modCount; a++) {
                            let l = !0,
                                c = !0;
                            switch (s.modStatuses[t.Config.modCount - a - 1]) {
                                case t.ModStatus.msNone:
                                    n = "Mod", l = !1, h = t.ColorConfig.modLabelSecondaryText, c = !1;
                                    break;
                                case t.ModStatus.msForPitch:
                                    e = s.modChannels[t.Config.modCount - a - 1] + 1, i = s.modInstruments[t.Config.modCount - a - 1] + 1, this.yt.song.instrumentsPerChannel > 1 ? e >= 10 || i >= 10 ? (n = "P" + e, n += " I" + i) : (n = "Pitch" + e, n += " Ins" + i) : n = "Pitch " + e;
                                    break;
                                case t.ModStatus.msForNoise:
                                    e = s.modChannels[t.Config.modCount - a - 1] + 1, i = s.modInstruments[t.Config.modCount - a - 1] + 1, this.yt.song.instrumentsPerChannel > 1 ? e >= 10 || i >= 10 ? (n = "N" + e, n += " I" + i) : (n = "Noise" + e, n += " Ins" + i) : n = "Noise " + e;
                                    break;
                                case t.ModStatus.msForSong:
                                    n = "Song"
                            }
                            if (l) switch (s.modSettings[t.Config.modCount - a - 1]) {
                                case t.ModSetting.mstNone:
                                    h = t.ColorConfig.modLabelSecondaryText, o = "None", c = !1;
                                    break;
                                case t.ModSetting.mstFilterCut:
                                    o = "Filter Cut";
                                    break;
                                case t.ModSetting.mstFilterPeak:
                                    o = "Filter Peak";
                                    break;
                                case t.ModSetting.mstFMFeedback:
                                    o = "FM Feedback";
                                    break;
                                case t.ModSetting.mstFMSlider1:
                                    o = "FM 1";
                                    break;
                                case t.ModSetting.mstFMSlider2:
                                    o = "FM 2";
                                    break;
                                case t.ModSetting.mstFMSlider3:
                                    o = "FM 3";
                                    break;
                                case t.ModSetting.mstFMSlider4:
                                    o = "FM 4";
                                    break;
                                case t.ModSetting.mstInsVolume:
                                    o = "Volume";
                                    break;
                                case t.ModSetting.mstNextBar:
                                    o = "Next Bar";
                                    break;
                                case t.ModSetting.mstPan:
                                    o = "Pan";
                                    break;
                                case t.ModSetting.mstDetune:
                                    o = "Detune";
                                    break;
                                case t.ModSetting.mstVibratoDepth:
                                    o = "Vibrato Depth";
                                    break;
                                case t.ModSetting.mstPulseWidth:
                                    o = "Pulse Width";
                                    break;
                                case t.ModSetting.mstReverb:
                                    o = "Reverb";
                                    break;
                                case t.ModSetting.mstSongVolume:
                                    o = "Volume";
                                    break;
                                case t.ModSetting.mstTempo:
                                    o = "Tempo";
                                    break;
                                case t.ModSetting.mstSongDetune:
                                    o = "Detune"
                            }
                            const d = this.Un[a],
                                m = this.Vn[a],
                                f = this.jn[a],
                                u = this.Wn[a];
                            d.style.fill = r, d.textContent = n, m.style.fill = h, m.textContent = l ? o : "Not set", f.textContent = "" + (t.Config.modCount - a), u.style.fill = c ? t.ColorConfig.indicatorPrimary : t.ColorConfig.modLabelSecondaryText
                        }
                    }
                } else
                    for (let e = 0; e < this.gi; e++) {
                        const i = (e + t.Config.keys[this.yt.song.key].basePitch) % 12,
                            s = t.Config.keys[i].isWhiteKey;
                        if (this._n[e].style.background = s ? t.ColorConfig.whitePianoKey : t.ColorConfig.blackPianoKey, t.Config.scales[this.yt.song.scale].flags[e % 12]) {
                            let s;
                            if (this._n[e].classList.remove("disabled"), this.On[e].style.display = "", t.Config.keys[i].isWhiteKey) s = t.Config.keys[i].name;
                            else {
                                const n = t.Config.blackKeyNameParents[e % 12];
                                s = t.Config.keys[(i + 12 + n) % 12].name, 1 == n ? s += "♭" : -1 == n && (s += "♯")
                            }
                            const n = this.On[e];
                            e % 12 == 0 ? (s += Math.floor(e / 12) + this.yt.song.channels[this.yt.channel].octave, n.style.transform = "translate(-5px, 0px)") : n.style.transform = "translate(0px, 0px)", n.style.color = t.Config.keys[i].isWhiteKey ? "black" : "white", n.textContent = s
                        } else this._n[e].classList.add("disabled"), this.On[e].style.display = "none"
                    }
                this.ci()
            });
            for (let e = 0; e < this.yt.windowPitchCount; e++) {
                const e = t.HTML.div({
                        class: "piano-label",
                        style: "font-weight: bold; -webkit-text-stroke-width: 0; font-size: 11px; font-family: sans-serif; position: absolute; padding-left: 15px;"
                    }),
                    i = t.HTML.div({
                        class: "piano-button",
                        style: "background: gray;"
                    }, e);
                this.Hn.appendChild(i), this.On.push(e), this._n.push(i)
            }
            this.Yn = this.yt.windowPitchCount;
            for (let e = 0; e < t.Config.drumCount; e++) {
                const i = 100 * (1 - e / t.Config.drumCount * .35),
                    s = 1 + (e - t.Config.drumCount / 2) / t.Config.drumCount * .5;
                this.$n.appendChild(t.HTML.div({
                    class: "drum-button",
                    style: `background-size: ${i}% ${i}%; filter: brightness(${s})`
                }))
            }
            for (let e = 0; e < t.Config.modCount; e++) {
                const e = t.SVG.text({
                        class: "modulator-label",
                        "text-anchor": "left",
                        fill: t.ColorConfig.modLabelPrimaryText,
                        style: "font-weight: bold; align-self: flex-start; transform-origin: center; transform: rotate(-90deg) translate(-19px, 39px); font-size: 11px; font-family: sans-serif;"
                    }),
                    i = t.SVG.text({
                        class: "modulator-label",
                        "text-anchor": "left",
                        fill: t.ColorConfig.modLabelPrimaryText,
                        style: "font-weight: bold; align-self: flex-end; transform-origin: center; transform: rotate(-90deg) translate(-26px, 42px); font-size: 11px; font-family: sans-serif;"
                    }),
                    s = t.SVG.text({
                        class: "modulator-inverse-label",
                        fill: t.ColorConfig.modLabelPrimary,
                        style: "font-weight: bold; align-self: flex-start; transform-origin: center; transform: rotate(-90deg) translate(4px, 13px); font-size: 11px; font-family: sans-serif;"
                    }),
                    n = t.SVG.rect({
                        width: "12px",
                        height: "9px",
                        fill: t.ColorConfig.indicatorPrimary,
                        style: "pointer-events: none; transform: translate(4px, 4px);"
                    }),
                    o = t.SVG.svg({
                        viewBox: "0 0 16 66",
                        width: "16px",
                        style: "pointer-events: none;"
                    }, [e]),
                    r = t.SVG.svg({
                        viewBox: "0 0 16 14",
                        width: "16px",
                        style: "pointer-events: none;"
                    }, [n, s]),
                    h = t.SVG.svg({
                        viewBox: "0 0 16 80",
                        width: "16px",
                        style: "pointer-events: none;"
                    }, [i]),
                    a = t.HTML.div({
                        style: "display: flex; flex-direction: column; justify-content: space-between; pointer-events: none;"
                    }, [r, o]),
                    l = t.HTML.div({
                        style: "display: flex; flex-direction: column-reverse; justify-content: space-between; pointer-events: none;"
                    }, [h]),
                    c = t.HTML.div({
                        style: "display: flex; flex-direction: row; justify-content: space-between; padding: 0px; width: 32px; height: 100%; overflow: hidden; pointer-events: none;"
                    }, [a, l]),
                    d = t.HTML.div({
                        class: "modulator-button",
                        style: "background: " + t.ColorConfig.modLabelPrimary + ";"
                    }, c);
                this.Dn.appendChild(d), this.Un.push(e), this.Vn.push(i), this.jn.push(s), this.Wn.push(n)
            }
            this.container.addEventListener("mousedown", this.ti), document.addEventListener("mousemove", this.ni), document.addEventListener("mouseup", this.Ns), this.container.addEventListener("mouseover", this.Qe), this.container.addEventListener("mouseout", this.Xe), this.container.addEventListener("touchstart", this.si), this.container.addEventListener("touchmove", this.ri), this.container.addEventListener("touchend", this.Xs), this.container.addEventListener("touchcancel", this.Xs), this.yt.notifier.watch(this.en), this.en()
        }
        forceRender() {
            this.Kn = -1, this.tn()
        }
        Qn() {
            const e = t.Config.scales[this.yt.song.scale].flags,
                i = Math.max(0, Math.min(this.gi - 1, this.gi - this.ue / this.me));
            if (e[Math.floor(i) % 12] || this.yt.song.getChannelIsNoise(this.yt.channel)) this.to = Math.floor(i);
            else {
                let t = Math.floor(i) + 1,
                    s = Math.floor(i) - 1;
                for (; !e[t % 12];) t++;
                for (; !e[s % 12];) s--;
                let n = t,
                    o = s + 1;
                t % 12 != 0 && t % 12 != 7 || (n -= .5), s % 12 != 0 && s % 12 != 7 || (o += .5), this.to = i - o > n - i ? t : s
            }
        }
        Zn() {
            const t = this.to + 12 * this.yt.song.channels[this.yt.channel].octave;
            this.Gn != t && (this.Gn = t, this.yt.synth.liveInputDuration = Number.MAX_SAFE_INTEGER, this.yt.synth.liveInputPitches = [this.Gn], this.yt.synth.liveInputStarted = !0)
        }
        Xn() {
            this.Gn = -1, this.yt.synth.liveInputDuration = 0
        }
        ci() {
            if (this.In.style.visibility = !this.ye || this.pe ? "hidden" : "visible", !this.ye || this.pe) return;
            const t = this.container.getBoundingClientRect(),
                e = this.me / (this.ei / (t.bottom - t.top));
            this.In.style.left = "0px", this.In.style.top = e * (this.gi - this.to - 1) + "px", this.In.style.height = e + "px"
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        span: s,
        h2: n,
        input: o,
        br: r,
        select: h,
        option: a
    } = t.HTML;
    class l {
        constructor(c) {
            this.yt = c, this.eo = o({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.io = h({
                style: "width: 100%;"
            }, a({
                value: "splice"
            }, "Splice beats at end of bars."), a({
                value: "stretch"
            }, "Stretch notes to fit in bars."), a({
                value: "overflow"
            }, "Overflow notes across bars.")), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 250px;"
            }, n("Beats Per Bar"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                style: "text-align: right;"
            }, "Beats per bar:", r(), s({
                style: "font-size: smaller; color: #888888;"
            }, "(Multiples of 3 or 4 are recommended)")), this.eo), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.io)), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.eo.removeEventListener("keypress", l.ro), this.eo.removeEventListener("blur", l.ho), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                window.localStorage.setItem("beatCountStrategy", this.io.value), this.yt.prompt = null, this.yt.record(new t.ChangeBeatsPerBar(this.yt, l.lo(this.eo), this.io.value), 0)
            }), this.eo.value = this.yt.song.beatsPerBar + "", this.eo.min = t.Config.beatsPerBarMin + "", this.eo.max = t.Config.beatsPerBarMax + "";
            const d = window.localStorage.getItem("beatCountStrategy");
            null != d && (this.io.value = d), this.eo.select(), setTimeout(() => this.eo.focus()), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.eo.addEventListener("keypress", l.ro), this.eo.addEventListener("blur", l.ho), this.container.addEventListener("keydown", this.ao)
        }
        static ro(t) {
            const e = t.which ? t.which : t.keyCode;
            return 46 != e && e > 31 && (e < 48 || e > 57) && (t.preventDefault(), !0)
        }
        static ho(t) {
            const e = t.target;
            e.value = Math.floor(Math.max(Number(e.min), Math.min(Number(e.max), Number(e.value)))) + ""
        }
        static lo(t) {
            return Math.floor(Number(t.value))
        }
    }
    t.BeatsPerBarPrompt = l
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        span: s,
        h2: n,
        input: o,
        br: r,
        select: h,
        option: a
    } = t.HTML;
    class l {
        constructor(c) {
            this.yt = c, this.eo = o({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "0.01",
                value: "0"
            }), this.io = h({
                style: "width: 100%;"
            }, a({
                value: "overflow"
            }, "Overflow notes across bars."), a({
                value: "wrapAround"
            }, "Wrap notes around within bars.")), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 250px;"
            }, n("Move Notes Sideways"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                style: "text-align: right;"
            }, "Beats to move:", r(), s({
                style: `font-size: smaller; color: ${t.ColorConfig.secondaryText};`
            }, "(Negative is left, positive is right)")), this.eo), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.io)), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.eo.removeEventListener("blur", l.ho), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                window.localStorage.setItem("moveNotesSidewaysStrategy", this.io.value), this.yt.prompt = null, this.yt.record(new t.ChangeMoveNotesSideways(this.yt, +this.eo.value, this.io.value), 0)
            }), this.eo.min = -this.yt.song.beatsPerBar + "", this.eo.max = this.yt.song.beatsPerBar + "";
            const d = window.localStorage.getItem("moveNotesSidewaysStrategy");
            null != d && (this.io.value = d), this.eo.select(), setTimeout(() => this.eo.focus()), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.eo.addEventListener("blur", l.ho), this.container.addEventListener("keydown", this.ao)
        }
        static ho(e) {
            const i = e.target;
            let s = +i.value;
            s = Math.round(s * t.Config.partsPerBeat) / t.Config.partsPerBeat, s = Math.round(100 * s) / 100, i.value = Math.max(+i.min, Math.min(+i.max, s)) + ""
        }
    }
    t.MoveNotesSidewaysPrompt = l
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        span: s,
        h2: n,
        input: o,
        br: r,
        select: h,
        option: a
    } = t.HTML;
    class l {
        constructor(c) {
            this.yt = c, this.co = o({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.do = h({
                style: "width: 100%;"
            }, a({
                value: "end"
            }, "Apply change at end of song."), a({
                value: "beginning"
            }, "Apply change at beginning of song.")), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 250px;"
            }, n("Song Length"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                style: "display: inline-block; text-align: right;"
            }, "Bars per song:", r(), s({
                style: `font-size: smaller; color: ${t.ColorConfig.secondaryText};`
            }, "(Multiples of 4 are recommended)")), this.co), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.do)), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.co.removeEventListener("keypress", l.ro), this.co.removeEventListener("blur", l.ho), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                window.localStorage.setItem("barCountPosition", this.do.value);
                const e = new t.ChangeGroup;
                e.append(new t.ChangeBarCount(this.yt, l.lo(this.co), "beginning" == this.do.value)), this.yt.prompt = null, this.yt.record(e, 0)
            }), this.co.value = this.yt.song.barCount + "", this.co.min = t.Config.barCountMin + "", this.co.max = t.Config.barCountMax + "";
            const d = window.localStorage.getItem("barCountPosition");
            null != d && (this.do.value = d), this.co.select(), setTimeout(() => this.co.focus()), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.co.addEventListener("keypress", l.ro), this.co.addEventListener("blur", l.ho), this.container.addEventListener("keydown", this.ao)
        }
        static ro(t) {
            const e = t.which ? t.which : t.keyCode;
            return 46 != e && e > 31 && (e < 48 || e > 57) && (t.preventDefault(), !0)
        }
        static ho(t) {
            const e = t.target;
            e.value = Math.floor(Math.max(Number(e.min), Math.min(Number(e.max), Number(e.value)))) + ""
        }
        static lo(t) {
            return Math.floor(Number(t.value))
        }
    }
    t.SongDurationPrompt = l
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        h2: s,
        input: n
    } = t.HTML;
    class o {
        constructor(r) {
            this.yt = r, this.mo = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.fo = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.uo = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.po = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.yo = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1"
            }), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 250px;"
            }, s("Channel Settings"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, "Pitch channels:", this.uo), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, "Drum channels:", this.po), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, "Mod channels:", this.yo), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, "Patterns per channel:", this.mo), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, "Instruments per channel:", this.fo), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.mo.removeEventListener("keypress", o.ro), this.fo.removeEventListener("keypress", o.ro), this.uo.removeEventListener("keypress", o.ro), this.po.removeEventListener("keypress", o.ro), this.yo.removeEventListener("keypress", o.ro), this.mo.removeEventListener("blur", o.ho), this.fo.removeEventListener("blur", o.ho), this.uo.removeEventListener("blur", o.ho), this.po.removeEventListener("blur", o.ho), this.yo.removeEventListener("blur", o.ho), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                const e = new t.ChangeGroup;
                e.append(new t.ChangePatternsPerChannel(this.yt, o.lo(this.mo))), e.append(new t.ChangeInstrumentsPerChannel(this.yt, o.lo(this.fo))), e.append(new t.ChangeChannelCount(this.yt, o.lo(this.uo), o.lo(this.po), o.lo(this.yo))), this.yt.prompt = null, this.yt.record(e, 0)
            }), this.mo.value = this.yt.song.patternsPerChannel + "", this.mo.min = "1", this.mo.max = t.Config.barCountMax + "", this.fo.value = this.yt.song.instrumentsPerChannel + "", this.fo.min = t.Config.instrumentsPerChannelMin + "", this.fo.max = t.Config.instrumentsPerChannelMax + "", this.uo.value = this.yt.song.pitchChannelCount + "", this.uo.min = t.Config.pitchChannelCountMin + "", this.uo.max = t.Config.pitchChannelCountMax + "", this.po.value = this.yt.song.noiseChannelCount + "", this.po.min = t.Config.noiseChannelCountMin + "", this.po.max = t.Config.noiseChannelCountMax + "", this.yo.value = this.yt.song.modChannelCount + "", this.yo.min = t.Config.modChannelCountMin + "", this.yo.max = t.Config.modChannelCountMax + "", this.uo.select(), setTimeout(() => this.uo.focus()), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.mo.addEventListener("keypress", o.ro), this.fo.addEventListener("keypress", o.ro), this.uo.addEventListener("keypress", o.ro), this.po.addEventListener("keypress", o.ro), this.yo.addEventListener("keypress", o.ro), this.mo.addEventListener("blur", o.ho), this.fo.addEventListener("blur", o.ho), this.uo.addEventListener("blur", o.ho), this.po.addEventListener("blur", o.ho), this.yo.addEventListener("blur", o.ho), this.container.addEventListener("keydown", this.ao)
        }
        static ro(t) {
            const e = t.which ? t.which : t.keyCode;
            return 46 != e && e > 31 && (e < 48 || e > 57) && (t.preventDefault(), !0)
        }
        static ho(t) {
            const e = t.target;
            e.value = String(o.lo(e))
        }
        static lo(t) {
            return Math.floor(Math.max(Number(t.min), Math.min(Number(t.max), Number(t.value))))
        }
    }
    t.ChannelSettingsPrompt = o
}(beepbox || (beepbox = {})),
function(t) {
    function e(t, e) {
        const i = new ArrayBuffer(e);
        let s = 0,
            n = Math.min(t.byteLength, i.byteLength);
        const o = [8, 4, 2, 1];
        for (const e of o)
            if (n >= e) {
                const o = r(e, t, i, s, n);
                s = o.nextOffset, n = o.leftBytes
            } return i;

        function r(t, e, i, s, n) {
            let o = Uint8Array;
            switch (t) {
                case 8:
                    o = Float64Array;
                    break;
                case 4:
                    o = Float32Array;
                    break;
                case 2:
                    o = Uint16Array;
                    break;
                case 1:
                default:
                    o = Uint8Array
            }
            const r = new o(e, s, n / t | 0),
                h = new o(i, s, n / t | 0);
            for (let t = 0; t < h.length; t++) h[t] = r[t];
            return {
                nextOffset: r.byteOffset + r.byteLength,
                leftBytes: n - h.length * t
            }
        }
    }
    t.ArrayBufferWriter = class {
        constructor(t) {
            this.bo = 0, this.vo = 0, this.wo = new ArrayBuffer(t), this.ko = new DataView(this.wo)
        }
        xo(t) {
            this.vo += t, this.vo > this.wo.byteLength && (this.wo = e(this.wo, Math.max(2 * this.wo.byteLength, this.vo)), this.ko = new DataView(this.wo))
        }
        getWriteIndex() {
            return this.bo
        }
        rewriteUint32(t, e) {
            this.ko.setUint32(t, e >>> 0, !1)
        }
        writeUint32(t) {
            t >>>= 0, this.xo(4), this.ko.setUint32(this.bo, t, !1), this.bo = this.vo
        }
        writeUint24(t) {
            t >>>= 0, this.xo(3), this.ko.setUint8(this.bo, t >> 16 & 255), this.ko.setUint8(this.bo + 1, t >> 8 & 255), this.ko.setUint8(this.bo + 2, 255 & t), this.bo = this.vo
        }
        writeUint16(t) {
            t >>>= 0, this.xo(2), this.ko.setUint16(this.bo, t, !1), this.bo = this.vo
        }
        writeUint8(t) {
            t >>>= 0, this.xo(1), this.ko.setUint8(this.bo, t), this.bo = this.vo
        }
        writeInt8(t) {
            t |= 0, this.xo(1), this.ko.setInt8(this.bo, t), this.bo = this.vo
        }
        writeMidi7Bits(t) {
            if ((t >>>= 0) >= 128) throw new Error("7 bit value contained 8th bit!");
            this.xo(1), this.ko.setUint8(this.bo, t), this.bo = this.vo
        }
        writeMidiVariableLength(t) {
            if ((t >>>= 0) > 268435455) throw new Error("writeVariableLength value too big.");
            let e = !1;
            for (let i = 0; i < 4; i++) {
                const s = t >>> 21 - 7 * i & 127;
                0 == s && 3 != i || (e = !0), e && this.writeUint8((3 == i ? 0 : 128) | s)
            }
        }
        writeMidiAscii(t) {
            this.writeMidiVariableLength(t.length);
            for (let e = 0; e < t.length; e++) {
                const i = t.charCodeAt(e);
                if (i > 127) throw new Error("Trying to write unicode character as ascii.");
                this.writeUint8(i)
            }
        }
        toCompactArrayBuffer() {
            return e(this.wo, this.vo)
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    t.defaultMidiExpression = 127, t.defaultMidiPitchBend = 8192, t.analogousDrumMap = {
        35: {
            frequency: 0,
            duration: 2,
            volume: 3
        },
        36: {
            frequency: 0,
            duration: 2,
            volume: 3
        },
        37: {
            frequency: 5,
            duration: 1,
            volume: 3
        },
        38: {
            frequency: 4,
            duration: 2,
            volume: 3
        },
        39: {
            frequency: 5,
            duration: 2,
            volume: 3
        },
        40: {
            frequency: 4,
            duration: 2,
            volume: 3
        },
        41: {
            frequency: 1,
            duration: 2,
            volume: 3
        },
        42: {
            frequency: 8,
            duration: 1,
            volume: 3
        },
        43: {
            frequency: 1,
            duration: 2,
            volume: 3
        },
        44: {
            frequency: 8,
            duration: 1,
            volume: 2
        },
        45: {
            frequency: 2,
            duration: 2,
            volume: 3
        },
        46: {
            frequency: 8,
            duration: 4,
            volume: 3
        },
        47: {
            frequency: 2,
            duration: 2,
            volume: 3
        },
        48: {
            frequency: 3,
            duration: 2,
            volume: 3
        },
        49: {
            frequency: 7,
            duration: 4,
            volume: 3
        },
        50: {
            frequency: 3,
            duration: 2,
            volume: 3
        },
        51: {
            frequency: 6,
            duration: 4,
            volume: 2
        },
        52: {
            frequency: 7,
            duration: 4,
            volume: 3
        },
        53: {
            frequency: 6,
            duration: 2,
            volume: 3
        },
        54: {
            frequency: 11,
            duration: 2,
            volume: 3
        },
        55: {
            frequency: 9,
            duration: 4,
            volume: 3
        },
        56: {
            frequency: 7,
            duration: 1,
            volume: 2
        },
        57: {
            frequency: 7,
            duration: 4,
            volume: 3
        },
        58: {
            frequency: 10,
            duration: 2,
            volume: 2
        },
        59: {
            frequency: 6,
            duration: 4,
            volume: 3
        },
        69: {
            frequency: 10,
            duration: 2,
            volume: 3
        },
        70: {
            frequency: 10,
            duration: 2,
            volume: 3
        },
        73: {
            frequency: 10,
            duration: 1,
            volume: 2
        },
        74: {
            frequency: 10,
            duration: 2,
            volume: 2
        }
    }, t.midiVolumeToVolumeMult = function(t) {
        return Math.pow(t / 127, 4) / .3844015376046128
    }, t.volumeMultToMidiVolume = function(t) {
        return 127 * Math.pow(.3844015376046128 * t, .25)
    }, t.midiExpressionToVolumeMult = function(t) {
        return Math.pow(t / 127, 4)
    }, t.volumeMultToMidiExpression = function(t) {
        return 127 * Math.pow(t, .25)
    }
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        h2: s,
        input: n,
        select: o,
        option: r
    } = t.HTML;

    function h(t, e, i) {
        return t + i * (e - t)
    }

    function a(t, e) {
        if (navigator.msSaveOrOpenBlob) return void navigator.msSaveOrOpenBlob(t, e);
        const i = document.createElement("a");
        if (void 0 != i.download) {
            const s = URL.createObjectURL(t);
            setTimeout(function() {
                URL.revokeObjectURL(s)
            }, 6e4), i.href = s, i.download = e, setTimeout(function() {
                i.dispatchEvent(new MouseEvent("click"))
            }, 0)
        } else {
            const e = URL.createObjectURL(t);
            setTimeout(function() {
                URL.revokeObjectURL(e)
            }, 6e4), window.open(e, "_blank") || (window.location.href = e)
        }
    }
    class l {
        constructor(t) {
            this.yt = t, this.Mo = n({
                type: "text",
                style: "width: 10em;",
                value: "BeepBox-Song",
                maxlength: 250,
                autofocus: "autofocus"
            }), this.Eo = i({
                style: "width: 10em;"
            }, new Text("0:00")), this.Co = n({
                type: "checkbox"
            }), this.So = n({
                style: "width: 2em;",
                type: "number",
                min: "1",
                max: "4",
                step: "1"
            }), this.qo = n({
                type: "checkbox"
            }), this.Po = o({
                style: "width: 100%;"
            }, r({
                value: "wav"
            }, "Export to .wav file."), r({
                value: "midi"
            }, "Export to .mid file."), r({
                value: "json"
            }, "Export to .json file.")), this.so = e({
                className: "cancelButton"
            }), this.No = e({
                className: "exportButton",
                style: "width:45%;"
            }, "Export"), this.container = i({
                className: "prompt noSelection",
                style: "width: 200px;"
            }, s("Export Options"), i({
                style: "display: flex; flex-direction: row; align-items: center; justify-content: space-between;"
            }, "File name:", this.Mo), i({
                style: "display: flex; flex-direction: row; align-items: center; justify-content: space-between;"
            }, "Length:", this.Eo), i({
                style: "display: table; width: 100%;"
            }, i({
                style: "display: table-row;"
            }, i({
                style: "display: table-cell;"
            }, "Intro:"), i({
                style: "display: table-cell;"
            }, "Loop Count:"), i({
                style: "display: table-cell;"
            }, "Outro:")), i({
                style: "display: table-row;"
            }, i({
                style: "display: table-cell; vertical-align: middle;"
            }, this.Co), i({
                style: "display: table-cell; vertical-align: middle;"
            }, this.So), i({
                style: "display: table-cell; vertical-align: middle;"
            }, this.qo))), i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.Po), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.No), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.Mo.removeEventListener("input", l.To), this.So.removeEventListener("blur", l.ho), this.No.removeEventListener("click", this.Fo), this.so.removeEventListener("click", this.gt), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.Fo()
            }), this.Fo = (() => {
                switch (window.localStorage.setItem("exportFormat", this.Po.value), this.Po.value) {
                    case "wav":
                        this.Bo();
                        break;
                    case "midi":
                        this.zo();
                        break;
                    case "json":
                        this.Ro();
                        break;
                    default:
                        throw new Error("Unhandled file export type.")
                }
            }), this.So.value = "1", 0 == this.yt.song.loopStart ? (this.Co.checked = !1, this.Co.disabled = !0) : (this.Co.checked = !0, this.Co.disabled = !1), this.yt.song.loopStart + this.yt.song.loopLength == this.yt.song.barCount ? (this.qo.checked = !1, this.qo.disabled = !0) : (this.qo.checked = !0, this.qo.disabled = !1);
            const h = window.localStorage.getItem("exportFormat");
            null != h && (this.Po.value = h), this.Mo.select(), setTimeout(() => this.Mo.focus()), this.Mo.addEventListener("input", l.To), this.So.addEventListener("blur", l.ho), this.No.addEventListener("click", this.Fo), this.so.addEventListener("click", this.gt), this.qo.addEventListener("click", () => {
                this.Eo.firstChild.textContent = this.samplesToTime(this.yt.synth.getTotalSamples(this.Co.checked, this.qo.checked, +this.So.value - 1))
            }), this.Co.addEventListener("click", () => {
                this.Eo.firstChild.textContent = this.samplesToTime(this.yt.synth.getTotalSamples(this.Co.checked, this.qo.checked, +this.So.value - 1))
            }), this.So.addEventListener("change", () => {
                this.Eo.firstChild.textContent = this.samplesToTime(this.yt.synth.getTotalSamples(this.Co.checked, this.qo.checked, +this.So.value - 1))
            }), this.container.addEventListener("keydown", this.ao), this.Mo.value = t.song.title, l.To(null, this.Mo), this.Eo.firstChild.textContent = this.samplesToTime(this.yt.synth.getTotalSamples(this.Co.checked, this.qo.checked, +this.So.value - 1))
        }
        samplesToTime(t) {
            const e = Math.round(t / this.yt.synth.samplesPerSecond),
                i = e % 60;
            return Math.floor(e / 60) + ":" + (i < 10 ? "0" : "") + i
        }
        changeFileName(t) {
            this.Mo.value = t
        }
        static To(t, e) {
            let i;
            if (null != t) i = t.target;
            else {
                if (void 0 == e) return;
                i = e
            }
            const s = /[\+\*\$\?\|\{\}\\\/<>#%!`&'"=:@]/gi;
            if (s.test(i.value)) {
                let t = i.selectionStart;
                i.value = i.value.replace(s, ""), t--, i.setSelectionRange(t, t)
            }
        }
        static ho(t) {
            const e = t.target;
            e.value = Math.floor(Math.max(Number(e.min), Math.min(Number(e.max), Number(e.value)))) + ""
        }
        Bo() {
            const e = new t.Synth(this.yt.song);
            if (e.loopRepeatCount = Number(this.So.value) - 1, !this.Co.checked)
                for (let t = 0; t < this.yt.song.loopStart; t++) e.nextBar();
            e.computeLatestModValues();
            const i = e.getTotalSamples(this.Co.checked, this.qo.checked, e.loopRepeatCount),
                s = new Float32Array(i),
                n = new Float32Array(i);
            e.synthesize(s, n, i);
            const o = 2 * i;
            let r = 0;
            const h = new ArrayBuffer(44 + 2 * o),
                l = new DataView(h);
            l.setUint32(r, 1380533830, !1), r += 4, l.setUint32(r, 36 + 2 * o, !0), r += 4, l.setUint32(r, 1463899717, !1), r += 4, l.setUint32(r, 1718449184, !1), r += 4, l.setUint32(r, 16, !0), r += 4, l.setUint16(r, 1, !0), r += 2, l.setUint16(r, 2, !0), r += 2, l.setUint32(r, 44100, !0), r += 4, l.setUint32(r, 176400, !0), r += 4, l.setUint16(r, 4, !0), r += 2, l.setUint16(r, 16, !0), r += 2, l.setUint32(r, 1684108385, !1), r += 4, l.setUint32(r, 2 * o, !0), r += 4;
            for (let t = 0; t < i; t++) {
                let e = Math.floor(32767 * Math.max(-1, Math.min(1, s[t]))),
                    i = Math.floor(32767 * Math.max(-1, Math.min(1, n[t])));
                l.setInt16(r, e, !0), r += 2, l.setInt16(r, i, !0), r += 2
            }
            a(new Blob([h], {
                type: "audio/wav"
            }), this.Mo.value.trim() + ".wav"), this.gt()
        }
        zo() {
            const e = this.yt.song,
                i = 2 * t.Config.ticksPerPart * t.Config.partsPerBeat,
                s = 2 * t.Config.ticksPerPart,
                n = e.getBeatsPerMinute(),
                o = Math.round(6e7 / n),
                r = i * e.beatsPerBar,
                c = [];
            if (this.Co.checked)
                for (let t = 0; t < e.loopStart; t++) c.push(t);
            for (let t = 0; t < Number(this.So.value); t++)
                for (let t = e.loopStart; t < e.loopStart + e.loopLength; t++) c.push(t);
            if (this.qo.checked)
                for (let t = e.loopStart + e.loopLength; t < e.barCount; t++) c.push(t);
            const d = [{
                isMeta: !0,
                channel: -1,
                midiChannel: -1,
                isNoise: !1,
                isDrumset: !1
            }];
            let m = 0,
                f = !1;
            for (let t = 0; t < this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount; t++)
                if (f || 4 != this.yt.song.channels[t].instruments[0].type) {
                    if (m >= 16) continue;
                    d.push({
                        isMeta: !1,
                        channel: t,
                        midiChannel: m++,
                        isNoise: this.yt.song.getChannelIsNoise(t),
                        isDrumset: !1
                    }), 9 == m && m++
                } else d.push({
                    isMeta: !1,
                    channel: t,
                    midiChannel: 9,
                    isNoise: !0,
                    isDrumset: !0
                }), f = !0;
            const u = new t.ArrayBufferWriter(1024);
            u.writeUint32(1297377380), u.writeUint32(6), u.writeUint16(1), u.writeUint16(d.length), u.writeUint16(i);
            for (const n of d) {
                u.writeUint32(1297379947);
                const {
                    isMeta: a,
                    channel: d,
                    midiChannel: m,
                    isNoise: f,
                    isDrumset: y
                } = n, b = u.getWriteIndex();
                u.writeUint32(0);
                let g = 0,
                    v = 0;
                const w = function(t) {
                        if (t < g) throw new Error("Midi event time cannot go backwards.");
                        u.writeMidiVariableLength(t - g), g = t
                    },
                    k = function(t, e) {
                        if (!(e >= 0 && e <= 127)) throw new Error("Midi control event value out of range: " + e);
                        u.writeUint8(176 | m), u.writeMidi7Bits(t), u.writeMidi7Bits(0 | e)
                    };
                if (a) {
                    w(0), u.writeUint8(255), u.writeMidi7Bits(1), u.writeMidiAscii("Composed with jummbus.bitbucket.io"), w(0), u.writeUint8(255), u.writeMidi7Bits(81), u.writeMidiVariableLength(3), u.writeUint24(o), w(0), u.writeUint8(255), u.writeMidi7Bits(88), u.writeMidiVariableLength(4), u.writeUint8(e.beatsPerBar), u.writeUint8(2), u.writeUint8(24), u.writeUint8(8);
                    const i = t.Config.scales[e.scale].flags[3] && !t.Config.scales[e.scale].flags[4],
                        s = e.key;
                    let n = s;
                    for (1 == (1 & s) && (n += 6), i && (n += 9); n > 6;) n -= 12;
                    w(0), u.writeUint8(255), u.writeMidi7Bits(89), u.writeMidiVariableLength(2), u.writeInt8(n), u.writeUint8(i ? 1 : 0), this.Co.checked && (v += r * e.loopStart), w(v), u.writeUint8(255), u.writeMidi7Bits(6), u.writeMidiAscii("Loop Start");
                    for (let t = 0; t < parseInt(this.So.value); t++) v += r * e.loopLength, w(v), u.writeUint8(255), u.writeMidi7Bits(6), u.writeMidiAscii(t < Number(this.So.value) - 1 ? "Loop Repeat" : "Loop End");
                    if (this.qo.checked && (v += r * (e.barCount - e.loopStart - e.loopLength)), v != r * c.length) throw new Error("Miscalculated number of bars.")
                } else {
                    let n = f ? "noise channel " + d : "pitch channel " + d;
                    w(0), u.writeUint8(255), u.writeMidi7Bits(3), u.writeMidiAscii(n), w(0), k(101, 0), w(0), k(100, 0), w(0), k(6, 24), w(0), k(38, 0), w(0), k(101, 127), w(0), k(100, 127);
                    let o = -1;

                    function p(i) {
                        const s = e.channels[d].instruments[i],
                            n = t.EditorConfig.valueToPreset(s.preset);
                        if (o != i) {
                            if (o = i, w(v), u.writeUint8(255), u.writeMidi7Bits(4), u.writeMidiAscii("Instrument " + (i + 1)), !y) {
                                let t = 81;
                                if (null != n && void 0 != n.midiProgram) t = n.midiProgram;
                                else if (4 == s.type) t = 116;
                                else {
                                    const e = s.getFilterEnvelope().type,
                                        i = 8 == e || 4 == e;
                                    if (2 == s.type || 3 == s.type) t = f ? 116 : i ? 47 : 75;
                                    else if (0 == s.type) {
                                        const e = i ? l.midiDecayInstruments : l.midiSustainInstruments;
                                        e.length > s.chipWave && (t = e[s.chipWave])
                                    } else if (6 == s.type) t = i ? 25 : 81;
                                    else if (1 == s.type || 5 == s.type) t = i ? 2 : 81;
                                    else {
                                        if (7 != s.type) throw new Error("Unrecognized instrument type.");
                                        t = i ? 25 : 81
                                    }
                                }
                                w(v), u.writeUint8(192 | m), u.writeMidi7Bits(t)
                            }
                            w(v);
                            let e = t.volumeMultToMidiVolume(t.Synth.instrumentVolumeToVolumeMult(s.volume));
                            k(7, Math.min(127, Math.round(e))), w(v);
                            let r = 63 * (s.pan / t.Config.panCenter - 1) + 64;
                            k(10, Math.min(127, Math.round(r)))
                        }
                    }
                    null == e.getPattern(d, 0) && p(0);
                    let a = t.defaultMidiPitchBend,
                        b = t.defaultMidiExpression,
                        g = !1;
                    const x = f ? t.Config.spectrumBasePitch : t.Config.keys[e.key].basePitch,
                        M = f ? t.Config.noiseInterval : 1;
                    for (const n of c) {
                        const o = e.getPattern(d, n);
                        if (null != o) {
                            const n = o.instrument,
                                r = e.channels[d].instruments[n],
                                l = t.EditorConfig.valueToPreset(r.preset);
                            p(n);
                            let c = !1,
                                E = !0,
                                C = 1;
                            c = r.getChord().harmonizes, (E = r.getChord().arpeggiates) ? c && (0 == r.type ? C = 2 : 1 == r.type ? C = t.Config.operatorCount : console.error("Unrecognized instrument type for harmonizing arpeggio: " + r.type)) : C = t.Config.maxChordSize;
                            for (let n = 0; n < o.notes.length; n++) {
                                const r = o.notes[n],
                                    c = v + r.start * s;
                                let d = c,
                                    p = r.pins[0].volume,
                                    S = r.pins[0].interval;
                                const q = [-1, -1, -1, -1],
                                    P = [-1, -1, -1, -1],
                                    N = Math.min(C, r.pitches.length),
                                    T = y ? Math.max(1, Math.round(90 * r.pins[0].volume / 6)) : 90;
                                let F = r.pickMainInterval(),
                                    B = F * M;
                                if (!y) {
                                    let t = 24,
                                        e = -24;
                                    for (let i = 1; i < r.pins.length; i++) {
                                        const s = r.pins[i].interval * M;
                                        t = Math.min(t, s + 24), e = Math.max(e, s - 24)
                                    }
                                    B = Math.min(t, Math.max(e, B))
                                }
                                for (let n = 1; n < r.pins.length; n++) {
                                    const o = c + r.pins[n].time * s,
                                        g = r.pins[n].volume,
                                        C = r.pins[n].interval,
                                        z = o - d;
                                    for (let n = 0; n < z; n++) {
                                        const o = d + n,
                                            R = h(p, g, n / z),
                                            L = h(S, C, n / z) * M - B,
                                            A = Math.max(0, Math.min(16383, Math.round(8192 * (1 + L / 24)))),
                                            H = Math.min(127, Math.round(t.volumeMultToMidiExpression(t.Synth.expressionToVolumeMult(R))));
                                        A != a && (w(o), u.writeUint8(224 | m), u.writeMidi7Bits(127 & A), u.writeMidi7Bits(A >> 7 & 127), a = A), H == b || y || (w(o), k(11, H), b = H);
                                        const $ = o == c;
                                        for (let n = 0; n < N; n++) {
                                            let h = r.pitches[n];
                                            if (y) {
                                                const t = [36, 41, 45, 48, 40, 39, 59, 49, 46, 55, 69, 54];
                                                if ((h += F) < 0 || h >= t.length) throw new Error("Could not find corresponding drumset pitch. " + h);
                                                h = t[h]
                                            } else {
                                                if (E && r.pitches.length > n + 1 && n == N - 1) {
                                                    const a = (o - v) % i,
                                                        l = t.Config.rhythms[e.rhythm].ticksPerArpeggio * s / t.Config.ticksPerPart,
                                                        c = Math.floor(a / l);
                                                    h = r.pitches[n + t.getArpeggioPitchIndex(r.pitches.length - n, e.rhythm, c)]
                                                }
                                                h = x + h * M + B, null != l && void 0 != l.midiSubharmonicOctaves ? h += 12 * l.midiSubharmonicOctaves : f && (h += 12 * +t.EditorConfig.presetCategories.dictionary["Drum Presets"].presets.dictionary["taiko drum"].midiSubharmonicOctaves), f && (h *= 2)
                                            }
                                            h = Math.max(0, Math.min(127, h)), P[n] = h, $ || q[n] == P[n] || (w(o), u.writeUint8(128 | m), u.writeMidi7Bits(q[n]), u.writeMidi7Bits(T))
                                        }
                                        for (let t = 0; t < N; t++)($ || q[t] != P[t]) && (w(o), u.writeUint8(144 | m), u.writeMidi7Bits(P[t]), u.writeMidi7Bits(T), q[t] = P[t])
                                    }
                                    d = o, p = g, S = C
                                }
                                const z = v + r.end * s;
                                for (let t = 0; t < N; t++) w(z), u.writeUint8(128 | m), u.writeMidi7Bits(q[t]), u.writeMidi7Bits(T);
                                g = !0
                            }
                        } else g && (g = !1, b != t.defaultMidiExpression && (b = t.defaultMidiExpression, w(v), k(11, b)), a != t.defaultMidiPitchBend && (a = t.defaultMidiPitchBend, w(v), u.writeUint8(224 | m), u.writeMidi7Bits(127 & a), u.writeMidi7Bits(a >> 7 & 127)));
                        v += r
                    }
                }
                w(v), u.writeUint8(255), u.writeMidi7Bits(47), u.writeMidiVariableLength(0), u.rewriteUint32(b, u.getWriteIndex() - b - 4)
            }
            a(new Blob([u.toCompactArrayBuffer()], {
                type: "audio/midi"
            }), this.Mo.value.trim() + ".mid"), this.gt()
        }
        Ro() {
            const t = this.yt.song.toJsonObject(this.Co.checked, Number(this.So.value), this.qo.checked),
                e = JSON.stringify(t, null, "\t");
            a(new Blob([e], {
                type: "application/json"
            }), this.Mo.value.trim() + ".json"), this.gt()
        }
    }
    l.midiSustainInstruments = [74, 71, 80, 70, 70, 68, 68, 81, 81, 81, 81, 81, 81], l.midiDecayInstruments = [33, 46, 46, 6, 6, 24, 24, 25, 25, 25, 25, 106, 106], t.ExportPrompt = l
}(beepbox || (beepbox = {})),
function(t) {
    class e {
        constructor(t) {
            this.S = 0, this.ko = t
        }
        getReadIndex() {
            return this.S
        }
        readUint32() {
            if (this.S + 4 > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            const t = this.ko.getUint32(this.S, !1);
            return this.S += 4, t
        }
        readUint24() {
            return this.readUint8() << 16 | this.readUint8() << 8 | this.readUint8()
        }
        readUint16() {
            if (this.S + 2 > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            const t = this.ko.getUint16(this.S, !1);
            return this.S += 2, t
        }
        readUint8() {
            if (this.S + 1 > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            const t = this.ko.getUint8(this.S);
            return this.S++, t
        }
        readInt8() {
            if (this.S + 1 > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            const t = this.ko.getInt8(this.S);
            return this.S++, t
        }
        peakUint8() {
            if (this.S + 1 > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            return this.ko.getUint8(this.S)
        }
        readMidi7Bits() {
            const t = this.readUint8();
            return t >= 128 && console.log("7 bit value contained 8th bit! value " + t + ", index " + this.S), 127 & t
        }
        readMidiVariableLength() {
            let t = 0;
            for (let e = 0; e < 4; e++) {
                const e = this.readUint8();
                if (t += 127 & e, !(128 & e)) break;
                t <<= 7
            }
            return t
        }
        skipBytes(t) {
            this.S += t
        }
        hasMore() {
            return this.ko.byteLength > this.S
        }
        getReaderForNextBytes(t) {
            if (this.S + t > this.ko.byteLength) throw new Error("Reading past the end of the buffer.");
            const i = new e(new DataView(this.ko.buffer, this.ko.byteOffset + this.S, t));
            return this.skipBytes(t), i
        }
    }
    t.ArrayBufferReader = e
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        p: i,
        div: s,
        h2: n,
        input: o
    } = t.HTML;
    t.ImportPrompt = class {
        constructor(r) {
            this.yt = r, this.Lo = o({
                type: "file",
                accept: ".json,application/json,.mid,.midi,audio/midi,audio/x-midi"
            }), this.so = e({
                className: "cancelButton"
            }), this.container = s({
                className: "prompt noSelection",
                style: "width: 300px;"
            }, n("Import"), i({
                style: "text-align: left; margin: 0.5em 0;"
            }, "BeepBox songs can be exported and re-imported as .json files. You could also use other means to make .json files for BeepBox as long as they follow the same structure."), i({
                style: "text-align: left; margin: 0.5em 0;"
            }, "BeepBox can also (crudely) import .mid files. There are many tools available for creating .mid files. Shorter and simpler songs are more likely to work well."), this.Lo, this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.Lo.removeEventListener("change", this.Ao), this.so.removeEventListener("click", this.gt)
            }), this.Ao = (() => {
                const e = this.Lo.files[0];
                if (!e) return;
                const i = e.name.slice(2 + (e.name.lastIndexOf(".") - 1 >>> 0));
                if ("json" == i) {
                    const i = new FileReader;
                    i.addEventListener("load", e => {
                        this.yt.prompt = null, this.yt.goBackToStart(), this.yt.record(new t.ChangeSong(this.yt, i.result), 0, !0)
                    }), i.readAsText(e)
                } else if ("midi" == i || "mid" == i) {
                    const t = new FileReader;
                    t.addEventListener("load", e => {
                        this.yt.prompt = null, this.yt.goBackToStart(), this.Ho(t.result)
                    }), t.readAsArrayBuffer(e)
                } else console.error("Unrecognized file extension."), this.gt()
            }), this.Lo.select(), setTimeout(() => this.Lo.focus()), this.Lo.addEventListener("change", this.Ao), this.so.addEventListener("click", this.gt)
        }
        Ho(e) {
            const i = new t.ArrayBufferReader(new DataView(e));
            let s = null;
            const n = [];
            for (; i.hasMore();) {
                const t = i.readUint32(),
                    e = i.readUint32();
                if (1297377380 == t) null == s ? s = i.getReaderForNextBytes(e) : console.error("This MIDI file has more than one header chunk.");
                else if (1297379947 == t) {
                    const t = i.getReaderForNextBytes(e);
                    t.hasMore() && n.push({
                        reader: t,
                        nextEventMidiTick: t.readMidiVariableLength(),
                        ended: !1,
                        runningStatus: -1
                    })
                } else i.skipBytes(e)
            }
            if (null == s) return console.error("No header chunk found in this MIDI file."), void this.gt();
            const o = s.readUint16();
            s.readUint16();
            const r = s.readUint16();
            let h = 0;
            const a = [],
                l = 2 == o;
            if (l) a.push(h);
            else
                for (let t = 0; t < n.length; t++) a.push(t);
            const c = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                d = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
                m = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                u = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                p = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                y = [64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64],
                b = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                g = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ],
                v = [
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    [],
                    []
                ];
            let w = 5e5,
                k = 8,
                x = 0,
                M = !1,
                E = 0;
            for (;;) {
                let e = Number.MAX_VALUE,
                    i = !1;
                for (const s of a) {
                    const o = n[s];
                    for (; !o.ended && o.nextEventMidiTick == E;) {
                        const s = 128 & o.reader.peakUint8() ? o.reader.readUint8() : o.runningStatus,
                            r = 240 & s,
                            C = 15 & s;
                        240 != r && (o.runningStatus = s);
                        let S = !1;
                        switch (r) {
                            case 128: {
                                const t = o.reader.readMidi7Bits();
                                o.reader.readMidi7Bits(), b[C].push({
                                    midiTick: E,
                                    pitch: t,
                                    velocity: 0,
                                    program: -1,
                                    instrumentVolume: -1,
                                    instrumentPan: -1,
                                    on: !1
                                })
                            }
                            break;
                        case 144: {
                            const e = o.reader.readMidi7Bits(),
                                i = o.reader.readMidi7Bits();
                            if (0 == i) b[C].push({
                                midiTick: E,
                                pitch: e,
                                velocity: 0,
                                program: -1,
                                instrumentVolume: -1,
                                instrumentPan: -1,
                                on: !1
                            });
                            else {
                                const s = Math.max(0, Math.min(t.Config.volumeRange - 1, Math.round(t.Synth.volumeMultToInstrumentVolume(t.midiVolumeToVolumeMult(p[C]))))),
                                    n = Math.max(0, Math.min(t.Config.panMax, Math.round(((y[C] - 64) / 63 + 1) * t.Config.panCenter)));
                                b[C].push({
                                    midiTick: E,
                                    pitch: e,
                                    velocity: Math.max(0, Math.min(1, (i + 14) / 90)),
                                    program: u[C],
                                    instrumentVolume: s,
                                    instrumentPan: n,
                                    on: !0
                                })
                            }
                        }
                        break;
                        case 160:
                            o.reader.readMidi7Bits(), o.reader.readMidi7Bits();
                            break;
                        case 176: {
                            const e = o.reader.readMidi7Bits(),
                                i = o.reader.readMidi7Bits();
                            switch (e) {
                                case 6:
                                    0 == c[C] && 0 == d[C] && (m[C] = i);
                                    break;
                                case 7:
                                    p[C] = i;
                                    break;
                                case 10:
                                    y[C] = i;
                                    break;
                                case 11:
                                    v[C].push({
                                        midiTick: E,
                                        volume: t.Synth.volumeMultToExpression(t.midiExpressionToVolumeMult(i))
                                    });
                                    break;
                                case 38:
                                    0 == c[C] && 0 == d[C] && (f[C] = i);
                                    break;
                                case 100:
                                    d[C] = i;
                                    break;
                                case 101:
                                    c[C] = i
                            }
                        }
                        break;
                        case 192: {
                            const t = o.reader.readMidi7Bits();
                            u[C] = t
                        }
                        break;
                        case 208:
                            o.reader.readMidi7Bits();
                            break;
                        case 224: {
                            const t = o.reader.readMidi7Bits(),
                                e = ((o.reader.readMidi7Bits() << 7 | t) / 8192 - 1) * (m[C] + .01 * f[C]);
                            g[C].push({
                                midiTick: E,
                                interval: e
                            })
                        }
                        break;
                        case 240:
                            if (255 == s) {
                                const e = o.reader.readMidi7Bits(),
                                    i = o.reader.readMidiVariableLength();
                                if (47 == e) S = !0, o.reader.skipBytes(i);
                                else if (81 == e) w = o.reader.readUint24(), o.reader.skipBytes(i - 3);
                                else if (88 == e) {
                                    const e = o.reader.readUint8();
                                    let s = o.reader.readUint8();
                                    for (o.reader.readUint8(), o.reader.readUint8(), o.reader.skipBytes(i - 4), k = 4 * e; 0 == (1 & k) && (s > 0 || k > t.Config.beatsPerBarMax) && k >= 2 * t.Config.beatsPerBarMin;) k >>= 1, s -= 1;
                                    k = Math.max(t.Config.beatsPerBarMin, Math.min(t.Config.beatsPerBarMax, k))
                                } else 89 == e ? (x = o.reader.readInt8(), M = 1 == o.reader.readUint8(), o.reader.skipBytes(i - 2)) : o.reader.skipBytes(i)
                            } else {
                                if (240 != s && 247 != s) return console.error("Unrecognized event status: " + s), void this.gt(); {
                                    const t = o.reader.readMidiVariableLength();
                                    o.reader.skipBytes(t)
                                }
                            }
                            break;
                        default:
                            return console.error("Unrecognized event type: " + r), void this.gt()
                        }!S && o.reader.hasMore() ? o.nextEventMidiTick = E + o.reader.readMidiVariableLength() : (o.ended = !0, l && ++h < n.length && (a[0] = h, n[h].nextEventMidiTick += E, e = Math.min(e, n[h].nextEventMidiTick), i = !0))
                    }
                    o.ended || (i = !0, e = Math.min(e, o.nextEventMidiTick))
                }
                if (!i) break;
                E = e
            }
            const C = Math.max(t.Config.tempoMin, Math.min(t.Config.tempoMax, Math.round(6e7 / w))),
                S = r / t.Config.partsPerBeat,
                q = t.Config.partsPerBeat * k,
                P = Math.ceil(E / S / q);

            function N(t) {
                return Math.round(t / S)
            }
            let T = x;
            for (M && (T += 3), 1 == (1 & T) && (T += 6); T < 0;) T += 12;
            T %= 12;
            const F = [],
                B = [],
                z = [];
            for (let e = 0; e < 16; e++) {
                if (0 == b[e].length) continue;
                const i = new t.Channel,
                    s = t.EditorConfig.midiProgramToPresetValue(b[e][0].program),
                    n = null == s ? null : t.EditorConfig.valueToPreset(s),
                    o = 9 == e,
                    h = o || null != n && 1 == n.isNoise,
                    a = null != n && 1 == n.isMod,
                    l = h ? t.Config.spectrumBasePitch : t.Config.keys[T].basePitch,
                    c = h ? t.Config.noiseInterval : 1,
                    d = h ? .5 : 1,
                    m = h ? t.Config.drumCount - 1 : t.Config.maxPitch;
                h ? o ? B.unshift(i) : B.push(i) : a ? z.push(i) : F.push(i);
                let f = 1,
                    u = 0,
                    p = 0,
                    y = t.Config.panCenter;
                if (o) {
                    const s = [];
                    let n = -1,
                        o = null,
                        r = 0,
                        h = !1;
                    const a = t.EditorConfig.nameToPresetValue("standard drumset"),
                        l = t.EditorConfig.valueToPreset(a),
                        c = new t.Instrument(!1, !1);
                    c.fromJsonObject(l.settings, !1, !1), c.preset = a, i.instruments.push(c);
                    for (let a = 0; a <= b[e].length; a++) {
                        const l = a == b[e].length ? null : b[e][a],
                            d = null == l ? Number.MAX_SAFE_INTEGER : N(l.midiTick);
                        if (s.length > 0 && d > r && (null == l || l.on)) {
                            const e = Math.floor(r / q),
                                a = e * q;
                            if (n != e || null == o) {
                                for (n++; n < e;) i.bars[n] = 0, n++;
                                o = new t.Pattern, i.patterns.push(o), i.bars[n] = i.patterns.length, o.instrument = 0
                            }(!h || c.volume > p) && (c.volume = p, c.pan = y, h = !0);
                            const l = [];
                            let u = m,
                                b = 0,
                                g = 1;
                            for (const e of s) {
                                const i = t.analogousDrumMap[e]; - 1 == l.indexOf(i.frequency) && l.push(i.frequency), g = Math.max(g, Math.round(i.volume * f)), u = Math.min(u, i.duration), b = Math.max(b, i.duration)
                            }
                            const v = Math.min(b, Math.max(u, 2)),
                                w = r - a,
                                k = Math.min(q, Math.min(d - a, w + 6 * v)),
                                x = new t.Note(-1, w, k, g, !0);
                            x.pitches.length = 0;
                            for (let e = 0; e < Math.min(t.Config.maxChordSize, l.length); e++) {
                                const i = l[e + Math.max(0, l.length - t.Config.maxChordSize)]; - 1 == x.pitches.indexOf(i) && x.pitches.push(i)
                            }
                            o.notes.push(x), s.length = 0
                        }
                        null != l && l.on && void 0 != t.analogousDrumMap[l.pitch] && (s.push(l.pitch), r = d, f = l.velocity, p = l.instrumentVolume, y = l.instrumentPan)
                    }
                } else {
                    let s = 0,
                        n = 3,
                        o = 0,
                        w = 0;

                    function R(t) {
                        for (; o < g[e].length && g[e][o].midiTick <= t;) s = g[e][o].interval, o++
                    }

                    function L(t) {
                        for (; w < v[e].length && v[e][w].midiTick <= t;) n = v[e][w].volume, w++
                    }
                    const x = [],
                        M = [];
                    let E = -1,
                        C = null,
                        P = 0,
                        T = 0,
                        F = 0,
                        B = 0;
                    for (let o of b[e]) {
                        const e = o.midiTick,
                            b = N(e);
                        if (M.length > 0 && b > T) {
                            const o = Math.floor(T / q),
                                g = Math.ceil(b / q);
                            for (let v = o; v < g; v++) {
                                const o = v * q,
                                    g = v * k * r,
                                    w = (v + 1) * k * r,
                                    N = Math.max(0, T - o),
                                    z = Math.min(q, b - o),
                                    A = Math.max(g, P),
                                    H = Math.min(w, e);
                                if (N < z) {
                                    const e = t.EditorConfig.midiProgramToPresetValue(u),
                                        r = null == e ? null : t.EditorConfig.valueToPreset(e);
                                    if (E != v || null == C) {
                                        for (E++; E < v;) i.bars[E] = 0, E++;
                                        if (C = new t.Pattern, i.patterns.push(C), i.bars[E] = i.patterns.length, void 0 == x[u]) {
                                            const s = new t.Instrument(h, a);
                                            x[u] = s, null != e && null != r && 1 == r.isNoise == h ? (s.fromJsonObject(r.settings, h, a), s.preset = e) : (s.setTypeAndReset(a ? 8 : h ? 2 : 0, h, a), s.chord = 0), s.volume = p, s.pan = y, i.instruments.push(s)
                                        }
                                        C.instrument = i.instruments.indexOf(x[u])
                                    }
                                    void 0 != x[u] && (x[u].volume = Math.min(x[u].volume, p), x[u].pan = Math.min(x[u].pan, y));
                                    const b = new t.Note(-1, N, z, 3, !1);
                                    b.pins.length = 0, R(A), L(A);
                                    const g = M[0] * d - l,
                                        w = Math.round((g + s) / c),
                                        k = Math.round(s - l);
                                    let q = t.makeNotePin(0, 0, Math.round(f * n));
                                    b.pins.push(q);
                                    const P = [{
                                        part: 0,
                                        pitch: w,
                                        volume: q.volume,
                                        keyPitch: !1,
                                        keyVolume: !1
                                    }];
                                    let T = 0,
                                        $ = (g + s) / c,
                                        D = f * n;
                                    for (let e = N + 1; e <= z; e++) {
                                        const i = Math.max(A, Math.min(H - 1, Math.round(S * (e + o)))),
                                            r = e - N,
                                            h = e == z;
                                        R(i), L(i);
                                        const a = (s + g) / c,
                                            l = f * n,
                                            d = Math.round(a),
                                            m = Math.abs(a - d) < .01,
                                            u = Math.abs($ - Math.round($)) < .01 ? Math.abs(a - $) >= 1 : Math.floor(a) != Math.floor($),
                                            p = m || u,
                                            y = Math.round(l),
                                            v = Math.abs(l - y) < .01,
                                            k = Math.abs(D - Math.round(D)) ? Math.abs(l - D) >= 1 : Math.floor(l) != Math.floor(D),
                                            x = v || k;
                                        if ($ = a, D = l, p || x || h) {
                                            const e = {
                                                    part: r,
                                                    pitch: d,
                                                    volume: y,
                                                    keyPitch: p || h,
                                                    keyVolume: x || h
                                                },
                                                i = P[T];
                                            let s = !1,
                                                n = Number.MAX_VALUE;
                                            if (e.keyPitch) {
                                                const t = (e.pitch - i.pitch) / (e.part - i.part);
                                                let o = Math.abs(t),
                                                    r = !1,
                                                    h = Number.MAX_VALUE;
                                                for (let e = T + 1; e < P.length; e++) {
                                                    const s = P[e];
                                                    if (s.keyPitch) {
                                                        const n = i.pitch + t * (s.part - i.part),
                                                            a = Math.abs(n - s.pitch);
                                                        o < a && (o = a, r = !0, h = e)
                                                    }
                                                }
                                                r && (s = !0, n = Math.min(n, h))
                                            }
                                            if (e.keyVolume) {
                                                const t = (e.volume - i.volume) / (e.part - i.part);
                                                let o = Math.abs(t),
                                                    r = !1,
                                                    h = Number.MAX_VALUE;
                                                for (let e = T + 1; e < P.length; e++) {
                                                    const s = P[e];
                                                    if (s.keyVolume) {
                                                        const n = i.volume + t * (s.part - i.part),
                                                            a = Math.abs(n - s.volume);
                                                        o < a && (o = a, r = !0, h = e)
                                                    }
                                                }
                                                r && (s = !0, n = Math.min(n, h))
                                            }
                                            if (s) {
                                                const e = P[n];
                                                b.pins.push(t.makeNotePin(e.pitch - w, e.part, e.volume)), T = n
                                            }
                                            P.push(e)
                                        }
                                    }
                                    const I = P[P.length - 1];
                                    b.pins.push(t.makeNotePin(I.pitch - w, I.part, I.volume));
                                    let _ = m,
                                        O = 0;
                                    for (const t of b.pins) _ = Math.min(_, m - t.interval), O = Math.min(O, -t.interval);
                                    b.pitches.length = 0;
                                    for (let e = 0; e < Math.min(t.Config.maxChordSize, M.length); e++) {
                                        let i = M[e + Math.max(0, M.length - t.Config.maxChordSize)] * d;
                                        null != r && void 0 != r.midiSubharmonicOctaves && (i -= 12 * r.midiSubharmonicOctaves);
                                        const s = Math.max(O, Math.min(_, Math.round((i + k) / c)));
                                        if (-1 == b.pitches.indexOf(s)) {
                                            b.pitches.push(s);
                                            const t = b.end - b.start;
                                            F += s * t, B += t
                                        }
                                    }
                                    C.notes.push(b)
                                }
                            }
                        } - 1 != M.indexOf(o.pitch) && M.splice(M.indexOf(o.pitch), 1), o.on && (M.push(o.pitch), f = o.velocity, u = o.program, p = o.instrumentVolume, y = o.instrumentPan), P = e, T = b
                    }
                    const z = F / B;
                    i.octave = h || a ? 0 : Math.max(0, Math.min(this.yt.scrollableOctaves, Math.round(z / 12 - 1.5)))
                }
                for (; i.bars.length < P;) i.bars.push(0)
            }

            function A(t, e) {
                for (; t.length > e;) {
                    let e = t.length - 2,
                        i = t.length - 1,
                        s = Number.MAX_VALUE,
                        n = Number.MAX_VALUE;
                    for (let o = 0; o < t.length - 1; o++)
                        for (let r = o + 1; r < t.length; r++) {
                            const h = t[o],
                                a = t[r];
                            let l = 0,
                                c = 0;
                            for (let t = 0; t < h.bars.length && t < a.bars.length; t++) 0 != h.bars[t] && 0 != a.bars[t] && l++, 0 == h.bars[t] && 0 == a.bars[t] && c++;
                            l <= s && (l < s || c < n) && (e = o, i = r, s = l, n = c)
                        }
                    const o = t[e],
                        r = t[i],
                        h = o.instruments.length,
                        a = o.patterns.length;
                    for (const t of r.instruments) o.instruments.push(t);
                    for (const t of r.patterns) t.instrument += h, o.patterns.push(t);
                    for (let t = 0; t < o.bars.length && t < r.bars.length; t++) 0 == o.bars[t] && 0 != r.bars[t] && (o.bars[t] = r.bars[t] + a);
                    t.splice(i, 1)
                }
            }
            A(F, t.Config.pitchChannelCountMax), A(B, t.Config.noiseChannelCountMax), A(z, t.Config.modChannelCountMax), this.yt.goBackToStart();
            for (const t of this.yt.song.channels) t.muted = !1;
            this.yt.prompt = null, this.yt.record(new class extends t.ChangeGroup {
                constructor(e) {
                    super();
                    const i = e.song;
                    i.tempo = C, i.beatsPerBar = k, i.key = T, i.scale = 11, i.reverb = 1, i.rhythm = 1, t.removeDuplicatePatterns(F), t.removeDuplicatePatterns(B), t.removeDuplicatePatterns(z), this.append(new t.ChangeReplacePatterns(e, F, B, z)), i.loopStart = 0, i.loopLength = i.barCount, this.wt(), e.notifier.changed()
                }
            }(this.yt), 0, !0)
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        h2: s,
        select: n,
        option: o
    } = t.HTML;
    t.ThemePrompt = class {
        constructor(r) {
            this.yt = r, this.$o = n({
                style: "width: 100%;"
            }, o({
                value: "dark classic"
            }, "BeepBox Dark"), o({
                value: "light classic"
            }, "BeepBox Light"), o({
                value: "dark competition"
            }, "BeepBox Competition Dark"), o({
                value: "jummbox classic"
            }, "JummBox Dark"), o({
                value: "forest"
            }, "Forest"),o({
                value: "blu default"
            }, "Blu Default"), o({
                value: "canyon"
            }, "Canyon")), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 220px;"
            }, s("Set Theme"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.$o)), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                window.localStorage.setItem("colorTheme", this.$o.value), this.yt.prompt = null, this.yt.colorTheme = this.$o.value, t.ColorConfig.setTheme(this.$o.value), this.yt.undo()
            });
            const h = window.localStorage.getItem("colorTheme");
            null != h && (this.$o.value = h), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.container.addEventListener("keydown", this.ao)
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        h2: s,
        input: n,
        select: o,
        option: r
    } = t.HTML;
    class h {
        constructor(a) {
            this.yt = a, this.Do = n({
                style: "width: 3em; margin-left: 1em;",
                type: "number",
                step: "1",
                value: "0"
            }), this.Io = o({
                style: "width: 100%;"
            }, r({
                value: "normal"
            }, "Normal Layout"), r({
                value: "fullscreen"
            }, "Full-screen Layout"), r({
                value: "widefullscreen"
            }, "Wide Full-screen Layout")), this.so = e({
                className: "cancelButton"
            }), this.no = e({
                className: "okayButton",
                style: "width:45%;"
            }, "Okay"), this.container = i({
                className: "prompt noSelection",
                style: "width: 250px;"
            }, s("Set Layout"), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                style: "text-align: right;"
            }, "Extra View Octaves:"), this.Do), i({
                style: "display: flex; flex-direction: row; align-items: center; height: 2em; justify-content: flex-end;"
            }, i({
                className: "selectContainer",
                style: "width: 100%;"
            }, this.Io)), i({
                style: "display: flex; flex-direction: row-reverse; justify-content: space-between;"
            }, this.no), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.no.removeEventListener("click", this.oo), this.so.removeEventListener("click", this.gt), this.Do.removeEventListener("blur", h.ho), this.container.removeEventListener("keydown", this.ao)
            }), this.ao = (t => {
                "BUTTON" != t.target.tagName && 13 == t.keyCode && this.oo()
            }), this.oo = (() => {
                window.localStorage.setItem("fullScreen", this.Io.value), window.localStorage.setItem("extraOctaves", this.Do.value), this.yt.prompt = null, this.yt.fullScreen = this.Io.value, t.Layout.setFullScreen(this.yt.fullScreen), this.yt.windowOctaves = +(window.localStorage.getItem("extraOctaves") || "0") + 3, this.yt.scrollableOctaves = t.Config.pitchOctaves - this.yt.windowOctaves, this.yt.windowPitchCount = this.yt.windowOctaves * t.Config.pitchesPerOctave + 1, this.yt.undo()
            }), this.Do.min = "0", this.Do.max = "2";
            const l = window.localStorage.getItem("extraOctaves");
            null != l && (this.Do.value = l);
            const c = window.localStorage.getItem("fullScreen");
            null != c && (this.Io.value = c), this.Do.select(), setTimeout(() => this.Do.focus()), this.no.addEventListener("click", this.oo), this.so.addEventListener("click", this.gt), this.Do.addEventListener("blur", h.ho), this.container.addEventListener("keydown", this.ao)
        }
        static ho(t) {
            const e = t.target;
            let i = +e.value;
            e.value = Math.max(+e.min, Math.min(+e.max, i)) + ""
        }
    }
    t.LayoutPrompt = h
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        h2: s,
        p: n,
        select: o,
        option: r,
        iframe: h
    } = t.HTML;
    t.SongRecoveryPrompt = class {
        constructor(a) {
            this.yt = a, this._o = i(), this.so = e({
                className: "cancelButton"
            }), this.container = i({
                className: "prompt",
                style: "width: 300px;"
            }, s("Song Recovery"), i({
                style: "max-height: 385px; overflow-y: auto;"
            }, n("This is a TEMPORARY list of songs you have recently modified. Please keep your own backups of songs you care about!"), this._o, n('(If "Display Song Data in URL" is enabled in your preferences, then you may also be able to find song versions in your browser history. However, song recovery won\'t work if you were browsing in private/incognito mode.)')), this.so), this.gt = (() => {
                this.yt.undo()
            }), this.cleanUp = (() => {
                this.so.removeEventListener("click", this.gt)
            }), this.so.addEventListener("click", this.gt);
            const l = t.SongRecovery.getAllRecoveredSongs();
            0 == l.length && this._o.appendChild(n("There are no recovered songs available yet. Try making a song!"));
            for (const e of l) {
                const s = o({
                    style: "width: 100%;"
                });
                for (const t of e.versions) s.appendChild(r({
                    value: t.time
                }, new Date(t.time).toLocaleString()));
                const n = h({
                    style: "width: 100%; height: 60px; border: none; display: block;"
                });
                n.src = "player/#song=" + window.localStorage.getItem(t.versionToKey(e.versions[0]));
                const a = i({
                    style: "margin: 4px 0;"
                }, i({
                    className: "selectContainer",
                    style: "width: 100%; margin: 2px 0;"
                }, s), n);
                this._o.appendChild(a), s.addEventListener("change", () => {
                    const i = e.versions[s.selectedIndex];
                    n.contentWindow.location.replace("player/#song=" + window.localStorage.getItem(t.versionToKey(i))), n.contentWindow.dispatchEvent(new Event("hashchange"))
                })
            }
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const {
        button: e,
        div: i,
        input: s,
        select: n,
        span: o,
        optgroup: r,
        option: h,
        canvas: a
    } = t.HTML;

    function l(t, e) {
        for (let i = 0; i < e.length; i++) t.appendChild(h({
            value: i
        }, e[i]));
        return t
    }

    function c(e, i) {
        const s = n({
            id: i
        });
        e ? (s.appendChild(h({
            value: 2
        }, t.EditorConfig.valueToPreset(2).name)), s.appendChild(h({
            value: 3
        }, t.EditorConfig.valueToPreset(3).name)), s.appendChild(h({
            value: 4
        }, t.EditorConfig.valueToPreset(4).name))) : (s.appendChild(h({
            value: 0
        }, t.EditorConfig.valueToPreset(0).name)), s.appendChild(h({
            value: 6
        }, t.EditorConfig.valueToPreset(6).name)), s.appendChild(h({
            value: 5
        }, t.EditorConfig.valueToPreset(5).name)), s.appendChild(h({
            value: 3
        }, t.EditorConfig.valueToPreset(3).name)), s.appendChild(h({
            value: 1
        }, t.EditorConfig.valueToPreset(1).name)), s.appendChild(h({
            value: 7
        }, t.EditorConfig.valueToPreset(7).name)));
        const o = r({
            label: "Randomize ▾"
        });
        o.appendChild(h({
            value: "randomPreset"
        }, "Random Preset")), o.appendChild(h({
            value: "randomGenerated"
        }, "Random Generated")), s.appendChild(o);
        for (let i = 1; i < t.EditorConfig.presetCategories.length; i++) {
            const n = t.EditorConfig.presetCategories[i],
                o = r({
                    label: n.name + " ▾"
                });
            let a = !1;
            for (let t = 0; t < n.presets.length; t++) {
                const s = n.presets[t];
                1 == s.isNoise == e && (o.appendChild(h({
                    value: (i << 6) + t
                }, s.name)), a = !0)
            }
            if ("String Presets" == n.name && a) {
                let t = o.removeChild(o.children[11]);
                o.insertBefore(t, o.children[1])
            }
            if ("Flute Presets" == n.name && a) {
                let t = o.removeChild(o.children[11]);
                o.insertBefore(t, o.children[1])
            }
            if ("Keyboard Presets" == n.name && a) {
                let t = o.removeChild(o.children[9]);
                o.insertBefore(t, o.children[1])
            }
            a && s.appendChild(o)
        }
        return s
    }

    function d(t, e) {
        const i = e.toString();
        t.value != i && (t.value = i), $(t).data("select2") && $(t).val(e).trigger("change.select2")
    }
    class m {
        constructor(e, i, s) {
            this.canvas = e, this.yt = i, this.Oo = s, this.Ws = null, this.Uo = (e => {
                if (this.mouseDown) {
                    var i = (e.clientX || e.pageX) - this.canvas.getBoundingClientRect().left,
                        s = Math.floor((e.clientY || e.pageY) - this.canvas.getBoundingClientRect().top);
                    s < 2 && (s = 2), s > 50 && (s = 50);
                    var n = this.canvas.getContext("2d");
                    if (1 == this.continuousEdit && Math.abs(this.lastX - i) < 40) {
                        var o = i < this.lastX ? i : this.lastX,
                            r = i < this.lastX ? this.lastX : i;
                        for (let e = o; e <= r; e += 2) {
                            var h = Math.abs(i - this.lastX) > 2 ? i > this.lastX ? 1 - (e - o) / (r - o) : (e - o) / (r - o) : 0,
                                a = Math.round(s + (this.lastY - s) * h);
                            n.fillStyle = t.ColorConfig.getComputed("--editor-background"), n.fillRect(2 * Math.floor(e / 2), 0, 2, 53), n.fillStyle = t.ColorConfig.getComputed("--ui-widget-background"), n.fillRect(2 * Math.floor(e / 2), 25, 2, 2), n.fillStyle = t.ColorConfig.getComputed("--track-editor-bg-pitch-dim"), n.fillRect(2 * Math.floor(e / 2), 13, 2, 1), n.fillRect(2 * Math.floor(e / 2), 39, 2, 1), n.fillStyle = t.ColorConfig.getComputedChannelColor(this.yt.song, this.yt.channel).primaryNote, n.fillRect(2 * Math.floor(e / 2), a - 2, 2, 4), this.newArray[Math.floor(e / 2)] = a - 26
                        }
                    } else n.fillStyle = t.ColorConfig.getComputed("--editor-background"), n.fillRect(2 * Math.floor(i / 2), 0, 2, 52), n.fillStyle = t.ColorConfig.getComputed("--ui-widget-background"), n.fillRect(2 * Math.floor(i / 2), 25, 2, 2), n.fillStyle = t.ColorConfig.getComputed("--track-editor-bg-pitch-dim"), n.fillRect(2 * Math.floor(i / 2), 13, 2, 1), n.fillRect(2 * Math.floor(i / 2), 39, 2, 1), n.fillStyle = t.ColorConfig.getComputedChannelColor(this.yt.song, this.yt.channel).primaryNote, n.fillRect(2 * Math.floor(i / 2), s - 2, 2, 4), this.newArray[Math.floor(i / 2)] = s - 26;
                    this.continuousEdit = !0, this.lastX = i, this.lastY = s;
                    let l = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                        c = 0;
                    for (let t = 0; t < this.newArray.length; t++) c += this.newArray[t];
                    const d = c / this.newArray.length;
                    let m = 0,
                        f = 0;
                    for (let t = 0; t < this.newArray.length; t++) m += f, f = this.newArray[t] - d, l.customChipWaveIntegral[t] = m;
                    l.customChipWaveIntegral[64] = 0
                }
            }), this.Vo = (t => {
                this.mouseDown = !0, this.Uo(t)
            }), this.jo = (() => {
                this.mouseDown = !1, this.continuousEdit = !1, this.Wo()
            }), this.Wo = (() => {
                this.Ws = this.Oo(this.newArray), this.yt.record(this.Ws), this.Ws = null
            }), e.addEventListener("mousemove", this.Uo), e.addEventListener("mousedown", this.Vo), e.addEventListener("mouseup", this.jo), e.addEventListener("mouseleave", this.jo), this.mouseDown = !1, this.continuousEdit = !1, this.lastX = 0, this.lastY = 0, this.newArray = new Float64Array(64), this.redrawCanvas()
        }
        redrawCanvas() {
            var e = this.canvas.getContext("2d");
            e.fillStyle = t.ColorConfig.getComputed("--editor-background"), e.fillRect(0, 0, 128, 52), e.fillStyle = t.ColorConfig.getComputed("--ui-widget-background"), e.fillRect(0, 25, 128, 2), e.fillStyle = t.ColorConfig.getComputed("--track-editor-bg-pitch-dim"), e.fillRect(0, 13, 128, 1), e.fillRect(0, 39, 128, 1), e.fillStyle = t.ColorConfig.getComputedChannelColor(this.yt.song, this.yt.channel).primaryNote;
            for (let t = 0; t < 64; t++) {
                var i = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].customChipWave[t] + 26;
                e.fillRect(2 * t, i - 2, 2, 4), this.newArray[t] = i - 26
            }
        }
    }
    class f {
        constructor(t, e, i) {
            this.input = t, this.yt = e, this.Oo = i, this.Ws = null, this.Go = "", this.Ko = "", this.Jo = (() => {
                this.yt.lastChangeWas(this.Ws) || (this.Ko = this.Go), this.Ws = this.Oo(this.Ko, this.input.value), this.yt.setProspectiveChange(this.Ws)
            }), this.Wo = (() => {
                this.yt.record(this.Ws), this.Ws = null
            }), t.addEventListener("input", this.Jo), t.addEventListener("change", this.Wo)
        }
        updateValue(t) {
            this.Go = t, this.input.value = String(t)
        }
    }
    class u {
        constructor(t, e, i, s) {
            this.input = t, this.yt = e, this.Oo = i, this.Ws = null, this.Go = 0, this.Ko = 0, this.Jo = (() => {
                this.yt.lastChangeWas(this.Ws) || (this.Ko = this.Go), null != this.Oo && (this.Ws = this.Oo(this.Ko, parseInt(this.input.value)), this.yt.setProspectiveChange(this.Ws))
            }), this.Wo = (() => {
                null != this.Oo && (this.yt.record(this.Ws), this.Ws = null)
            }), this.container = o(s ? {
                className: "midTick",
                style: "position: sticky;"
            } : {
                style: "position: sticky;"
            }, t), t.addEventListener("input", this.Jo), t.addEventListener("change", this.Wo)
        }
        updateValue(t) {
            this.Go = t, this.input.value = String(t)
        }
    }
    t.SongEditor = class {
        constructor(p) {
            this.yt = p, this.prompt = null, this.Yo = new t.PatternEditor(this.yt, !1, -1), this.Zo = new t.PatternEditor(this.yt, !0, 0), this.Qo = new t.PatternEditor(this.yt, !1, 1), this.Xo = new t.MuteEditor(this.yt), this.tr = new t.TrackEditor(this.yt, this), this.er = new t.LoopEditor(this.yt), this.Nn = new t.Piano(this.yt), this.ir = new t.OctaveScrollBar(this.yt, this.Nn), this.sr = e({
                style: "width: 80px;",
                type: "button"
            }), this.nr = e({
                className: "prevBarButton",
                style: "width: 40px;",
                type: "button",
                title: "Previous Bar (left bracket)"
            }), this.or = e({
                className: "nextBarButton",
                style: "width: 40px;",
                type: "button",
                title: "Next Bar (right bracket)"
            }), this.rr = new u(s({
                title: "main volume",
                style: "width: 5em; flex-grow: 1; margin: 0;",
                type: "range",
                min: "0",
                max: "75",
                value: "50",
                step: "1"
            }), this.yt, null, !1), this.hr = n({
                style: "width: 100%;"
            }, h({
                selected: !0,
                disabled: !0,
                hidden: !1
            }, "File"), h({
                value: "new"
            }, "+ New Blank Song"), h({
                value: "import"
            }, "↑ Import Song..."), h({
                value: "export"
            }, "↓ Export Song..."), h({
                value: "copyUrl"
            }, "⎘ Copy Song URL"), h({
                value: "shareUrl"
            }, "⤳ Share Song URL"), h({
                value: "viewPlayer"
            }, "▶ View in Song Player"), h({
                value: "copyEmbed"
            }, "⎘ Copy HTML Embed Code"), h({
                value: "songRecovery"
            }, "⚠ Recover Recent Song...")), this.ar = n({
                style: "width: 100%;"
            }, h({
                selected: !0,
                disabled: !0,
                hidden: !1
            }, "Edit"), h({
                value: "undo"
            }, "Undo (Z)"), h({
                value: "redo"
            }, "Redo (Y)"), h({
                value: "copy"
            }, "Copy Pattern (C)"), h({
                value: "pasteNotes"
            }, "Paste Pattern Notes (V)"), h({
                value: "pasteNumbers"
            }, "Paste Pattern Numbers (⇧V)"), h({
                value: "insertBars"
            }, "Insert Bar After Selection (⏎)"), h({
                value: "deleteBars"
            }, "Delete Selected Bar (⌫)"), h({
                value: "selectAll"
            }, "Select All (A)"), h({
                value: "selectChannel"
            }, "Select Channel (⇧A)"), h({
                value: "duplicatePatterns"
            }, "Duplicate Reused Patterns (D)"), h({
                value: "transposeUp"
            }, "Move Notes Up (+)"), h({
                value: "transposeDown"
            }, "Move Notes Down (-)"), h({
                value: "moveNotesSideways"
            }, "Move All Notes Sideways..."), h({
                value: "beatsPerBar"
            }, "Change Beats Per Bar..."), h({
                value: "barCount"
            }, "Change Song Length..."), h({
                value: "channelSettings"
            }, "Channel Settings...")), this.lr = n({
                style: "width: 100%;"
            }, h({
                selected: !0,
                disabled: !0,
                hidden: !1
            }, "Preferences"), h({
                value: "autoPlay"
            }, "Auto Play On Load"), h({
                value: "autoFollow"
            }, "Auto Follow Track"), h({
                value: "enableNotePreview"
            }, "Preview Added Notes"), h({
                value: "showLetters"
            }, "Show Piano Keys"), h({
                value: "showFifth"
            }, 'Highlight "Fifth" Notes'), h({
                value: "showChannels"
            }, "Show All Channels"), h({
                value: "showScrollBar"
            }, "Octave Scroll Bar"), h({
                value: "alwaysFineNoteVol"
            }, "Always Fine Note Vol."), h({
                value: "enableChannelMuting"
            }, "Enable Channel Muting"), h({
                value: "displayBrowserUrl"
            }, "Display Song Data in URL"), h({
                value: "fullScreen"
            }, "Full-Screen Layout"), h({
                value: "colorTheme"
            }, "Set Theme...")), this.cr = l(n(), t.Config.scales.map(t => t.name)), this.dr = l(n(), t.Config.keys.map(t => t.name).reverse()), this.mr = new u(s({
                style: "margin: 0; vertical-align: middle;",
                type: "range",
                min: "30",
                max: "320",
                value: "160",
                step: "1"
            }), this.yt, (e, i) => new t.ChangeTempo(this.yt, e, i), !1), this.ur = s({
                style: "width: 4em; font-size: 80%; margin-left: 0.4em; vertical-align: middle;",
                type: "number",
                step: "1"
            }), this.pr = new u(s({
                style: "margin: 0;",
                type: "range",
                min: "0",
                max: t.Config.reverbRange - 1,
                value: "0",
                step: "1"
            }), this.yt, (e, i) => new t.ChangeReverb(this.yt, e, i), !1), this.yr = l(n(), t.Config.rhythms.map(t => t.name)), this.gr = c(!1, "pitchPresetSelect"), this.vr = c(!0, "drumPresetSelect"), this.wr = l(n(), t.Config.algorithms.map(t => t.name)), this.kr = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("algorithm")
            }, "Algorithm: "), i({
                className: "selectContainer"
            }, this.wr)), this.Mr = n(), this.Er = i({
                className: "selectRow",
                style: "display: none;"
            }, o({
                class: "tip",
                onclick: () => this.xr("instrumentIndex")
            }, "Instrument: "), i({
                className: "selectContainer"
            }, this.Mr)), this.Cr = new u(s({
                style: "margin: 0; position: sticky;",
                type: "range",
                min: Math.floor(-t.Config.volumeRange / 2),
                max: Math.floor(t.Config.volumeRange / 2),
                value: "0",
                step: "1"
            }), this.yt, (e, i) => new t.ChangeVolume(this.yt, e, i), !0), this.Sr = s({
                style: "width: 4em; font-size: 80%",
                id: "volumeSliderInputBox",
                type: "number",
                step: "1",
                min: Math.floor(-t.Config.volumeRange / 2),
                max: Math.floor(t.Config.volumeRange / 2),
                value: "0"
            }), this.qr = i({
                className: "selectRow",
                style: "height: 1em"
            }, o({
                class: "tip",
                style: "font-size: smaller;",
                onclick: () => this.xr("instrumentVolume")
            }, "Volume: ")), this.Pr = i({
                className: "selectRow"
            }, i({}, i({
                style: "color: " + t.ColorConfig.secondaryText + ";"
            }, o({
                class: "tip"
            }, this.qr)), i({
                style: "color: " + t.ColorConfig.secondaryText + "; margin-top: -3px;"
            }, this.Sr)), this.Cr.container), this.Nr = new u(s({
                style: "margin: 0;",
                position: "sticky;",
                type: "range",
                min: "0",
                max: t.Config.panMax,
                value: t.Config.panCenter,
                step: "1"
            }), this.yt, (e, i) => new t.ChangePan(this.yt, e, i), !0), this.Tr = s({
                style: "width: 4em; font-size: 80%; ",
                id: "panSliderInputBox",
                type: "number",
                step: "1",
                min: "0",
                max: "100",
                value: "0"
            }), this.Fr = i({
                className: "selectRow"
            }, i({}, o({
                class: "tip",
                style: "height:1em; font-size: smaller;",
                onclick: () => this.xr("pan")
            }, "Pan: "), i({
                style: "color: " + t.ColorConfig.secondaryText + "; margin-top: -3px;"
            }, this.Tr)), this.Nr.container), this.Br = new u(s({
                style: "margin: 0;",
                type: "range",
                min: t.Config.detuneMin,
                max: t.Config.detuneMax,
                value: 0,
                step: "1"
            }), this.yt, (e, i) => new t.ChangeDetune(this.yt, e, i), !0), this.zr = s({
                style: "width: 4em; font-size: 80%; ",
                id: "detuneSliderInputBox",
                type: "number",
                step: "1",
                min: "" + t.Config.detuneMin,
                max: "" + t.Config.detuneMax,
                value: "0"
            }), this.Rr = i({
                className: "selectRow"
            }, i({}, o({
                class: "tip",
                style: "height:1em; font-size: smaller;",
                onclick: () => this.xr("detune")
            }, "Detune: "), i({
                style: "color: " + t.ColorConfig.secondaryText + "; margin-top: -3px;"
            }, this.zr)), this.Br.container), this.Lr = l(n(), t.Config.chipWaves.map(t => t.name)), this.Ar = l(n(), t.Config.chipNoises.map(t => t.name)), this.Hr = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("chipWave")
            }, "Wave: "), i({
                className: "selectContainer"
            }, this.Lr)), this.$r = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("chipNoise")
            }, "Noise: "), i({
                className: "selectContainer"
            }, this.Ar)), this.Dr = l(n(), t.Config.transitions.map(t => t.name)), this.Ir = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("transition")
            }, "Transition:"), i({
                className: "selectContainer"
            }, this.Dr)), this._r = l(n(), t.Config.effectsNames), this.Or = new u(s({
                style: "margin: 0;",
                type: "range",
                min: "0",
                max: t.Config.filterCutoffRange - 1,
                value: "6",
                step: "1"
            }), this.yt, (e, i) => new t.ChangeFilterCutoff(this.yt, e, i), !1), this.Ur = i({
                className: "selectRow",
                title: "Low-pass Filter Cutoff Frequency"
            }, o({
                class: "tip",
                onclick: () => this.xr("filterCutoff")
            }, "Filter Cut:"), this.Or.container), this.Vr = new u(s({
                style: "margin: 0;",
                type: "range",
                min: "0",
                max: t.Config.filterResonanceRange - 1,
                value: "6",
                step: "1"
            }), this.yt, (e, i) => new t.ChangeFilterResonance(this.yt, e, i), !1), this.jr = i({
                className: "selectRow",
                title: "Low-pass Filter Peak Resonance"
            }, o({
                class: "tip",
                onclick: () => this.xr("filterResonance")
            }, "Filter Peak:"), this.Vr.container), this.Wr = l(n(), t.Config.envelopes.map(t => t.name)), this.Gr = i({
                className: "selectRow",
                title: "Low-pass Filter Envelope"
            }, o({
                class: "tip",
                onclick: () => this.xr("filterEnvelope")
            }, "Filter Env:"), i({
                className: "selectContainer"
            }, this.Wr)), this.Kr = l(n(), t.Config.envelopes.map(t => t.name)), this.Jr = i({
                className: "selectRow",
                title: "Pulse Width Modulator Envelope"
            }, o({
                class: "tip",
                onclick: () => this.xr("pulseEnvelope")
            }, "Pulse Env:"), i({
                className: "selectContainer"
            }, this.Kr)), this.Yr = new u(s({
                style: "margin: 0;",
                type: "range",
                min: "1",
                max: t.Config.pulseWidthRange,
                value: "0",
                step: "1"
            }), this.yt, (e, i) => new t.ChangePulseWidth(this.yt, e, i), !1), this.Zr = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("pulseWidth")
            }, "Pulse Width:"), this.Yr.container), this.Qr = l(n(), t.Config.intervals.map(t => t.name)), this.Xr = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("interval")
            }, "Interval:"), i({
                className: "selectContainer"
            }, this.Qr)), this.th = l(n(), t.Config.chords.map(t => t.name)), this.eh = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("chords")
            }, "Chords:"), i({
                className: "selectContainer"
            }, this.th)), this.ih = l(n(), t.Config.vibratos.map(t => t.name)), this.sh = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("vibrato")
            }, "Vibrato:"), i({
                className: "selectContainer"
            }, this.ih)), this.nh = i({
                className: "editor-controls"
            }), this.oh = l(n(), t.Config.feedbacks.map(t => t.name)), this.rh = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("feedbackType")
            }, "Feedback:"), i({
                className: "selectContainer"
            }, this.oh)), this.hh = new t.SpectrumEditor(this.yt, null), this.ah = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("spectrum")
            }, "Spectrum:"), this.hh.container), this.lh = new t.HarmonicsEditor(this.yt), this.dh = i({
                className: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("harmonics")
            }, "Harmonics:"), this.lh.container), this.mh = i({
                className: "editor-controls"
            }), this.fh = i({
                className: "editor-controls"
            }), this.uh = e({
                style: "max-width:86px;",
                className: "copyButton"
            }, ["Copy", t.SVG.svg({
                style: "flex-shrink: 0; position: absolute; left: 0; top: 50%; margin-top: -1em; pointer-events: none;",
                width: "2em",
                height: "2em",
                viewBox: "-5 -21 26 26"
            }, [t.SVG.path({
                d: "M 0 -15 L 1 -15 L 1 0 L 13 0 L 13 1 L 0 1 L 0 -15 z M 2 -1 L 2 -17 L 10 -17 L 14 -13 L 14 -1 z M 3 -2 L 13 -2 L 13 -12 L 9 -12 L 9 -16 L 3 -16 z",
                fill: "currentColor"
            })])]), this.ph = e({
                style: "max-width:86px;",
                className: "pasteButton"
            }, ["Paste", t.SVG.svg({
                style: "flex-shrink: 0; position: absolute; left: 0; top: 50%; margin-top: -1em; pointer-events: none;",
                width: "2em",
                height: "2em",
                viewBox: "0 0 26 26"
            }, [t.SVG.path({
                d: "M 8 18 L 6 18 L 6 5 L 17 5 L 17 7 M 9 8 L 16 8 L 20 12 L 20 22 L 9 22 z",
                stroke: "currentColor",
                fill: "none"
            }), t.SVG.path({
                d: "M 9 3 L 14 3 L 14 6 L 9 6 L 9 3 z M 16 8 L 20 12 L 16 12 L 16 8 z",
                fill: "currentColor"
            })])]), this.yh = new m(a({
                width: 128,
                height: 52,
                style: "border:2px solid " + t.ColorConfig.uiWidgetBackground,
                id: "customWaveDrawCanvas"
            }), this.yt, e => new t.ChangeCustomWave(this.yt, e)), this.bh = function(t, e, i) {
                e.appendChild(h({
                    selected: !0,
                    disabled: !0,
                    value: t
                }, t));
                for (const t of i) e.appendChild(h({
                    value: t
                }, t));
                return e
            }("Load Preset", n({
                style: "width: 50%; height:1.5em; text-align: center; text-align-last: center;"
            }), t.Config.chipWaves.map(t => t.name)), this.gh = i({
                style: "height:80px; margin-top:10px; margin-bottom:5px"
            }, [i({
                style: "height:54px; display:flex; justify-content:center;"
            }, [this.yh.canvas]), i({
                style: "margin-top:5px; display:flex; justify-content:center;"
            }, [this.bh])]), this.vh = new f(s({
                style: "font-weight:bold; border:none; width: 100%; background-color:${ColorConfig.editorBackground}; color:${ColorConfig.primaryText}; text-align:center",
                maxlength: "30",
                type: "text",
                value: t.Config.versionDisplayName
            }), this.yt, (e, i) => new t.ChangeInputBoxText(this.yt, e, i)), this.wh = new u(s({
                style: "margin: 0; width: 4em;",
                type: "range",
                min: "0",
                max: t.Config.operatorAmplitudeMax,
                value: "0",
                step: "1",
                title: "Feedback Amplitude"
            }), this.yt, (e, i) => new t.ChangeFeedbackAmplitude(this.yt, e, i), !1), this.kh = l(n({
                style: "width: 100%;",
                title: "Feedback Envelope"
            }), t.Config.envelopes.map(t => t.name)), this.xh = i({
                className: "operatorRow"
            }, i({
                style: "margin-right: .1em; visibility: hidden;"
            }, "1."), i({
                style: "width: 3em; margin-right: .3em;"
            }), this.wh.container, i({
                className: "selectContainer",
                style: "width: 5em; margin-left: .3em;"
            }, this.kh)), this.Mh = i({
                class: "editor-controls"
            }, this.Hr, this.$r, this.Rr, this.gh, this.Ur, this.jr, this.Gr, this.Ir, i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("effects")
            }, "Effects:"), i({
                class: "selectContainer"
            }, this._r)), this.eh, this.sh, this.Xr, this.kr, this.nh, this.rh, this.xh, this.ah, this.dh, this.mh, this.Jr, this.Zr), this.Eh = i({
                className: "editor-controls"
            }, i({
                className: "selectRow"
            }, this.uh, this.ph)), this.Ch = i({
                id: "instrumentSettingsText",
                style: `margin: 3px 0; text-align: center; color: ${t.ColorConfig.secondaryText};`
            }, "Instrument Settings"), this.Sh = i({
                className: "editor-controls"
            }, this.Ch, this.Er, i({
                className: "selectRow",
                id: "typeSelectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("instrumentType")
            }, "Type: "), i(i({
                className: "pitchSelect"
            }, this.gr), i({
                className: "drumSelect"
            }, this.vr))), this.Pr, this.Fr, this.Mh), this.qh = t.SVG.path({
                d: "M -6 -6 H 6 V 6 H -6 V -6 M -2 -3 L -2 -3 L -1 -4 H 1 V 4 H -1 V -1.2 L -1.2 -1 H -2 V -3 z",
                fill: t.ColorConfig.indicatorSecondary,
                "fill-rule": "evenodd"
            }), this.Ph = t.SVG.path({
                d: "M -6 -0.8 H -3.8 V -6 H 0.8 V 4.4 H 2.2 V -0.8 H 6 V 0.8 H 3.8 V 6 H -0.8 V -4.4 H -2.2 V 0.8 H -6 z",
                fill: t.ColorConfig.indicatorSecondary
            }), this.Nh = i({
                className: "promptContainer",
                style: "display: none;"
            }), this.Th = i({
                style: "flex: 1; height: 100%; display: flex; overflow: hidden; justify-content: center;"
            }, this.Yo.container, this.Zo.container, this.Qo.container), this.Fh = i({
                class: "pattern-area"
            }, this.Nn.container, this.Th, this.ir.container), this.bn = i({
                class: "trackContainer"
            }, this.tr.container, this.er.container), this.Bh = i({
                class: "trackAndMuteContainer"
            }, this.Xo.container, this.bn), this.zh = new t.BarScrollBar(this.yt, this.bn), this.Rh = i({
                class: "track-area"
            }, this.Bh, this.zh.container), this.Lh = i({
                className: "settings-area noSelection"
            }, i({
                class: "version-area"
            }, i({
                style: "text-align: center; color: ${ColorConfig.secondaryText};"
            }, [this.vh.input])), i({
                class: "play-pause-area"
            }, i({
                class: "playback-bar-controls"
            }, this.sr, this.nr, this.or), i({
                class: "playback-volume-controls"
            }, o({
                class: "volume-speaker"
            }), this.rr.container)), i({
                class: "menu-area"
            }, i({
                class: "selectContainer menu file"
            }, this.hr), i({
                class: "selectContainer menu edit"
            }, this.ar), i({
                class: "selectContainer menu preferences"
            }, this.lr)), i({
                class: "song-settings-area"
            }, i({
                class: "editor-controls"
            }, i({
                className: "editor-song-settings"
            }, i({
                style: "margin: 3px 0; position: relative; text-align: center; color: ${ColorConfig.secondaryText};"
            }, i({
                class: "tip",
                style: "flex-shrink: 0; position:absolute; left: 0; top: 0; width: 12px; height: 12px",
                onclick: () => this.xr("usedPattern")
            }, t.SVG.svg({
                style: "flex-shrink: 0; position: absolute; left: 0; top: 0; pointer-events: none;",
                width: "12px",
                height: "12px",
                "margin-right": "0.5em",
                viewBox: "-6 -6 12 12"
            }, this.qh)), i({
                class: "tip",
                style: "flex-shrink: 0; position: absolute; left: 14px; top: 0; width: 12px; height: 12px",
                onclick: () => this.xr("usedInstrument")
            }, t.SVG.svg({
                style: "flex-shrink: 0; position: absolute; left: 0; top: 0; pointer-events: none;",
                width: "12px",
                height: "12px",
                "margin-right": "1em",
                viewBox: "-6 -6 12 12"
            }, this.Ph)), "Song Settings")), i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("scale")
            }, "Scale: "), i({
                class: "selectContainer"
            }, this.cr)), i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("key")
            }, "Key: "), i({
                class: "selectContainer"
            }, this.dr)), i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("tempo")
            }, "Tempo: "), o({
                style: "display: flex;"
            }, this.mr.container, this.ur)), i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("reverb")
            }, "Reverb: "), this.pr.container), i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("rhythm")
            }, "Rhythm: "), i({
                class: "selectContainer"
            }, this.yr)))), i({
                class: "instrument-settings-area"
            }, this.Sh, this.fh)), this.mainLayer = i({
                class: "beepboxEditor",
                tabIndex: "0"
            }, this.Fh, this.Rh, this.Lh, this.Nh), this.Ah = !1, this.Hh = null, this.$h = [], this.Dh = [], this.Ih = [], this._h = [], this.Oh = [], this.Uh = [], this.Vh = [], this.jh = [], this.Wh = [], this.Gh = !1, this.Kh = 0, this.Jh = (() => {
                this.mainLayer.focus({
                    preventScroll: !0
                })
            }), this.Yh = (() => {
                this.Zo.editingModLabel || this.mainLayer.focus()
            }), this.whenUpdated = (() => {
                this.Xo.container.style.display = this.yt.enableChannelMuting ? "" : "none";
                const e = this.bn.getBoundingClientRect();
                if (this.yt.trackVisibleBars = Math.floor((e.right - e.left) / this.yt.getBarWidth()), this.zh.render(), this.Xo.render(), this.tr.render(), document.activeElement != this.Zo.modDragValueLabel && this.Zo.editingModLabel && this.Zo.stopEditingModLabel(!1), this.Nn.container.style.display = this.yt.showLetters ? "" : "none", this.ir.container.style.display = this.yt.showScrollBar ? "" : "none", this.zh.container.style.display = this.yt.song.barCount > this.yt.trackVisibleBars ? "" : "none", this.yt.getFullScreen()) {
                    const t = this.Th.clientHeight / this.yt.windowPitchCount * 5,
                        e = this.Th.clientWidth / (3 * this.yt.song.beatsPerBar),
                        i = this.Th.clientWidth / (this.yt.song.beatsPerBar + 2),
                        s = Math.max(e, Math.min(i, t)) * this.yt.song.beatsPerBar;
                    this.Yo.container.style.width = s + "px", this.Zo.container.style.width = s + "px", this.Qo.container.style.width = s + "px", this.Yo.container.style.flexShrink = "0", this.Zo.container.style.flexShrink = "0", this.Qo.container.style.flexShrink = "0", this.Yo.container.style.display = "", this.Qo.container.style.display = "", this.Yo.render(), this.Qo.render()
                } else this.Zo.container.style.width = "", this.Zo.container.style.flexShrink = "", this.Yo.container.style.display = "none", this.Qo.container.style.display = "none";
                this.Zo.render();
                const i = [(this.yt.autoPlay ? "✓ " : "") + "Auto Play On Load", (this.yt.autoFollow ? "✓ " : "") + "Auto Follow Track", (this.yt.enableNotePreview ? "✓ " : "") + "Preview Added Notes", (this.yt.showLetters ? "✓ " : "") + "Show Piano Keys", (this.yt.showFifth ? "✓ " : "") + 'Highlight "Fifth" Notes', (this.yt.showChannels ? "✓ " : "") + "Show All Channels", (this.yt.showScrollBar ? "✓ " : "") + "Octave Scroll Bar", (this.yt.alwaysFineNoteVol ? "✓ " : "") + "Always Fine Note Vol.", (this.yt.enableChannelMuting ? "✓ " : "") + "Enable Channel Muting", (this.yt.displayBrowserUrl ? "✓ " : "") + "Display Song Data in URL", "Set Layout...", "Set Theme..."];
                for (let t = 0; t < i.length; t++) {
                    const e = this.lr.children[t + 1];
                    e.innerText != i[t] && (e.innerText = i[t])
                }
                const s = this.yt.song.channels[this.yt.channel],
                    n = this.yt.getCurrentPattern(),
                    o = this.yt.getCurrentInstrument(),
                    r = s.instruments[o],
                    h = this.mainLayer.contains(document.activeElement),
                    a = document.activeElement;
                if (d(this.cr, this.yt.song.scale), this.cr.title = t.Config.scales[this.yt.song.scale].realName, d(this.dr, t.Config.keys.length - 1 - this.yt.song.key), this.mr.updateValue(Math.max(0, Math.round(this.yt.song.tempo))), this.ur.value = Math.round(this.yt.song.tempo).toString(), this.vh.updateValue(this.yt.song.title), this.pr.updateValue(this.yt.song.reverb), d(this.yr, this.yt.song.rhythm), this.yt.song.getChannelIsMod(this.yt.channel)) {
                    m = !1, c = !1;
                    let e = Math.min(this.tr.ns, this.tr.rs),
                        i = Math.max(this.tr.ns, this.tr.rs),
                        n = Math.min(this.tr.os, this.tr.hs),
                        r = Math.max(this.tr.os, this.tr.hs);
                    if (0 != s.bars[this.yt.bar])
                        for (let t = 0; t < this.yt.song.barCount; t++) s.bars[t] == s.bars[this.yt.bar] && t != this.yt.bar && (t < e || t > i || this.yt.channel < n || this.yt.channel > r) && (m = !0, t = this.yt.song.barCount);
                    for (let t = 0; t < this.yt.song.barCount; t++) 0 != s.bars[t] && this.yt.song.getPatternInstrument(this.yt.channel, t) == o && t != this.yt.bar && (t < e || t > i || this.yt.channel < n || this.yt.channel > r) && (c = !0, t = this.yt.song.barCount);
                    m ? this.qh.style.setProperty("fill", t.ColorConfig.indicatorPrimary) : this.qh.style.setProperty("fill", t.ColorConfig.indicatorSecondary), c ? this.Ph.style.setProperty("fill", t.ColorConfig.indicatorPrimary) : this.Ph.style.setProperty("fill", t.ColorConfig.indicatorSecondary), this.gr.style.display = "none", this.vr.style.display = "none", $("#pitchPresetSelect").parent().hide(), $("#drumPresetSelect").parent().hide(), this.fh.appendChild(this.Eh), this.fh.insertBefore(this.Er, this.fh.firstChild), this.fh.insertBefore(this.Ch, this.fh.firstChild), this.Ch.textContent = "Modulator Settings", this.$r.style.display = "none", this.Hr.style.display = "none", this.ah.style.display = "none", this.dh.style.display = "none", this.Ir.style.display = "none", this.eh.style.display = "none", this.Ur.style.display = "none", this.jr.style.display = "none", this.Gr.style.display = "none", this.mh.style.display = "none", this.gh.style.display = "none", this.kr.style.display = "none", this.nh.style.display = "none", this.rh.style.display = "none", this.xh.style.display = "none", this.Jr.style.display = "none", this.Zr.style.display = "none", this.sh.style.display = "none", this.Xr.style.display = "none", this.Rr.style.display = "none", this.fh.style.display = "", this.fh.style.color = t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).primaryNote;
                    for (let e = 0; e < t.Config.modCount; e++) {
                        let i = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                            s = i.modStatuses[e],
                            n = i.modChannels[e] + (s == t.ModStatus.msForNoise ? this.yt.song.pitchChannelCount : 0),
                            o = i.modInstruments[e];
                        if (o >= this.yt.song.instrumentsPerChannel && (o = 0, i.modInstruments[e] = 0), n >= this.yt.song.pitchChannelCount && s == t.ModStatus.msForPitch && (s = t.ModStatus.msNone, i.modStatuses[e] = t.ModStatus.msNone), n >= this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount && s == t.ModStatus.msForNoise && (i.modStatuses[e] = t.ModStatus.msNone), this.Zh[e].children.length != 2 + this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount) {
                            for (; this.Zh[e].firstChild;) this.Zh[e].remove(0);
                            const t = [];
                            t.push("none"), t.push("song");
                            for (let e = 0; e < this.yt.song.pitchChannelCount; e++) t.push("pitch " + (e + 1));
                            for (let e = 0; e < this.yt.song.noiseChannelCount; e++) t.push("noise " + (e + 1));
                            l(this.Zh[e], t)
                        }
                        if (i.modStatuses[e] == t.ModStatus.msNone ? this.Zh[e].selectedIndex = 0 : i.modStatuses[e] == t.ModStatus.msForSong ? this.Zh[e].selectedIndex = 1 : i.modStatuses[e] == t.ModStatus.msForPitch ? this.Zh[e].selectedIndex = i.modChannels[e] + 2 : this.Zh[e].selectedIndex = i.modChannels[e] + 2 + this.yt.song.pitchChannelCount, this.Qh[e].children.length != this.yt.song.instrumentsPerChannel) {
                            for (; this.Qh[e].firstChild;) this.Qh[e].remove(0);
                            const t = [];
                            for (let e = 0; e < this.yt.song.instrumentsPerChannel; e++) t.push(e + 1);
                            l(this.Qh[e], t)
                        }
                        if (this.Qh[e].selectedIndex = i.modInstruments[e], s != t.ModStatus.msNone) {
                            let r = this.yt.song.channels[n].instruments[o];
                            for (; this.Xh[e].firstChild;) this.Xh[e].remove(0);
                            const h = [];
                            h.push("none"), "song" == this.Zh[e].children[this.Zh[e].selectedIndex].textContent ? (h.push("song volume"), h.push("tempo"), h.push("reverb"), h.push("next bar"), h.push("song detune")) : (h.push("volume"), h.push("pan"), h.push("filter cut"), h.push("filter peak"), h.push("detune"), 0 != r.type && 1 != r.type && 5 != r.type && 6 != r.type && 7 != r.type || h.push("vibrato depth"), 6 == r.type ? h.push("pulse width") : 1 == r.type && (h.push("fm slider 1"), h.push("fm slider 2"), h.push("fm slider 3"), h.push("fm slider 4"), h.push("fm feedback"))), l(this.Xh[e], h);
                            let a = !1,
                                c = 0;
                            switch (i.modSettings[e]) {
                                case t.ModSetting.mstSongVolume:
                                    s == t.ModStatus.msForSong ? c = 1 : a = !0;
                                    break;
                                case t.ModSetting.mstTempo:
                                    s == t.ModStatus.msForSong ? c = 2 : a = !0;
                                    break;
                                case t.ModSetting.mstReverb:
                                    s == t.ModStatus.msForSong ? c = 3 : a = !0;
                                    break;
                                case t.ModSetting.mstNextBar:
                                    s == t.ModStatus.msForSong ? c = 4 : a = !0;
                                    break;
                                case t.ModSetting.mstInsVolume:
                                    s == t.ModStatus.msForPitch || s == t.ModStatus.msForNoise ? c = 1 : a = !0;
                                    break;
                                case t.ModSetting.mstPan:
                                    s == t.ModStatus.msForPitch || s == t.ModStatus.msForNoise ? c = 2 : a = !0;
                                    break;
                                case t.ModSetting.mstDetune:
                                    s == t.ModStatus.msForPitch || s == t.ModStatus.msForNoise ? c = 5 : a = !0;
                                    break;
                                case t.ModSetting.mstVibratoDepth:
                                    s == t.ModStatus.msForPitch ? c = 6 : a = !0;
                                    break;
                                case t.ModSetting.mstFilterCut:
                                    s == t.ModStatus.msForPitch || s == t.ModStatus.msForNoise ? c = 3 : a = !0;
                                    break;
                                case t.ModSetting.mstFilterPeak:
                                    s == t.ModStatus.msForPitch || s == t.ModStatus.msForNoise ? c = 4 : a = !0;
                                    break;
                                case t.ModSetting.mstPulseWidth:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 6 != r.type ? a = !0 : c = 7;
                                    break;
                                case t.ModSetting.mstFMSlider1:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 1 != r.type ? a = !0 : c = 7;
                                    break;
                                case t.ModSetting.mstFMSlider2:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 1 != r.type ? a = !0 : c = 8;
                                    break;
                                case t.ModSetting.mstFMSlider3:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 1 != r.type ? a = !0 : c = 9;
                                    break;
                                case t.ModSetting.mstFMSlider4:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 1 != r.type ? a = !0 : c = 10;
                                    break;
                                case t.ModSetting.mstFMFeedback:
                                    s != t.ModStatus.msForPitch && s != t.ModStatus.msForNoise || 1 != r.type ? a = !0 : c = 11;
                                    break;
                                case t.ModSetting.mstSongDetune:
                                    s == t.ModStatus.msForSong ? c = 5 : a = !0;
                                    break;
                                case t.ModSetting.mstNone:
                            }
                            a ? (this.Xh[e].selectedIndex = 0, i.modSettings[e] = t.ModSetting.mstNone, this.ta(e)) : this.Xh[e].selectedIndex = c
                        } else i.modSettings[e] != t.ModSetting.mstNone && (this.Xh[e].selectedIndex = 0, this.ta(e));
                        "none" == this.Zh[e].children[this.Zh[e].selectedIndex].textContent || "song" == this.Zh[e].children[this.Zh[e].selectedIndex].textContent ? (this.Qh[e].parentElement.style.display = "none", $("#modInstrumentText" + e).get(0).style.display = "none", $("#modChannelText" + e).get(0).innerText = "Channel:", "none" == this.Zh[e].children[this.Zh[e].selectedIndex].textContent ? ($("#modSettingText" + e).get(0).style.display = "none", this.Xh[e].parentElement.style.display = "none") : ($("#modSettingText" + e).get(0).style.display = "", this.Xh[e].parentElement.style.display = "")) : (this.Qh[e].parentElement.style.display = this.yt.song.instrumentsPerChannel > 1 ? "" : "none", $("#modInstrumentText" + e).get(0).style.display = this.yt.song.instrumentsPerChannel > 1 ? "" : "none", $("#modChannelText" + e).get(0).innerText = this.yt.song.instrumentsPerChannel > 1 ? "Ch:" : "Channel:", $("#modSettingText" + e).get(0).style.display = "", this.Xh[e].parentElement.style.display = "")
                    }
                    for (let e = 0; e < t.Config.chords.length; e++) {
                        const t = this.th.children[e];
                        t.hasAttribute("hidden") || t.setAttribute("hidden", "")
                    }
                    this.Er.style.display = "none", this.Mh.style.display = "none", this.Fr.style.display = "none", this.Pr.style.display = "none", $("#typeSelectRow").css("display", "none"), this.Sh.style.color = t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).primaryNote, this.yt.channel >= this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount && this.Nn.forceRender()
                } else {
                    this.Mh.style.display = "", this.Fr.style.display = "", this.Rr.style.display = "", this.Pr.style.display = "", $("#typeSelectRow").css("display", ""), this.Sh.appendChild(this.Eh), this.Sh.insertBefore(this.Er, this.Sh.firstChild), this.Sh.insertBefore(this.Ch, this.Sh.firstChild), this.Ch.textContent = "Instrument Settings", this.fh.style.display = "none";
                    var c = !1,
                        m = !1;
                    if (0 != s.bars[this.yt.bar]) {
                        let t = Math.min(this.tr.ns, this.tr.rs),
                            e = Math.max(this.tr.ns, this.tr.rs),
                            i = Math.min(this.tr.os, this.tr.hs),
                            n = Math.max(this.tr.os, this.tr.hs);
                        for (let o = 0; o < this.yt.song.barCount; o++) s.bars[o] == s.bars[this.yt.bar] && o != this.yt.bar && (o < t || o > e || this.yt.channel < i || this.yt.channel > n) && (m = !0, o = this.yt.song.barCount);
                        for (let r = 0; r < this.yt.song.barCount; r++) 0 != s.bars[r] && this.yt.song.getPatternInstrument(this.yt.channel, r) == o && r != this.yt.bar && (r < t || r > e || this.yt.channel < i || this.yt.channel > n) && (c = !0, r = this.yt.song.barCount)
                    }
                    if (m ? this.qh.style.setProperty("fill", t.ColorConfig.indicatorPrimary) : this.qh.style.setProperty("fill", t.ColorConfig.indicatorSecondary), c ? this.Ph.style.setProperty("fill", t.ColorConfig.indicatorPrimary) : this.Ph.style.setProperty("fill", t.ColorConfig.indicatorSecondary), this.yt.song.getChannelIsNoise(this.yt.channel) ? (this.gr.style.display = "none", this.vr.style.display = "", $("#pitchPresetSelect").parent().hide(), $("#drumPresetSelect").parent().show(), d(this.vr, r.preset)) : (this.gr.style.display = "", this.vr.style.display = "none", $("#pitchPresetSelect").parent().show(), $("#drumPresetSelect").parent().hide(), d(this.gr, r.preset)), this.yt.alwaysShowSettings || r.preset == r.type) {
                        if (2 == r.type ? (this.$r.style.display = "", d(this.Ar, r.chipNoise)) : this.$r.style.display = "none", 3 == r.type ? (this.Hr.style.display = "none", this.ah.style.display = "", this.hh.render()) : this.ah.style.display = "none", 5 == r.type ? (this.Hr.style.display = "none", this.dh.style.display = "", this.lh.render()) : this.dh.style.display = "none", 4 == r.type) {
                            this.Hr.style.display = "none", this.mh.style.display = "", this.Ir.style.display = "none", this.eh.style.display = "none", this.Ur.style.display = "none", this.jr.style.display = "none", this.Gr.style.display = "none";
                            for (let e = 0; e < t.Config.drumCount; e++) d(this.Uh[e], r.drumsetEnvelopes[e]), this.Oh[e].render()
                        } else this.mh.style.display = "none", this.Ir.style.display = "", this.eh.style.display = "", this.Ur.style.display = "", this.jr.style.display = "", this.Gr.style.display = "";
                        if (0 == r.type && (this.Hr.style.display = "", d(this.Lr, r.chipWave)), 7 == r.type ? (this.gh.style.display = "", this.Hr.style.display = "none") : this.gh.style.display = "none", 6 == r.type ? (this.Hr.style.display = "none", this.Jr.style.display = "", this.Zr.style.display = "", this.Yr.input.title = t.prettyNumber(r.pulseWidth) + "%", d(this.Kr, r.pulseEnvelope), this.Yr.updateValue(r.pulseWidth)) : (this.Jr.style.display = "none", this.Zr.style.display = "none"), 1 == r.type) {
                            this.kr.style.display = "", this.nh.style.display = "", this.rh.style.display = "", this.xh.style.display = "", this.Hr.style.display = "none", d(this.wr, r.algorithm), d(this.oh, r.feedbackType), this.wh.updateValue(r.feedbackAmplitude), d(this.kh, r.feedbackEnvelope), this.kh.parentElement.style.color = r.feedbackAmplitude > 0 ? "" : t.ColorConfig.secondaryText;
                            for (let e = 0; e < t.Config.operatorCount; e++) {
                                const i = e < t.Config.algorithms[r.algorithm].carrierCount;
                                this.$h[e].style.color = i ? t.ColorConfig.primaryText : "", d(this._h[e], r.operators[e].frequency), this.Dh[e].updateValue(r.operators[e].amplitude), d(this.Ih[e], r.operators[e].envelope);
                                const s = (i ? "Voice " : "Modulator ") + (e + 1);
                                this._h[e].title = s + " Frequency", this.Dh[e].input.title = s + (i ? " Volume" : " Amplitude"), this.Ih[e].title = s + " Envelope", this.Ih[e].parentElement.style.color = r.operators[e].amplitude > 0 ? "" : t.ColorConfig.secondaryText
                            }
                        } else this.kr.style.display = "none", this.nh.style.display = "none", this.rh.style.display = "none", this.xh.style.display = "none";
                        if (2 == r.type) this.Hr.style.display = "none", this.sh.style.display = "none", this.Xr.style.display = "none";
                        else if (3 == r.type) this.sh.style.display = "none", this.Xr.style.display = "none";
                        else if (4 == r.type) this.sh.style.display = "none", this.Xr.style.display = "none";
                        else if (0 == r.type) this.sh.style.display = "", this.Xr.style.display = "";
                        else if (1 == r.type) this.sh.style.display = "", this.Xr.style.display = "none";
                        else if (5 == r.type) this.sh.style.display = "", this.Xr.style.display = "";
                        else if (6 == r.type) this.sh.style.display = "", this.Xr.style.display = "none";
                        else {
                            if (7 != r.type) throw new Error("Unrecognized instrument type: " + r.type);
                            this.sh.style.display = "", this.Xr.style.display = ""
                        }
                    }
                    for (let e = 0; e < t.Config.chords.length; e++) {
                        const i = !t.Config.instrumentTypeHasSpecialInterval[r.type] && t.Config.chords[e].isCustomInterval,
                            s = this.th.children[e];
                        i ? s.hasAttribute("hidden") || s.setAttribute("hidden", "") : s.removeAttribute("hidden")
                    }
                    this.Sh.style.color = t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).primaryNote, this.Or.updateValue(r.filterCutoff), this.Vr.updateValue(r.filterResonance), d(this.Wr, r.filterEnvelope), d(this.Dr, r.transition), d(this._r, r.effects), d(this.ih, r.vibrato), d(this.Qr, r.interval), d(this.th, r.chord), this.Tr.value = r.pan + "", this.zr.value = r.detune + "", this.Cr.updateValue(r.volume), this.Sr.value = "" + r.volume, this.yh.redrawCanvas()
                }
                if (this.Er.style.display = this.yt.song.instrumentsPerChannel > 1 ? "" : "none", this.Er.style.visibility = null == n ? "hidden" : "", this.Mr.children.length != this.yt.song.instrumentsPerChannel) {
                    for (; this.Mr.firstChild;) this.Mr.removeChild(this.Mr.firstChild);
                    const t = [];
                    for (let e = 0; e < this.yt.song.instrumentsPerChannel; e++) t.push(e + 1);
                    l(this.Mr, t)
                }
                this.Sh.style.color = t.ColorConfig.getChannelColor(this.yt.song, this.yt.channel).primaryNote, this.Or.updateValue(r.filterCutoff), this.Vr.updateValue(r.filterResonance), d(this.Wr, r.filterEnvelope), d(this.Dr, r.transition), d(this._r, r.effects), d(this.ih, r.vibrato), d(this.Qr, r.interval), d(this.th, r.chord), this.Cr.updateValue(r.volume), this.Nr.updateValue(r.pan), this.Br.updateValue(r.detune), d(this.Mr, o), this.rr.updateValue(this.yt.volume), h && null != a && 0 == a.clientWidth && this.Jh(), this.ea(this.yt.prompt), this.yt.autoFollow && !this.yt.synth.playing && this.yt.synth.goToBar(this.yt.bar)
            }), this.ia = (t => {
                17 == t.keyCode && (this.Zo.controlMode = !1)
            }), this.sa = (t => {
                switch (t.keyCode) {
                    case 8:
                    case 13:
                    case 38:
                    case 40:
                    case 37:
                    case 39:
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        t.stopPropagation()
                }
            }), this.ao = (e => {
                if (this.prompt) 27 == e.keyCode && this.yt.undo();
                else if (document.activeElement == this.vh.input || this.Zo.editingModLabel) 13 != e.keyCode && 27 != e.keyCode || (this.mainLayer.focus(), this.Zo.stopEditingModLabel(27 == e.keyCode));
                else if (document.activeElement != this.Tr && document.activeElement != this.zr && document.activeElement != this.Sr) switch (this.tr.onKeyPressed(e), e.keyCode) {
                    case 17:
                        this.Zo.controlMode = !0;
                        break;
                    case 32:
                        this.na(), e.preventDefault();
                        break;
                    case 90:
                        e.shiftKey ? this.yt.redo() : this.yt.undo(), e.preventDefault();
                        break;
                    case 89:
                        this.yt.redo(), e.preventDefault();
                        break;
                    case 67:
                        this.tr.copy(), this.tr.gs(), this.tr.qs(), e.preventDefault();
                        break;
                    case 13:
                        this.tr.insertBars(), e.preventDefault();
                        break;
                    case 8:
                        this.tr.deleteBars(), e.preventDefault();
                        break;
                    case 65:
                        e.shiftKey ? this.tr.selectChannel() : this.tr.selectAll(), e.preventDefault();
                        break;
                    case 68:
                        this.tr.duplicatePatterns(), e.preventDefault();
                        break;
                    case 70:
                        this.yt.synth.firstBar(), this.yt.autoFollow && new t.ChangeChannelBar(this.yt, this.yt.channel, Math.floor(this.yt.synth.playhead)), e.preventDefault();
                        break;
                    case 72:
                        this.yt.synth.jumpToEditingBar(this.yt.bar), new t.ChangeChannelBar(this.yt, this.yt.channel, Math.floor(this.yt.synth.playhead)), e.preventDefault();
                        break;
                    case 78:
                        const i = new t.ChangeGroup;
                        if (e.shiftKey || e.ctrlKey) {
                            let e = 0;
                            for (; e < this.yt.song.patternsPerChannel && this.yt.song.channels[this.yt.channel].patterns[e].notes.length > 0;) e++;
                            ++e <= t.Config.barCountMax && (e > this.yt.song.patternsPerChannel && i.append(new t.ChangePatternsPerChannel(this.yt, e)), i.append(new t.ChangePatternNumbers(this.yt, e, this.yt.bar, this.yt.channel, 1, 1)))
                        } else {
                            let e = 1;
                            for (; - 1 != this.yt.song.channels[this.yt.channel].bars.indexOf(e) && e <= this.yt.song.patternsPerChannel;) e++;
                            e <= t.Config.barCountMax && (e > this.yt.song.patternsPerChannel && i.append(new t.ChangePatternsPerChannel(this.yt, e)), i.append(new t.ChangePatternNumbers(this.yt, e, this.yt.bar, this.yt.channel, 1, 1)))
                        }
                        this.yt.record(i), e.preventDefault();
                        break;
                    case 77:
                        this.yt.enableChannelMuting && (this.tr.muteChannels(e.shiftKey), e.preventDefault());
                        break;
                    case 83:
                        this.yt.enableChannelMuting && (e.shiftKey ? this.tr.muteChannels(!1) : this.tr.soloChannels(), e.preventDefault());
                        break;
                    case 86:
                        e.shiftKey ? this.tr.pasteNumbers() : this.tr.pasteNotes(), e.preventDefault();
                        break;
                    case 73:
                        if (e.shiftKey) {
                            const t = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].toJsonObject();
                            delete t.volume, delete t.pan, delete t.preset, this.oa(JSON.stringify(t))
                        }
                        e.preventDefault();
                        break;
                    case 219:
                        this.yt.synth.prevBar(), this.yt.autoFollow && new t.ChangeChannelBar(this.yt, this.yt.channel, Math.floor(this.yt.synth.playhead)), e.preventDefault();
                        break;
                    case 221:
                        this.yt.synth.nextBar(), this.yt.autoFollow && new t.ChangeChannelBar(this.yt, this.yt.channel, Math.floor(this.yt.synth.playhead)), e.preventDefault();
                        break;
                    case 189:
                    case 173:
                        this.tr.transpose(!1, e.shiftKey || e.ctrlKey), e.preventDefault();
                        break;
                    case 187:
                    case 61:
                        this.tr.transpose(!0, e.shiftKey || e.ctrlKey), e.preventDefault()
                } else 13 != e.keyCode && 27 != e.keyCode || this.mainLayer.focus()
            }), this.ra = (() => {
                this.yt.synth.prevBar()
            }), this.ha = (() => {
                this.yt.synth.nextBar()
            }), this.na = (() => {
                this.yt.synth.playing ? this.aa() : (this.yt.synth.snapToBar(), this.la())
            }), this.ca = (() => {
                this.yt.setVolume(Number(this.rr.input.value))
            }), this.da = (() => {
                this.yt.record(new t.ChangeTempo(this.yt, -1, 0 | parseInt(this.ur.value)))
            }), this.ma = (() => {
                if (isNaN(this.cr.value)) {
                    switch (this.cr.value) {
                        case "forceScale":
                            this.tr.forceScale()
                    }
                    this.yt.notifier.changed()
                } else this.yt.record(new t.ChangeScale(this.yt, this.cr.selectedIndex))
            }), this.fa = (() => {
                if (isNaN(this.dr.value)) {
                    switch (this.dr.value) {
                        case "detectKey":
                            this.yt.record(new t.ChangeDetectKey(this.yt))
                    }
                    this.yt.notifier.changed()
                } else this.yt.record(new t.ChangeKey(this.yt, t.Config.keys.length - 1 - this.dr.selectedIndex))
            }), this.ua = (() => {
                if (isNaN(this.yr.value)) {
                    switch (this.yr.value) {
                        case "forceRhythm":
                            this.tr.forceRhythm()
                    }
                    this.yt.notifier.changed()
                } else this.yt.record(new t.ChangeRhythm(this.yt, this.yr.selectedIndex))
            }), this.pa = (() => {
                var t = this;
                setTimeout(function() {
                    t.mainLayer.focus()
                }, 20)
            }), this.ya = (() => {
                this.ba($("#pitchPresetSelect").val() + "")
            }), this.ga = (() => {
                this.ba($("#drumPresetSelect").val() + "")
            }), this.va = (() => {
                this.yt.record(new t.ChangeFeedbackType(this.yt, this.oh.selectedIndex))
            }), this.wa = (() => {
                this.yt.record(new t.ChangeFeedbackEnvelope(this.yt, this.kh.selectedIndex))
            }), this.ka = (() => {
                this.yt.record(new t.ChangeAlgorithm(this.yt, this.wr.selectedIndex))
            }), this.xa = (() => {
                this.tr.setInstrument(this.Mr.selectedIndex), this.yt.channel >= this.yt.song.pitchChannelCount + this.yt.song.noiseChannelCount && this.Nn.forceRender()
            }), this.Ma = (t => {
                this.tr.setModChannel(t, this.Zh[t].children[this.Zh[t].selectedIndex].textContent), this.Nn.forceRender()
            }), this.Ea = (t => {
                this.tr.setModInstrument(t, this.Qh[t].selectedIndex), this.Nn.forceRender()
            }), this.ta = (t => {
                this.tr.setModSetting(t, this.Xh[t].children[this.Xh[t].selectedIndex].textContent), this.Nn.forceRender()
            }), this.Ca = (() => {
                this.yt.record(new t.ChangeChipWave(this.yt, this.Lr.selectedIndex))
            }), this.Sa = (() => {
                this.yt.record(new t.ChangeNoiseWave(this.yt, this.Ar.selectedIndex))
            }), this.qa = (() => {
                this.yt.record(new t.ChangeFilterEnvelope(this.yt, this.Wr.selectedIndex))
            }), this.Pa = (() => {
                this.yt.record(new t.ChangePulseEnvelope(this.yt, this.Kr.selectedIndex))
            }), this.Na = (() => {
                this.yt.record(new t.ChangeTransition(this.yt, this.Dr.selectedIndex))
            }), this.Ta = (() => {
                this.yt.record(new t.ChangeEffects(this.yt, this._r.selectedIndex))
            }), this.Fa = (() => {
                this.yt.record(new t.ChangeVibrato(this.yt, this.ih.selectedIndex))
            }), this.Ba = (() => {
                this.yt.record(new t.ChangeInterval(this.yt, this.Qr.selectedIndex))
            }), this.za = (() => {
                this.yt.record(new t.ChangeChord(this.yt, this.th.selectedIndex))
            }), this.Ra = (e => {
                switch (this.hr.value) {
                    case "new":
                        this.yt.goBackToStart();
                        for (const t of this.yt.song.channels) t.muted = !1;
                        this.yt.record(new t.ChangeSong(this.yt, ""), 1, !0);
                        break;
                    case "export":
                        this.xr("export");
                        break;
                    case "import":
                        this.xr("import");
                        break;
                    case "copyUrl":
                        this.oa(new URL("#" + this.yt.song.toBase64String(), location.href).href);
                        break;
                    case "shareUrl":
                        navigator.share({
                            url: new URL("#" + this.yt.song.toBase64String(), location.href).href
                        });
                        break;
                    case "viewPlayer":
                        location.href = "player/#song=" + this.yt.song.toBase64String();
                        break;
                    case "copyEmbed":
                        this.oa(`<iframe width="384" height="60" style="border: none;" src="${new URL("player/#song="+this.yt.song.toBase64String(),location.href).href}"></iframe>`);
                        break;
                    case "songRecovery":
                        this.xr("songRecovery")
                }
                this.hr.selectedIndex = 0
            }), this.La = (t => {
                switch (this.ar.value) {
                    case "undo":
                        this.yt.undo();
                        break;
                    case "redo":
                        this.yt.redo();
                        break;
                    case "copy":
                        this.tr.copy();
                        break;
                    case "insertBars":
                        this.tr.insertBars();
                        break;
                    case "deleteBars":
                        this.tr.deleteBars();
                        break;
                    case "pasteNotes":
                        this.tr.pasteNotes();
                        break;
                    case "pasteNumbers":
                        this.tr.pasteNumbers();
                        break;
                    case "transposeUp":
                        this.tr.transpose(!0, !1);
                        break;
                    case "transposeDown":
                        this.tr.transpose(!1, !1);
                        break;
                    case "selectAll":
                        this.tr.selectAll();
                        break;
                    case "selectChannel":
                        this.tr.selectChannel();
                        break;
                    case "duplicatePatterns":
                        this.tr.duplicatePatterns();
                        break;
                    case "barCount":
                        this.xr("barCount");
                        break;
                    case "beatsPerBar":
                        this.xr("beatsPerBar");
                        break;
                    case "moveNotesSideways":
                        this.xr("moveNotesSideways");
                        break;
                    case "channelSettings":
                        this.xr("channelSettings")
                }
                this.ar.selectedIndex = 0
            }), this.Aa = (t => {
                switch (this.lr.value) {
                    case "autoPlay":
                        this.yt.autoPlay = !this.yt.autoPlay;
                        break;
                    case "autoFollow":
                        this.yt.autoFollow = !this.yt.autoFollow;
                        break;
                    case "enableNotePreview":
                        this.yt.enableNotePreview = !this.yt.enableNotePreview;
                        break;
                    case "showLetters":
                        this.yt.showLetters = !this.yt.showLetters;
                        break;
                    case "showFifth":
                        this.yt.showFifth = !this.yt.showFifth;
                        break;
                    case "showChannels":
                        this.yt.showChannels = !this.yt.showChannels;
                        break;
                    case "showScrollBar":
                        this.yt.showScrollBar = !this.yt.showScrollBar;
                        break;
                    case "alwaysFineNoteVol":
                        this.yt.alwaysFineNoteVol = !this.yt.alwaysFineNoteVol;
                        break;
                    case "enableChannelMuting":
                        this.yt.enableChannelMuting = !this.yt.enableChannelMuting;
                        for (const t of this.yt.song.channels) t.muted = !1;
                        break;
                    case "displayBrowserUrl":
                        this.yt.toggleDisplayBrowserUrl();
                        break;
                    case "fullScreen":
                        this.xr("layout");
                        break;
                    case "colorTheme":
                        this.xr("theme")
                }
                this.lr.selectedIndex = 0, this.yt.notifier.changed(), this.yt.savePreferences()
            }), this.Ha = (e => {
                let i = new Float64Array(64),
                    s = this.bh.selectedIndex - 1,
                    n = Number.MIN_VALUE,
                    o = Number.MAX_VALUE,
                    r = 0,
                    h = (t.Config.chipWaves[s].samples.length - 1) / 64;
                for (let e = 0; e < 64; e++) i[e] = (t.Config.chipWaves[s].samples[Math.floor(r)] - t.Config.chipWaves[s].samples[Math.floor(r) + 1]) / h, i[e] < o && (o = i[e]), i[e] > n && (n = i[e]), r += h;
                for (let t = 0; t < 64; t++) i[t] -= o, i[t] /= n - o, i[t] *= 48, i[t] -= 24, i[t] = Math.ceil(i[t]), this.yh.newArray[t] = i[t];
                this.yt.record(new t.ChangeCustomWave(this.yt, i)), this.yt.record(new t.ChangeVolume(this.yt, +this.Cr.input.value, -t.Config.volumeRange / 2 + Math.round(t.Config.chipWaves[s].volume * t.Config.volumeRange / 2))), this.bh.selectedIndex = 0, this.yt.notifier.changed(), this.yt.savePreferences()
            }), this.yt.notifier.watch(this.whenUpdated), window.addEventListener("resize", this.whenUpdated), "share" in navigator || this.hr.removeChild(this.hr.querySelector("[value='shareUrl']")), this.cr.appendChild(r({
                label: "Edit"
            }, h({
                value: "forceScale"
            }, "Snap Notes To Scale"))), this.dr.appendChild(r({
                label: "Edit"
            }, h({
                value: "detectKey"
            }, "Detect Key"))), this.yr.appendChild(r({
                label: "Edit"
            }, h({
                value: "forceRhythm"
            }, "Snap Notes To Rhythm"))), this.Vh = new Array(t.ModSetting.mstMaxValue), this.Wh = new Array(t.ModSetting.mstMaxValue), this.nh.appendChild(i({
                className: "operatorRow",
                style: "color: ${ColorConfig.secondaryText}; height: 1em; margin-top: 0.5em;"
            }, i({
                style: "margin-right: .1em; visibility: hidden;"
            }, "1."), i({
                style: "width: 3em; margin-right: .3em;",
                class: "tip",
                onclick: () => this.xr("operatorFrequency")
            }, "Freq:"), i({
                style: "width: 4em; margin: 0;",
                class: "tip",
                onclick: () => this.xr("operatorVolume")
            }, "Volume:"), i({
                style: "width: 5em; margin-left: .3em;",
                class: "tip",
                onclick: () => this.xr("operatorEnvelope")
            }, "Envelope:")));
            for (let e = 0; e < t.Config.operatorCount; e++) {
                const o = e,
                    r = i({
                        style: "margin-right: .1em; color: " + t.ColorConfig.secondaryText + ";"
                    }, e + 1 + "."),
                    h = l(n({
                        style: "width: 100%;",
                        title: "Frequency"
                    }), t.Config.operatorFrequencies.map(t => t.name)),
                    a = new u(s({
                        style: "margin: 0; width: 4em;",
                        type: "range",
                        min: "0",
                        max: t.Config.operatorAmplitudeMax,
                        value: "0",
                        step: "1",
                        title: "Volume"
                    }), this.yt, (e, i) => new t.ChangeOperatorAmplitude(this.yt, o, e, i), !1),
                    c = l(n({
                        style: "width: 100%;",
                        title: "Envelope"
                    }), t.Config.envelopes.map(t => t.name)),
                    d = i({
                        className: "operatorRow"
                    }, r, i({
                        className: "selectContainer",
                        style: "width: 3em; margin-right: .3em;"
                    }, h), a.container, i({
                        className: "selectContainer",
                        style: "width: 5em; margin-left: .3em;"
                    }, c));
                this.nh.appendChild(d), this.$h[e] = d, this.Dh[e] = a, this.Ih[e] = c, this._h[e] = h, c.addEventListener("change", () => {
                    this.yt.record(new t.ChangeOperatorEnvelope(this.yt, o, c.selectedIndex))
                }), h.addEventListener("change", () => {
                    this.yt.record(new t.ChangeOperatorFrequency(this.yt, o, h.selectedIndex))
                })
            }
            this.mh.appendChild(i({
                class: "selectRow"
            }, o({
                class: "tip",
                onclick: () => this.xr("drumsetEnvelope")
            }, "Envelope:"), o({
                class: "tip",
                onclick: () => this.xr("drumsetSpectrum")
            }, "Spectrum:")));
            for (let e = t.Config.drumCount - 1; e >= 0; e--) {
                const s = e,
                    o = new t.SpectrumEditor(this.yt, s);
                o.container.addEventListener("mousedown", this.Jh), this.Oh[e] = o;
                const r = l(n({
                    style: "width: 100%;",
                    title: "Filter Envelope"
                }), t.Config.envelopes.map(t => t.name));
                this.Uh[e] = r, r.addEventListener("change", () => {
                    this.yt.record(new t.ChangeDrumsetEnvelope(this.yt, s, r.selectedIndex))
                });
                const h = i({
                    class: "selectRow"
                }, i({
                    class: "selectContainer",
                    style: "width: 5em; margin-right: .3em;"
                }, r), this.Oh[e].container);
                this.mh.appendChild(h)
            }
            this.$a = [], this.Zh = [], this.Qh = [], this.Da = [], this.Xh = [];
            for (let e = 0; e < t.Config.modCount; e++) {
                let s = n({
                        style: "width: 100%; color: currentColor;"
                    }),
                    r = n({
                        style: "width: 100%; color: currentColor;"
                    }),
                    h = i({
                        className: "operatorRow",
                        style: "height: 1em; margin-bottom: 0.65em;"
                    }, i({
                        class: "tip",
                        style: "width: 1em; max-width: 5.4em;",
                        id: "modChannelText" + e,
                        onclick: () => this.xr("modChannel")
                    }, "Ch:"), i({
                        class: "selectContainer"
                    }, s), i({
                        class: "tip",
                        style: "width: 1.2em; margin-left: 0.8em;",
                        id: "modInstrumentText" + e,
                        onclick: () => this.xr("modInstrument")
                    }, "Ins:"), i({
                        class: "selectContainer"
                    }, r)),
                    a = n(),
                    l = i({
                        className: "selectRow",
                        id: "modSettingText" + e,
                        style: "margin-bottom: 0.9em; color: currentColor;"
                    }, o({
                        class: "tip",
                        onclick: () => this.xr("modSet")
                    }, "Setting: "), i({
                        className: "selectContainer"
                    }, a));
                this.$a.push(h), this.Zh.push(s), this.Qh.push(r), this.Da.push(l), this.Xh.push(a), this.fh.appendChild(i({
                    style: "margin: 3px 0; font-weight: bold; margin-bottom: 0.7em; text-align: center; color: " + t.ColorConfig.secondaryText + "; background: " + t.ColorConfig.uiWidgetBackground + ";"
                }, "Modulator " + (e + 1))), this.fh.appendChild(h), this.fh.appendChild(l)
            }
            this.hr.addEventListener("change", this.Ra), this.ar.addEventListener("change", this.La), this.lr.addEventListener("change", this.Aa), this.bh.addEventListener("change", this.Ha), this.ur.addEventListener("change", this.da), this.cr.addEventListener("change", this.ma), this.dr.addEventListener("change", this.fa), this.yr.addEventListener("change", this.ua), this.wr.addEventListener("change", this.ka), this.Mr.addEventListener("change", this.xa), this.oh.addEventListener("change", this.va), this.kh.addEventListener("change", this.wa), this.Lr.addEventListener("change", this.Ca), this.Ar.addEventListener("change", this.Sa), this.Dr.addEventListener("change", this.Na), this._r.addEventListener("change", this.Ta), this.Wr.addEventListener("change", this.qa), this.Kr.addEventListener("change", this.Pa), this.Qr.addEventListener("change", this.Ba), this.th.addEventListener("change", this.za), this.ih.addEventListener("change", this.Fa), this.sr.addEventListener("click", this.na), this.nr.addEventListener("click", this.ra), this.or.addEventListener("click", this.ha), this.rr.input.addEventListener("input", this.ca), this.Fh.addEventListener("mousedown", this.Yh), this.Rh.addEventListener("mousedown", this.Jh), this.rr.container.style.setProperty("flex-grow", "1"), this.rr.container.style.setProperty("display", "flex"), this.rr.container.style.setProperty("--mod-color", t.ColorConfig.multiplicativeModSlider), this.rr.container.style.setProperty("--mod-border-radius", "50%"), this.Cr.container.style.setProperty("--mod-color", t.ColorConfig.multiplicativeModSlider), this.Cr.container.style.setProperty("--mod-border-radius", "50%"), this.wh.container.style.setProperty("--mod-color", t.ColorConfig.multiplicativeModSlider), this.wh.container.style.setProperty("--mod-border-radius", "50%");
            for (let e = 0; e < t.Config.operatorCount; e++) this.Dh[e].container.style.setProperty("--mod-color", t.ColorConfig.multiplicativeModSlider), this.Dh[e].container.style.setProperty("--mod-border-radius", "50%");
            for (let e = 0; e < t.Config.modCount; e++) {
                let t = this;
                this.Zh[e].addEventListener("change", function() {
                    t.Ma(e)
                }), this.Qh[e].addEventListener("change", function() {
                    t.Ea(e)
                }), this.Xh[e].addEventListener("change", function() {
                    t.ta(e)
                })
            }
            if (this.Fh.addEventListener("mousedown", this.Jh), this.hh.container.addEventListener("mousedown", this.Jh), this.lh.container.addEventListener("mousedown", this.Jh), this.ur.addEventListener("keydown", this.sa, !1), this.mainLayer.addEventListener("keydown", this.ao), this.mainLayer.addEventListener("keyup", this.ia), this.uh.addEventListener("click", this.Ia.bind(this)), this.ph.addEventListener("click", this._a.bind(this)), this.Sr.addEventListener("input", () => {
                    this.yt.record(new t.ChangeVolume(this.yt, this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].volume, Math.min(25, Math.max(-25, Math.round(+this.Sr.value)))))
                }), this.Tr.addEventListener("input", () => {
                    this.yt.record(new t.ChangePan(this.yt, this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].pan, Math.min(100, Math.max(0, Math.round(+this.Tr.value)))))
                }), this.zr.addEventListener("input", () => {
                    this.yt.record(new t.ChangeDetune(this.yt, this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].detune, Math.min(t.Config.detuneMax, Math.max(t.Config.detuneMin, Math.round(+this.zr.value)))))
                }), this.gh.addEventListener("input", () => {
                    this.yt.record(new t.ChangeCustomWave(this.yt, this.yh.newArray))
                }), this.Nh.addEventListener("click", t => {
                    t.target == this.Nh && this.yt.undo()
                }), t.isMobile) {
                const t = this.lr.querySelector("[value=autoPlay]");
                t.disabled = !0, t.setAttribute("hidden", "")
            }
            if (window.screen.availWidth < 700) {
                const t = this.lr.querySelector("[value=fullScreen]");
                t.disabled = !0, t.setAttribute("hidden", "")
            }
        }
        Oa() {
            if (this.yt.synth.playing) {
                let i = this.yt.getCurrentInstrument();
                const s = this.yt.synth.isAnyModActive(this.yt.channel, i);
                if (s) {
                    let i = this.yt.getCurrentInstrument();

                    function e(t, e, i, s, n) {
                        const o = t.yt.synth.song.isSettingForSong(i);
                        if (t.yt.synth.isModActive(i, o, s, n)) {
                            let r = t.yt.synth.song.realToModValue(t.yt.synth.getModValue(i, o, s, n, !1), i) / t.yt.song.mstMaxVols.get(i);
                            return r != t.Wh[i] && (t.Wh[i] = r, e.container.style.setProperty("--mod-position", 96 * r + 2 + "%")), !0
                        }
                        return !1
                    }
                    for (let s = 0; s < t.ModSetting.mstMaxValue; s++) {
                        this.jh[s] = this.Vh[s];
                        let t = this.Ua(s);
                        null != t && (this.jh[s] = e(this, t, s, this.yt.channel, i))
                    }
                } else if (this.Gh)
                    for (let e = 0; e < t.ModSetting.mstMaxValue; e++) this.jh[e] = !1;
                if (s || this.Gh) {
                    let e = !1;
                    for (let i = 0; i < t.ModSetting.mstMaxValue; i++) {
                        if (this.jh[i] != this.Vh[i]) {
                            this.Vh[i] = this.jh[i];
                            let t = this.Ua(i);
                            null != t && (1 == this.Vh[i] ? t.container.classList.add("modSlider") : t.container.classList.remove("modSlider"))
                        }
                        1 == this.jh[i] && (e = !0)
                    }
                    this.Gh = e
                }
            } else {
                this.Gh = !1;
                for (let e = 0; e < t.ModSetting.mstMaxValue; e++)
                    if (1 == this.Vh[e]) {
                        this.Vh[e] = !1, this.jh[e] = !1;
                        let t = this.Ua(e);
                        null != t && t.container.classList.remove("modSlider")
                    }
            }
        }
        Ua(e) {
            switch (e) {
                case t.ModSetting.mstPan:
                    return this.Nr;
                case t.ModSetting.mstDetune:
                    return this.Br;
                case t.ModSetting.mstFMSlider1:
                    return this.Dh[0];
                case t.ModSetting.mstFMSlider2:
                    return this.Dh[1];
                case t.ModSetting.mstFMSlider3:
                    return this.Dh[2];
                case t.ModSetting.mstFMSlider4:
                    return this.Dh[3];
                case t.ModSetting.mstFMFeedback:
                    return this.wh;
                case t.ModSetting.mstPulseWidth:
                    return this.Yr;
                case t.ModSetting.mstFilterPeak:
                    return this.Vr;
                case t.ModSetting.mstFilterCut:
                    return this.Or;
                case t.ModSetting.mstInsVolume:
                    return this.Cr;
                case t.ModSetting.mstTempo:
                    return this.mr;
                case t.ModSetting.mstReverb:
                    return this.pr;
                case t.ModSetting.mstSongVolume:
                    return this.rr;
                default:
                    return null
            }
        }
        changeInstrument(t) {
            this.Mr.selectedIndex = t, this.xa()
        }
        xr(t) {
            this.yt.openPrompt(t), this.ea(t)
        }
        ea(e) {
            if (this.Hh != e && (this.Hh = e, this.prompt && (!this.Ah || this.prompt instanceof t.TipPrompt || this.la(), this.Ah = !1, this.Nh.style.display = "none", this.Nh.removeChild(this.prompt.container), this.prompt.cleanUp(), this.prompt = null, this.Jh()), e)) {
                switch (e) {
                    case "export":
                        this.prompt = new t.ExportPrompt(this.yt);
                        break;
                    case "import":
                        this.prompt = new t.ImportPrompt(this.yt);
                        break;
                    case "songRecovery":
                        this.prompt = new t.SongRecoveryPrompt(this.yt);
                        break;
                    case "barCount":
                        this.prompt = new t.SongDurationPrompt(this.yt);
                        break;
                    case "beatsPerBar":
                        this.prompt = new t.BeatsPerBarPrompt(this.yt);
                        break;
                    case "moveNotesSideways":
                        this.prompt = new t.MoveNotesSidewaysPrompt(this.yt);
                        break;
                    case "channelSettings":
                        this.prompt = new t.ChannelSettingsPrompt(this.yt);
                        break;
                    case "theme":
                        this.prompt = new t.ThemePrompt(this.yt);
                        break;
                    case "layout":
                        this.prompt = new t.LayoutPrompt(this.yt);
                        break;
                    default:
                        this.prompt = new t.TipPrompt(this.yt, e)
                }
                this.prompt && (this.prompt instanceof t.TipPrompt || (this.Ah = this.yt.synth.playing, this.aa()), this.Nh.style.display = "", this.Nh.appendChild(this.prompt.container))
            }
        }
        changeBarScrollPos(t) {
            this.zh.changePos(t)
        }
        updatePlayButton() {
            this.yt.synth.playing ? (this.sr.classList.remove("playButton"), this.sr.classList.add("pauseButton"), this.sr.title = "Pause (Space)", this.sr.innerText = "Pause") : (this.sr.classList.remove("pauseButton"), this.sr.classList.add("playButton"), this.sr.title = "Play (Space)", this.sr.innerText = "Play")
        }
        oa(t) {
            let e;
            if ((e = navigator).clipboard && e.clipboard.writeText) return void e.clipboard.writeText(t).catch(() => {
                window.prompt("Copy to clipboard:", t)
            });
            const i = document.createElement("textarea");
            i.innerText = t, document.body.appendChild(i), i.select();
            const s = document.execCommand("copy");
            i.remove(), this.Jh(), s || window.prompt("Copy this:", t)
        }
        la() {
            this.yt.synth.play(), this.updatePlayButton(), this.Kh = window.setInterval(() => this.Oa(), 30)
        }
        aa() {
            this.yt.synth.pause(), this.yt.synth.resetEffects(), this.yt.autoFollow && this.yt.synth.goToBar(this.yt.bar), this.yt.synth.snapToBar(), this.updatePlayButton(), window.clearInterval(this.Kh), window.setTimeout(() => this.Oa(), 20)
        }
        Ia() {
            const t = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()].toJsonObject();
            t.isDrum = this.yt.song.getChannelIsNoise(this.yt.channel), window.localStorage.setItem("instrumentCopy", JSON.stringify(t)), this.Jh()
        }
        _a() {
            const e = this.yt.song.channels[this.yt.channel].instruments[this.yt.getCurrentInstrument()],
                i = JSON.parse(String(window.localStorage.getItem("instrumentCopy")));
            null != i && i.isDrum == this.yt.song.getChannelIsNoise(this.yt.channel) && this.yt.record(new t.ChangePasteInstrument(this.yt, e, i)), this.Jh()
        }
        Va() {
            const e = this.yt.song.getChannelIsNoise(this.yt.channel);
            this.yt.record(new t.ChangePreset(this.yt, t.pickRandomPresetValue(e)))
        }
        ja() {
            this.yt.record(new t.ChangeRandomGeneratedInstrument(this.yt))
        }
        ba(e) {
            if (isNaN(e)) {
                switch (e) {
                    case "copyInstrument":
                        this.Ia();
                        break;
                    case "pasteInstrument":
                        this._a();
                        break;
                    case "randomPreset":
                        this.Va();
                        break;
                    case "randomGenerated":
                        this.ja()
                }
                this.yt.notifier.changed()
            } else this.yt.record(new t.ChangePreset(this.yt, parseInt(e)))
        }
    }
}(beepbox || (beepbox = {})),
function(t) {
    const e = new t.SongDocument,
        i = new t.SongEditor(e);
    if (document.getElementById("beepboxEditorContainer").appendChild(i.mainLayer), i.whenUpdated(), i.mainLayer.className += " load", i.mainLayer.getElementsByClassName("pattern-area")[0].className += " load", i.mainLayer.getElementsByClassName("settings-area")[0].className += " load", i.mainLayer.getElementsByClassName("editor-song-settings")[0].className += " load", i.mainLayer.getElementsByClassName("instrument-settings-area")[0].className += " load", i.mainLayer.getElementsByClassName("trackAndMuteContainer")[0].className += " load", i.mainLayer.getElementsByClassName("barScrollBar")[0].className += " load", $("#pitchPresetSelect").select2({
            dropdownAutoWidth: !0
        }), $("#drumPresetSelect").select2({
            dropdownAutoWidth: !0
        }), $("body").on("click", ".select2-container--open .select2-results__group", function() {
            $(this).siblings().toggle()
        }), $("#pitchPresetSelect").on("select2:open", function() {
            $(".select2-dropdown--below").css("opacity", 0), $(".select2-dropdown").css("opacity", 1), $("#pitchPresetSelect"), setTimeout(() => {
                let i = $(".select2-container--open .select2-results__group"),
                    s = $(".select2-container--open .select2-results__option");
                $.each(i, (i, s) => {
                    $(s).siblings().hide(), $(s)[0].setAttribute("style", "color: " + t.ColorConfig.getChannelColor(e.song, e.channel).primaryNote + ";")
                }), $.each(s, (i, s) => {
                    $(s)[0].setAttribute("style", "color: " + t.ColorConfig.getChannelColor(e.song, e.channel).primaryNote + ";")
                }), $(".select2-dropdown--below").css("opacity", 1)
            }, 0)
        }), $("#drumPresetSelect").on("select2:open", function() {
            $(".select2-dropdown--below").css("opacity", 0), $(".select2-dropdown").css("opacity", 1), $("#drumPresetSelect"), setTimeout(() => {
                let i = $(".select2-container--open .select2-results__group"),
                    s = $(".select2-container--open .select2-results__option");
                $.each(i, (i, s) => {
                    $(s).siblings().hide(), $(s)[0].setAttribute("style", "color: " + t.ColorConfig.getChannelColor(e.song, e.channel).primaryNote + ";")
                }), $.each(s, (i, s) => {
                    $(s)[0].setAttribute("style", "color: " + t.ColorConfig.getChannelColor(e.song, e.channel).primaryNote + ";")
                }), $(".select2-dropdown--below").css("opacity", 1)
            }, 0)
        }), $("#pitchPresetSelect").on("change", i.ya), $("#pitchPresetSelect").on("select2:close", i.pa), $("#drumPresetSelect").on("change", i.ga), $("#drumPresetSelect").on("select2:close", i.pa), i.mainLayer.focus(), !t.isMobile && e.autoPlay) {
        function s() {
            document.hidden || (e.synth.play(), i.updatePlayButton(), window.removeEventListener("visibilitychange", s))
        }
        document.hidden ? window.addEventListener("visibilitychange", s) : s()
    }
    "scrollRestoration" in history && (history.scrollRestoration = "manual"), i.updatePlayButton(), "serviceWorker" in navigator && navigator.serviceWorker.register("/service_worker.js", {
        updateViaCache: "all",
        scope: "/"
    }).catch(() => {})
}(beepbox || (beepbox = {}));