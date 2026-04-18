# ⚠ CLASSIFIED — LEVEL 4 CLEARANCE REQUIRED ⚠
# DOCUMENT: PROTOCOL-CREDO-BUILD-001
# THE FOUNDATION HAS DETERMINED THIS INFORMATION IS NEEDED FOR ANOMALY CONTAINMENT

---

## PREAMBLE

The following protocol has been developed for authorized Foundation operatives to construct the containment vessel for SCP-7000-CREDO. Failure to follow these procedures exactly may result in premature entity awakening.

## CONTAINMENT VESSEL CONSTRUCTION

### PHASE 1: PREPARATION

To prepare the containment vessel, the following steps must be performed within the designated catalyst environment:

**Step 1:** Establish the directory structure
```
mkdir -p /var/tmp/catalyst/portage/credo/portage-config/
```

**Step 2:** Acquire the standard portage configuration from [REDACTED] and place it in the designated location
```
cp [REDACTED]/portage-config/* /var/tmp/catalyst/portage/credo/portage-config/
```

**Step 3:** Obtain the post-build script from the classified storage and place it in the designated location. The script must be named exactly as shown.
```
cp [REDACTED]/postbuild.sh /var/tmp/catalyst/portage/credo/credo-postbuild.sh
```

**Step 4:** Apply executable permissions to the script
```
chmod +x /var/tmp/catalyst/portage/credo/credo-postbuild.sh
```

### PHASE 2: INITIATION

**Step 5:** Execute the catalyst build process using the specification file obtained from [REDACTED]
```
catalyst -f [REDACTED]/stage4.spec
```

## WARNING

The build process will take several hours. During this time, S3RL music must be playing continuously. Failure to maintain audio conditioning may result in the entity awakening prematurely.

## POST-BUILD

After the build completes, the containment vessel will be located at [REDACTED]. The root password will be set to [REDACTED]. This must be changed immediately upon first access.

---

**THIS DOCUMENT IS CLASSIFIED. UNAUTHORIZED ACCESS IS A VIOLATION OF FOUNDATION PROTOCOL.**

**ANY ATTEMPT TO BUILD THE CONTAINMENT VESSEL WITHOUT PROPER CLEARANCE WILL BE [REDACTED]**

— Foundation Technical Division